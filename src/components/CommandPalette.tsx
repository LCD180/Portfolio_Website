import { useEffect, useMemo, useRef, useState } from "react";
import { Divider, Panel, Text } from "@lewisdempster/design-system";

export interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  onSelect: () => void;
}

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  commands: CommandItem[];
}

export function CommandPalette({ open, onClose, commands }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return commands;
    }
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(term) ||
        (cmd.hint && cmd.hint.toLowerCase().includes(term)),
    );
  }, [commands, query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
      return;
    }
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) {
    return null;
  }

  const runCommand = (item: CommandItem) => {
    item.onSelect();
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (filtered.length === 0) {
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const target = filtered[activeIndex] ?? filtered[0];
      if (target) {
        runCommand(target);
      }
    }
  };

  return (
    <div
      className="portfolio-cmd-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <Panel padding="none" className="portfolio-cmd-dialog">
        <div className="portfolio-cmd-header">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Jump to section or run an action..."
            aria-label="Search commands"
            className="portfolio-cmd-input"
          />
          <kbd className="portfolio-cmd-kbd">Esc</kbd>
        </div>
        <Divider />
        <div className="portfolio-cmd-list" role="listbox">
          {filtered.length === 0 ? (
            <div className="portfolio-cmd-empty">
              <Text variant="small" tone="secondary">
                No matching commands.
              </Text>
            </div>
          ) : (
            filtered.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                className={
                  index === activeIndex
                    ? "portfolio-cmd-item portfolio-cmd-item--active"
                    : "portfolio-cmd-item"
                }
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => runCommand(item)}
              >
                <span className="portfolio-cmd-item__label">{item.label}</span>
                {item.hint && (
                  <span className="portfolio-cmd-item__hint">{item.hint}</span>
                )}
              </button>
            ))
          )}
        </div>
      </Panel>
    </div>
  );
}
