import { useState } from "react";
import {
  ArrowUpRightSquareIcon,
  Button,
  Divider,
  Panel,
  Text,
  useTheme,
} from "@lewisdempster/design-system";
import {
  designSystemInfo,
  inspectorComponents,
  inspectorTokens,
} from "../data/portfolio";

export interface DesignSystemFooterProps {
  outlineComponents: boolean;
  onToggleOutline: () => void;
}

export function DesignSystemFooter({
  outlineComponents,
  onToggleOutline,
}: DesignSystemFooterProps) {
  const { theme } = useTheme();
  const [inspectorOpen, setInspectorOpen] = useState(false);

  return (
    <footer className="portfolio-footer">
      <Panel padding="sm" className="portfolio-footer__panel">
        <div className="portfolio-footer__bar">
          <div className="portfolio-footer__meta">
            <a
              href={designSystemInfo.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="ds-text ds-text--small portfolio-footer__title-link"
            >
              <span>Built with {designSystemInfo.name}</span>
              <ArrowUpRightSquareIcon size={15} />
            </a>
            <Text variant="small" tone="secondary">
              Figma tokens / Playfair Display &amp; DM Sans /{" "}
              {theme === "dark" ? "Dark" : "Light"} theme
            </Text>
          </div>

          <div className="portfolio-footer__actions">
            <Button
              size="small"
              variant={outlineComponents ? "secondary" : "primary"}
              onClick={onToggleOutline}
              aria-pressed={outlineComponents}
            >
              {outlineComponents ? "Outlines On" : "Outline Components"}
            </Button>
            <Button
              size="small"
              variant={inspectorOpen ? "secondary" : "primary"}
              onClick={() => setInspectorOpen((prev) => !prev)}
              aria-expanded={inspectorOpen}
            >
              {inspectorOpen ? "Hide Tokens" : "Inspect Tokens"}
            </Button>
          </div>
        </div>

        {inspectorOpen && (
          <div className="portfolio-inspector">
            <Divider />
            <div className="portfolio-inspector__section">
              <Text variant="micro" tone="primary">
                Live Theme Tokens ({theme})
              </Text>
              <div className="portfolio-inspector__tokens">
                {inspectorTokens.map((token) => (
                  <div key={token.cssVar} className="portfolio-inspector__token">
                    <span
                      className="portfolio-inspector__swatch"
                      style={{ backgroundColor: `var(${token.cssVar})` }}
                      aria-hidden="true"
                    />
                    <div className="portfolio-inspector__token-meta">
                      <Text variant="small" tone="primary">
                        {token.name}
                      </Text>
                      <code className="portfolio-inspector__code">{token.cssVar}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="portfolio-inspector__section">
              <Text variant="micro" tone="primary">
                Package Primitives Used
              </Text>
              <div className="portfolio-inspector__chips">
                {inspectorComponents.map((name) => (
                  <span key={name} className="portfolio-inspector__chip">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Panel>
    </footer>
  );
}
