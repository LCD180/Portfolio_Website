import { useCallback, useEffect, useState } from "react";

interface ComponentLabel {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isHovered?: boolean;
}

interface Box {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const COMPONENT_SELECTORS = [
  { selector: ".ds-nav", name: "Navigation" },
  { selector: ".ds-panel--default", name: "Panel" },
  { selector: ".ds-textbox", name: "TextBox" },
  { selector: ".ds-accordion", name: "Accordion" },
  { selector: ".ds-panel--icon", name: "IconPanel" },
  { selector: ".ds-btn", name: "Button" },
  { selector: ".ds-borderless-btn", name: "BorderlessButton" },
  { selector: ".ds-badge", name: "Badge" },
] as const;

const LABEL_HEIGHT = 18;
const LABEL_GAP = 4;

function estimateLabelWidth(text: string): number {
  return Math.ceil(text.length * 6.4 + 14);
}

function boxesOverlap(a: Box, b: Box): boolean {
  return !(
    a.right + LABEL_GAP <= b.left ||
    a.left >= b.right + LABEL_GAP ||
    a.bottom + LABEL_GAP <= b.top ||
    a.top >= b.bottom + LABEL_GAP
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function resolveComponentName(el: Element): string | null {
  for (const entry of COMPONENT_SELECTORS) {
    if (el.matches(entry.selector)) {
      return entry.name;
    }
  }
  return null;
}

export interface ComponentOutlinerProps {
  enabled: boolean;
}

export function ComponentOutliner({ enabled }: ComponentOutlinerProps) {
  const [labels, setLabels] = useState<ComponentLabel[]>([]);
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);

  const computeLabels = useCallback(() => {
    if (!enabled) {
      setLabels([]);
      return;
    }

    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    const navEl = document.querySelector(".portfolio-nav-wrap");
    const navBottom = navEl ? navEl.getBoundingClientRect().bottom : 0;

    const placedBoxes: Box[] = [];
    const nextLabels: ComponentLabel[] = [];

    const addLabelForElement = (
      el: HTMLElement,
      name: string,
      id: string,
      isHovered = false,
    ) => {
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) {
        return;
      }
      if (rect.bottom < 0 || rect.top > viewportH) {
        return;
      }

      const text = isHovered
        ? `${name} (${Math.round(rect.width)}×${Math.round(rect.height)})`
        : name;
      const labelW = estimateLabelWidth(text);
      const inNav = Boolean(el.closest(".portfolio-nav-wrap"));

      const candidates = isHovered
        ? [
            { x: rect.left + 4, y: rect.top - LABEL_HEIGHT - 4 },
            { x: rect.left + 4, y: rect.bottom + 4 },
            { x: rect.right - labelW - 4, y: rect.top - LABEL_HEIGHT - 4 },
            { x: rect.left + 4, y: rect.top + 4 },
          ]
        : [
            { x: rect.left + 6, y: rect.top - 10 },
            { x: rect.right - labelW - 6, y: rect.top - 10 },
            { x: rect.right - labelW - 6, y: rect.bottom - 8 },
            { x: rect.left + 6, y: rect.bottom - 8 },
            { x: rect.left + 6, y: rect.top + 4 },
          ];

      for (const candidate of candidates) {
        const x = clamp(candidate.x, 4, Math.max(4, viewportW - labelW - 4));
        const y = clamp(candidate.y, 4, Math.max(4, viewportH - LABEL_HEIGHT - 4));

        if (!inNav && y < navBottom && y + LABEL_HEIGHT > 0) {
          continue;
        }

        const box: Box = {
          left: x,
          top: y,
          right: x + labelW,
          bottom: y + LABEL_HEIGHT,
        };

        if (isHovered || !placedBoxes.some((existing) => boxesOverlap(existing, box))) {
          placedBoxes.push(box);
          nextLabels.push({
            id,
            name: text,
            x,
            y,
            width: labelW,
            height: LABEL_HEIGHT,
            isHovered,
          });
          return;
        }
      }
    };

    if (hoveredEl && document.contains(hoveredEl)) {
      const hoveredName = resolveComponentName(hoveredEl);
      if (hoveredName) {
        addLabelForElement(hoveredEl, hoveredName, "hovered", true);
      }
    }

    let index = 0;
    for (const { selector, name } of COMPONENT_SELECTORS) {
      const elements = document.querySelectorAll<HTMLElement>(selector);
      for (const el of elements) {
        if (el === hoveredEl) {
          index += 1;
          continue;
        }
        addLabelForElement(el, name, `${name}-${index}`);
        index += 1;
      }
    }

    setLabels(nextLabels);
  }, [enabled, hoveredEl]);

  useEffect(() => {
    if (!enabled) {
      setLabels([]);
      setHoveredEl(null);
      return;
    }

    computeLabels();

    let rafId = 0;
    const scheduleUpdate = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        computeLabels();
      });
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        COMPONENT_SELECTORS.map((entry) => entry.selector).join(", "),
      ) as HTMLElement | null;
      setHoveredEl(target);
    };

    const handlePointerLeave = () => {
      setHoveredEl(null);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("mouseleave", handlePointerLeave);

    const mutationObserver = new MutationObserver(scheduleUpdate);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "aria-expanded"],
    });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("mouseleave", handlePointerLeave);
      mutationObserver.disconnect();
    };
  }, [enabled, computeLabels]);

  if (!enabled || labels.length === 0) {
    return null;
  }

  return (
    <div
      className="portfolio-outliner-layer"
      data-testid="component-outliner"
      aria-hidden="true"
    >
      {labels.map((label) => (
        <span
          key={label.id}
          className={
            label.isHovered
              ? "portfolio-outliner-badge portfolio-outliner-badge--hovered"
              : "portfolio-outliner-badge"
          }
          style={{
            transform: `translate3d(${label.x}px, ${label.y}px, 0)`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
}
