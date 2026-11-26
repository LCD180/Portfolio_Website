import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";

describe("Portfolio App", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders all wireframe sections", () => {
    render(<App />);

    expect(screen.getByText("Lewis Dempster", { selector: ".ds-nav__brand" })).toBeInTheDocument();
    expect(screen.getByLabelText("Social links")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "I’m Lewis," })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "About Me" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "My Job Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What Skills I Have" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "School Projects" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Awards and Interests" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contacts" })).toBeInTheDocument();
  });

  it("updates skill details when selecting another skill tile", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(document.querySelector(".ds-textbox__title")).toHaveTextContent("Java");

    const pythonSkill = screen.getByRole("button", { name: "Python" });
    await user.click(pythonSkill);

    expect(pythonSkill).toHaveAttribute("aria-pressed", "true");
    expect(document.querySelector(".ds-textbox__title")).toHaveTextContent(
      "Python",
    );
  });

  it("toggles experience accordion items and closes others when one opens", async () => {
    const user = userEvent.setup();
    render(<App />);

    const firstJob = screen.getByRole("button", {
      name: /Market Data Real Time - Backend Development/i,
    });
    const secondJob = screen.getByRole("button", {
      name: /Network Reliability Engineering \(NRE\)/i,
    });
    expect(firstJob).toHaveAttribute("aria-expanded", "true");
    expect(secondJob).toHaveAttribute("aria-expanded", "false");

    await user.click(secondJob);
    expect(secondJob).toHaveAttribute("aria-expanded", "true");
    expect(firstJob).toHaveAttribute("aria-expanded", "false");
  });

  it("copies email address to clipboard when clicking Copy", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<App />);

    const copyBtn = screen.getByRole("button", { name: "Copy" });
    await user.click(copyBtn);

    expect(writeText).toHaveBeenCalledWith("lewis.dempster@hotmail.com");
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();
    expect(screen.getByTestId("email-confetti")).toBeInTheDocument();
  });

  it("updates active nav link as sections intersect on scroll", () => {
    const observerCallbacks: IntersectionObserverCallback[] = [];
    class MockIntersectionObserver {
      constructor(cb: IntersectionObserverCallback) {
        observerCallbacks.push(cb);
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    Object.defineProperty(window, "scrollY", { configurable: true, value: 400 });

    render(<App />);

    const experienceSection = document.getElementById("experience");
    expect(experienceSection).not.toBeNull();

    act(() => {
      for (const cb of observerCallbacks) {
        cb(
          [
            {
              target: experienceSection!,
              isIntersecting: true,
            } as unknown as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      }
    });

    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("opens design system token inspector and renders non-overlapping component labels", async () => {
    const user = userEvent.setup();
    render(<App />);

    const inspectBtn = screen.getByRole("button", { name: "Inspect Tokens" });
    await user.click(inspectBtn);

    expect(screen.getByText(/Live Theme Tokens/i)).toBeInTheDocument();
    expect(screen.getByText("--ds-bg-page")).toBeInTheDocument();

    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: HTMLElement) {
        if (this.classList.contains("ds-nav")) {
          return {
            left: 20,
            top: 20,
            right: 1200,
            bottom: 92,
            width: 1180,
            height: 72,
            x: 20,
            y: 20,
            toJSON: () => {},
          };
        }
        if (this.classList.contains("ds-borderless-btn")) {
          return {
            left: 800,
            top: 36,
            right: 850,
            bottom: 68,
            width: 50,
            height: 32,
            x: 800,
            y: 36,
            toJSON: () => {},
          };
        }
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          toJSON: () => {},
        };
      },
    );

    const outlineBtn = screen.getByRole("button", {
      name: "Outline Components",
    });
    await user.click(outlineBtn);
    expect(
      document.querySelector('[data-inspect-outlines="true"]'),
    ).not.toBeNull();
    const outliner = screen.getByTestId("component-outliner");
    expect(outliner).toHaveTextContent("Navigation");
    expect(outliner).toHaveTextContent("BorderlessButton");
    const badges = Array.from(
      outliner.querySelectorAll<HTMLElement>(".portfolio-outliner-badge"),
    );
    expect(badges.length).toBeGreaterThanOrEqual(2);
    expect(badges.length).toBeLessThan(7);
  });

  it("opens command menu and filters commands", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.keyboard("{Meta>}k{/Meta}");
    const search = screen.getByRole("textbox", { name: "Search commands" });
    expect(search).toBeInTheDocument();

    await user.type(search, "Copy");
    expect(screen.getByRole("option", { name: /Copy email address/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("option", { name: /Go to Projects/i }),
    ).not.toBeInTheDocument();
  });

  it("navigates skills grid with arrow keys and updates scroll progress bar", async () => {
    const user = userEvent.setup();
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 2000,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 500,
    });

    render(<App />);

    const progress = screen.getByRole("progressbar", {
      name: "Page scroll progress",
    });
    expect(progress).toHaveAttribute("aria-valuenow", "50");

    const firstSkill = screen.getByRole("button", { name: "Java" });
    firstSkill.focus();

    await user.keyboard("{ArrowRight}");
    const secondSkill = screen.getByRole("button", { name: "Python" });
    expect(secondSkill).toHaveFocus();
    expect(secondSkill).toHaveAttribute("aria-pressed", "true");

    await user.keyboard("{ArrowDown}");
    const eighthSkill = screen.getByRole("button", {
      name: "YAML",
    });
    expect(eighthSkill).toHaveFocus();
    expect(eighthSkill).toHaveAttribute("aria-pressed", "true");
  });
});
