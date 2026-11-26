import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  Accordion,
  ArrowUpRightSquareIcon,
  Badge,
  Button,
  Divider,
  Heading,
  IconPanel,
  Navigation,
  Panel,
  Text,
  TextBox,
  ThemeProvider,
  useTheme,
} from "@lewisdempster/design-system";
import { CommandPalette, type CommandItem } from "./components/CommandPalette";
import { ComponentOutliner } from "./components/ComponentOutliner";
import { DesignSystemFooter } from "./components/DesignSystemFooter";
import {
  appliedInTargets,
  awardEntries,
  contactsContent,
  educationEntries,
  experienceEntries,
  heroContent,
  interestItems,
  navigationItems,
  personalProjectEntries,
  schoolProjectEntries,
  skillFilterGroups,
  skills,
  topSocialBadges,
  type AccordionEntry,
  type SkillFilterGroupId,
} from "./data/portfolio";

const confettiPieces = [
  { tx: "-58px", ty: "-64px", rot: "-140deg", color: "#335959", delay: "0ms", wide: true },
  { tx: "-36px", ty: "-82px", rot: "110deg", color: "#edf1fe", delay: "20ms", wide: false },
  { tx: "-14px", ty: "-92px", rot: "-85deg", color: "#4f8787", delay: "10ms", wide: true },
  { tx: "12px", ty: "-90px", rot: "130deg", color: "#cbd3ec", delay: "30ms", wide: false },
  { tx: "38px", ty: "-78px", rot: "-120deg", color: "#335959", delay: "15ms", wide: true },
  { tx: "62px", ty: "-58px", rot: "95deg", color: "#a19fa8", delay: "25ms", wide: false },
  { tx: "-74px", ty: "-28px", rot: "160deg", color: "#cbd3ec", delay: "35ms", wide: false },
  { tx: "-48px", ty: "-42px", rot: "-65deg", color: "#4f8787", delay: "5ms", wide: true },
  { tx: "50px", ty: "-34px", rot: "145deg", color: "#edf1fe", delay: "10ms", wide: false },
  { tx: "76px", ty: "-20px", rot: "-110deg", color: "#335959", delay: "30ms", wide: true },
  { tx: "-64px", ty: "16px", rot: "80deg", color: "#edf1fe", delay: "20ms", wide: false },
  { tx: "-30px", ty: "-54px", rot: "-165deg", color: "#a19fa8", delay: "40ms", wide: true },
  { tx: "26px", ty: "-56px", rot: "75deg", color: "#4f8787", delay: "15ms", wide: false },
  { tx: "66px", ty: "14px", rot: "-95deg", color: "#cbd3ec", delay: "25ms", wide: true },
  { tx: "-18px", ty: "-32px", rot: "125deg", color: "#335959", delay: "35ms", wide: false },
  { tx: "18px", ty: "-28px", rot: "-135deg", color: "#ffffff", delay: "0ms", wide: true },
];

function AccordionEntryList({
  entries,
  openId,
  onOpenIdChange,
  timeline = false,
  hideOrganisationBadge = false,
}: {
  entries: AccordionEntry[];
  openId: string | null;
  onOpenIdChange: (id: string | null) => void;
  timeline?: boolean;
  hideOrganisationBadge?: boolean;
}) {
  return (
    <div
      className={
        timeline
          ? "portfolio-accordion-list portfolio-accordion-list--timeline"
          : "portfolio-accordion-list"
      }
    >
      {entries.map((entry) => {
        const isOpen = openId === entry.id;
        return (
          <div
            key={entry.id}
            className={
              timeline
                ? isOpen
                  ? "portfolio-timeline-item portfolio-timeline-item--open"
                  : "portfolio-timeline-item"
                : undefined
            }
          >
            {timeline && (
              <span className="portfolio-timeline-node" aria-hidden="true" />
            )}
            <Accordion
              id={`entry-${entry.id}`}
              open={isOpen}
              onOpenChange={(nextOpen) =>
                onOpenIdChange(nextOpen ? entry.id : null)
              }
              title={
                <span className="portfolio-accordion-header">
                  <span className="portfolio-accordion-header__title">
                    {entry.title}
                  </span>
                  <span className="portfolio-accordion-header__badges">
                    {!hideOrganisationBadge && (
                      <Badge variant="accent">{entry.organisation}</Badge>
                    )}
                    <Badge variant="default">{entry.period}</Badge>
                  </span>
                </span>
              }
            >
              <div className="portfolio-entry-body">
                <ul className="portfolio-bullet-list">
                  {entry.paragraphs.map((paragraph, pIndex) => (
                    <li key={pIndex} className="portfolio-bullet-item">
                      <Text as="span" variant="body" tone="secondary">
                        {paragraph}
                      </Text>
                    </li>
                  ))}
                </ul>
                <div className="portfolio-tag-row">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="subtle">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {entry.link && (
                  <div>
                    <a
                      href={entry.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="ds-btn ds-btn--secondary ds-btn--small"
                    >
                      <span>{entry.link.label}</span>
                      <span className="ds-btn__icon">
                        <ArrowUpRightSquareIcon size={16} />
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}

const cmeExperienceEntries = experienceEntries.filter(
  (entry) => entry.organisation === "CME Group",
);
const otherExperienceEntries = experienceEntries.filter(
  (entry) => entry.organisation !== "CME Group",
);

function PortfolioPage() {
  const { theme, toggleTheme } = useTheme();
  const [activeNav, setActiveNav] = useState("home");
  const [selectedSkillId, setSelectedSkillId] = useState(skills[0].id);
  const [activeSkillFilter, setActiveSkillFilter] =
    useState<SkillFilterGroupId>("all");
  const [openExperienceId, setOpenExperienceId] = useState<string | null>(
    experienceEntries[0]?.id ?? null,
  );
  const [openPersonalProjectId, setOpenPersonalProjectId] = useState<
    string | null
  >(null);
  const [openSchoolProjectId, setOpenSchoolProjectId] = useState<string | null>(
    null,
  );
  const [emailCopied, setEmailCopied] = useState(false);
  const [confettiBurstId, setConfettiBurstId] = useState(0);
  const [confettiSource, setConfettiSource] = useState<"top" | "bottom">(
    "bottom",
  );
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [outlineComponents, setOutlineComponents] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const manualLockUntilRef = useRef(0);
  const copyTimerRef = useRef<number | null>(null);
  const confettiTimerRef = useRef<number | null>(null);
  const skillButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectedSkill =
    skills.find((skill) => skill.id === selectedSkillId) ?? skills[0];

  const handleSelectSkillFilter = (groupId: SkillFilterGroupId) => {
    setActiveSkillFilter(groupId);
    if (groupId !== "all" && selectedSkill.filterGroup !== groupId) {
      const firstMatch = skills.find((skill) => skill.filterGroup === groupId);
      if (firstMatch) {
        setSelectedSkillId(firstMatch.id);
      }
    }
  };

  const handleNavigate = (id: string) => {
    manualLockUntilRef.current = Date.now() + 700;
    setActiveNav(id);
  };

  const jumpToSection = (id: string) => {
    handleNavigate(id);
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    jumpToSection("experience");
  };

  const handleAppliedInClick = (item: string) => {
    const target = appliedInTargets[item];
    if (!target) {
      return;
    }

    if (target.group === "experience" && target.entryId) {
      setOpenExperienceId(target.entryId);
    } else if (target.group === "personal" && target.entryId) {
      setOpenPersonalProjectId(target.entryId);
    } else if (target.group === "school" && target.entryId) {
      setOpenSchoolProjectId(target.entryId);
    }

    const navTarget =
      target.sectionId === "education" ? "other" : target.sectionId;
    handleNavigate(navTarget);

    const element =
      (target.entryId && document.getElementById(`entry-${target.entryId}`)) ||
      document.getElementById(target.sectionId);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSkillKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const buttons = skillButtonRefs.current;
    let cols = 6;
    if (buttons[0] && buttons.length > 1) {
      const firstTop = buttons[0].offsetTop;
      const detected = buttons.findIndex(
        (btn, idx) => idx > 0 && btn !== null && btn.offsetTop > firstTop,
      );
      if (detected > 0) {
        cols = detected;
      }
    }

    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % skills.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + skills.length) % skills.length;
    } else if (event.key === "ArrowDown") {
      nextIndex = Math.min(skills.length - 1, index + cols);
    } else if (event.key === "ArrowUp") {
      nextIndex = Math.max(0, index - cols);
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = skills.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setSelectedSkillId(skills[nextIndex].id);
      buttons[nextIndex]?.focus();
    }
  };

  const handleCopyEmail = async (source: "top" | "bottom" = "bottom") => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contactsContent.emailValue);
      } else {
        const input = document.createElement("textarea");
        input.value = contactsContent.emailValue;
        input.setAttribute("readonly", "");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setConfettiSource(source);
      setEmailCopied(true);
      setConfettiBurstId((prev) => prev + 1);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setEmailCopied(false);
        copyTimerRef.current = null;
      }, 2000);
      if (confettiTimerRef.current !== null) {
        window.clearTimeout(confettiTimerRef.current);
      }
      confettiTimerRef.current = window.setTimeout(() => {
        setConfettiBurstId(0);
        confettiTimerRef.current = null;
      }, 900);
    } catch {
      setEmailCopied(false);
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      if (confettiTimerRef.current !== null) {
        window.clearTimeout(confettiTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sectionIds = navigationItems.map((item) => item.id);
    const visibleIds = new Set<string>();
    let observer: IntersectionObserver | null = null;

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              visibleIds.add(entry.target.id);
            } else {
              visibleIds.delete(entry.target.id);
            }
          }

          if (Date.now() < manualLockUntilRef.current) {
            return;
          }

          if (window.scrollY < 40) {
            setActiveNav("home");
            return;
          }

          for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
            if (visibleIds.has(sectionIds[i])) {
              setActiveNav(sectionIds[i]);
              return;
            }
          }
        },
        {
          rootMargin: "-120px 0px -45% 0px",
          threshold: 0,
        },
      );

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      }
    }

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;
      setScrollProgress(ratio);

      if (Date.now() < manualLockUntilRef.current) {
        return;
      }
      if (window.scrollY < 40) {
        setActiveNav("home");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (typeof IntersectionObserver === "undefined") {
      revealTargets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );

    for (const el of revealTargets) {
      revealObserver.observe(el);
    }

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands: CommandItem[] = useMemo(
    () => [
      ...navigationItems.map((item) => ({
        id: `nav-${item.id}`,
        label: `Go to ${item.label}`,
        hint: `#${item.id}`,
        onSelect: () => jumpToSection(item.id),
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        hint: contactsContent.emailValue,
        onSelect: () => {
          void handleCopyEmail();
        },
      },
      {
        id: "toggle-theme",
        label: `Switch to ${theme === "dark" ? "Light" : "Dark"} mode`,
        hint: "Theme",
        onSelect: toggleTheme,
      },
      {
        id: "toggle-outlines",
        label: outlineComponents
          ? "Hide component outlines"
          : "Outline design system components",
        hint: "Inspector",
        onSelect: () => setOutlineComponents((prev) => !prev),
      },
    ],
    [outlineComponents, theme],
  );

  return (
    <div
      className="portfolio-page"
      data-inspect-outlines={outlineComponents ? "true" : undefined}
    >
      <header className="portfolio-nav-wrap">
        <div className="portfolio-nav-box">
          <Navigation
            brand="Lewis Dempster"
            brandHref="#home"
            items={navigationItems}
            activeId={activeNav}
            onNavigate={handleNavigate}
            className="portfolio-nav"
            actions={
              <Button size="small" variant="primary" onClick={toggleTheme}>
                {theme === "dark" ? "Light" : "Dark"}
              </Button>
            }
          />
          <div
            className="portfolio-scroll-progress"
            role="progressbar"
            aria-label="Page scroll progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(scrollProgress * 100)}
          >
            <div
              className="portfolio-scroll-progress__bar"
              style={{ transform: `scaleX(${scrollProgress})` }}
            />
          </div>
        </div>
      </header>

      <main className="portfolio-shell">
        <section id="home" className="portfolio-hero">
          <div className="portfolio-hero__left">
            <div className="portfolio-hero__socials" aria-label="Social links">
              {topSocialBadges.map((social) =>
                social.id === "email" ? (
                  <div key={social.id} className="portfolio-copy-wrap">
                    <button
                      type="button"
                      onClick={() => {
                        void handleCopyEmail("top");
                      }}
                      aria-live="polite"
                      className={
                        emailCopied
                          ? "ds-badge ds-badge--accent portfolio-social-badge"
                          : "ds-badge ds-badge--subtle portfolio-social-badge"
                      }
                    >
                      <span>{emailCopied ? "Email Copied!" : social.label}</span>
                    </button>
                    {confettiBurstId > 0 && confettiSource === "top" && (
                      <div
                        key={confettiBurstId}
                        className="portfolio-confetti"
                        data-testid="email-confetti"
                        aria-hidden="true"
                      >
                        {confettiPieces.map((piece, index) => (
                          <span
                            key={index}
                            className={
                              piece.wide
                                ? "portfolio-confetti__piece portfolio-confetti__piece--wide"
                                : "portfolio-confetti__piece"
                            }
                            style={
                              {
                                "--tx": piece.tx,
                                "--ty": piece.ty,
                                "--rot": piece.rot,
                                "--delay": piece.delay,
                                "--color": piece.color,
                              } as CSSProperties
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noreferrer" : undefined}
                    className="ds-badge ds-badge--subtle portfolio-social-badge"
                  >
                    <span>{social.label}</span>
                    {social.external && <ArrowUpRightSquareIcon size={13} />}
                  </a>
                ),
              )}
            </div>

            <Heading level="display">{heroContent.greeting}</Heading>
            <Text
              variant="hero-intro"
              tone="secondary"
              className="portfolio-hero__intro"
            >
              {heroContent.intro}
            </Text>

            <Button
              variant="secondary"
              size="large"
              rightIcon={<ArrowUpRightSquareIcon size={20} />}
              className="portfolio-hero__cta"
              onClick={scrollToExperience}
            >
              {heroContent.ctaLabel}
            </Button>
          </div>

          <Panel padding="md" className="portfolio-hero__about">
            <div className="portfolio-section-header">
              <Heading level="section" className="portfolio-section-heading">
                {heroContent.aboutTitle}
              </Heading>
            </div>
            <div className="portfolio-copy-stack">
              {heroContent.aboutParagraphs.map((paragraph, index) => (
                <Text key={index} variant="body" tone="secondary">
                  {paragraph}
                </Text>
              ))}
            </div>
          </Panel>
        </section>

        <section id="experience" data-reveal>
          <Panel padding="lg" className="portfolio-section-panel">
            <div className="portfolio-section-header portfolio-section-header--wrap">
              <Heading level="section" className="portfolio-section-heading">
                My Job Experience
              </Heading>
              <Badge variant="accent">CME Group Apprenticeship · 2024 - 2026</Badge>
            </div>

            <AccordionEntryList
              entries={cmeExperienceEntries}
              openId={openExperienceId}
              onOpenIdChange={setOpenExperienceId}
              timeline
              hideOrganisationBadge
            />

            <div className="portfolio-timeline-group">
              <Text variant="micro" tone="secondary">
                Earlier Experience
              </Text>
              <AccordionEntryList
                entries={otherExperienceEntries}
                openId={openExperienceId}
                onOpenIdChange={setOpenExperienceId}
              />
            </div>
          </Panel>
        </section>

        <section id="skills" data-reveal>
          <Panel padding="lg" className="portfolio-section-panel">
            <div className="portfolio-section-header portfolio-section-header--wrap">
              <Heading level="section" className="portfolio-section-heading">
                What Skills I Have
              </Heading>
              <div
                className="portfolio-skill-filters"
                role="group"
                aria-label="Filter skills by category"
              >
                {skillFilterGroups.map((group) => {
                  const isActive = activeSkillFilter === group.id;
                  return (
                    <button
                      key={group.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => handleSelectSkillFilter(group.id)}
                      className={
                        isActive
                          ? "ds-badge ds-badge--accent portfolio-skill-filter-btn portfolio-skill-filter-btn--active"
                          : "ds-badge ds-badge--subtle portfolio-skill-filter-btn"
                      }
                    >
                      {group.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="portfolio-skills-layout">
              <div
                className="portfolio-skills-grid"
                role="group"
                aria-label="Skills"
              >
                {skills.map((skill, index) => {
                  const isSelected = skill.id === selectedSkill.id;
                  const isDimmed =
                    activeSkillFilter !== "all" &&
                    skill.filterGroup !== activeSkillFilter;
                  return (
                    <IconPanel
                      key={skill.id}
                      ref={(el) => {
                        skillButtonRefs.current[index] = el;
                      }}
                      label={skill.name}
                      selected={isSelected}
                      tabIndex={isSelected ? 0 : -1}
                      className={
                        isDimmed ? "portfolio-skill-tile--dimmed" : undefined
                      }
                      onClick={() => {
                        setSelectedSkillId(skill.id);
                        if (isDimmed) {
                          setActiveSkillFilter("all");
                        }
                      }}
                      onKeyDown={(event) => handleSkillKeyDown(event, index)}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="portfolio-skill-img"
                      />
                    </IconPanel>
                  );
                })}
              </div>

              <TextBox
                title={
                  <div className="portfolio-skill-detail-header">
                    <div className="portfolio-skill-detail-title">
                      <img
                        src={selectedSkill.icon}
                        alt=""
                        className="portfolio-skill-header-img"
                      />
                      <span>{selectedSkill.name}</span>
                    </div>
                    <Badge variant="accent">{selectedSkill.category}</Badge>
                  </div>
                }
                className="portfolio-skills-detail"
              >
                <div className="portfolio-skill-detail-body">
                  <ul className="portfolio-bullet-list">
                    {selectedSkill.description.map((paragraph, index) => (
                      <li key={index} className="portfolio-bullet-item">
                        <Text as="span" variant="body" tone="secondary">
                          {paragraph}
                        </Text>
                      </li>
                    ))}
                  </ul>

                  <Divider />

                  <div className="portfolio-applied-block">
                    <Text variant="micro" tone="primary">
                      Applied In
                    </Text>
                    <div className="portfolio-tag-row">
                      {selectedSkill.appliedIn.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className="ds-badge ds-badge--subtle portfolio-applied-badge"
                          onClick={() => handleAppliedInClick(item)}
                        >
                          <span>{item}</span>
                          <ArrowUpRightSquareIcon size={12} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </TextBox>
            </div>
          </Panel>
        </section>

        <section id="projects" className="portfolio-projects-stack" data-reveal>
          <Panel padding="lg" className="portfolio-section-panel">
            <div className="portfolio-section-header">
              <Heading level="section" className="portfolio-section-heading">
                Projects
              </Heading>
            </div>
            <AccordionEntryList
              entries={personalProjectEntries}
              openId={openPersonalProjectId}
              onOpenIdChange={setOpenPersonalProjectId}
            />
          </Panel>

          <Panel padding="lg" className="portfolio-section-panel">
            <div className="portfolio-section-header">
              <Heading level="section" className="portfolio-section-heading">
                School Projects
              </Heading>
            </div>
            <AccordionEntryList
              entries={schoolProjectEntries}
              openId={openSchoolProjectId}
              onOpenIdChange={setOpenSchoolProjectId}
            />
          </Panel>
        </section>

        <section id="education" data-reveal>
          <Panel padding="lg" className="portfolio-section-panel">
            <div className="portfolio-section-header">
              <Heading level="section" className="portfolio-section-heading">
                Education
              </Heading>
            </div>
            <div className="portfolio-education-grid">
              {educationEntries.map((edu) => (
                <TextBox
                  key={edu.id}
                  id={`entry-${edu.id}`}
                  title={
                    <div className="portfolio-edu-header">
                      <span>{edu.institution}</span>
                      <Badge variant="default">{edu.period}</Badge>
                    </div>
                  }
                  padding="comfortable"
                >
                  <div className="portfolio-copy-stack">
                    <div className="portfolio-tag-row">
                      <Badge variant="accent">{edu.qualification}</Badge>
                      {edu.highlight && (
                        <Badge variant="subtle">{edu.highlight}</Badge>
                      )}
                    </div>
                    <ul className="portfolio-bullet-list">
                      {edu.details.map((paragraph, index) => (
                        <li key={index} className="portfolio-bullet-item">
                          <Text as="span" variant="body" tone="secondary">
                            {paragraph}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TextBox>
              ))}
            </div>
          </Panel>
        </section>

        <div className="portfolio-bottom-row" data-reveal>
          <section id="other">
            <Panel padding="md" className="portfolio-card">
              <div className="portfolio-section-header">
                <Heading level="section" className="portfolio-section-heading">
                  Awards and Interests
                </Heading>
              </div>

              <div className="portfolio-awards-grid">
                {awardEntries.map((award) => (
                  <TextBox
                    key={award.id}
                    variant="titleless"
                    padding="comfortable"
                  >
                    <div className="portfolio-award-card">
                      <div className="portfolio-award-card__header">
                        <Text variant="body" tone="primary">
                          {award.title}
                        </Text>
                        <Badge variant="accent">{award.badge}</Badge>
                      </div>
                      <Text variant="small" tone="secondary">
                        {award.description}
                      </Text>
                    </div>
                  </TextBox>
                ))}
              </div>

              <TextBox title="Interests" padding="comfortable">
                <div className="portfolio-interests-list">
                  {interestItems.map((interest) => (
                    <div key={interest.name} className="portfolio-interest-item">
                      <Text variant="body" tone="primary">
                        {interest.name}
                      </Text>
                      <Text variant="small" tone="secondary">
                        {interest.detail}
                      </Text>
                    </div>
                  ))}
                </div>
              </TextBox>
            </Panel>
          </section>

          <section id="contact">
            <Panel padding="md" className="portfolio-card">
              <div className="portfolio-section-header">
                <Heading level="section" className="portfolio-section-heading">
                  {contactsContent.title}
                </Heading>
              </div>
              <TextBox variant="titleless" padding="comfortable">
                <div className="portfolio-contacts-list">
                  <div className="portfolio-contact-block">
                    <Text variant="body" tone="primary">
                      {contactsContent.emailLabel}
                    </Text>
                    <div className="portfolio-contact-email-row">
                      <a
                        className="ds-text ds-text--body portfolio-contact-link"
                        href={`mailto:${contactsContent.emailValue}`}
                      >
                        {contactsContent.emailValue}
                      </a>
                      <div className="portfolio-copy-wrap">
                        <Button
                          size="small"
                          variant={emailCopied ? "secondary" : "primary"}
                          onClick={() => {
                            void handleCopyEmail("bottom");
                          }}
                          aria-live="polite"
                        >
                          {emailCopied ? "Copied" : "Copy"}
                        </Button>
                        {confettiBurstId > 0 && confettiSource === "bottom" && (
                          <div
                            key={confettiBurstId}
                            className="portfolio-confetti"
                            data-testid="email-confetti"
                            aria-hidden="true"
                          >
                            {confettiPieces.map((piece, index) => (
                              <span
                                key={index}
                                className={
                                  piece.wide
                                    ? "portfolio-confetti__piece portfolio-confetti__piece--wide"
                                    : "portfolio-confetti__piece"
                                }
                                style={
                                  {
                                    "--tx": piece.tx,
                                    "--ty": piece.ty,
                                    "--rot": piece.rot,
                                    "--delay": piece.delay,
                                    "--color": piece.color,
                                  } as CSSProperties
                                }
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Divider />

                  <div className="portfolio-contact-block">
                    <Text variant="body" tone="primary">
                      {contactsContent.linkedinLabel}
                    </Text>
                    <Text variant="body" tone="secondary">
                      {contactsContent.linkedinName}
                    </Text>
                    <a
                      className="ds-text ds-text--body portfolio-contact-link"
                      href={`https://${contactsContent.linkedinHandle}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contactsContent.linkedinHandle}
                    </a>
                  </div>

                  <Divider />

                  <div className="portfolio-contact-block">
                    <Text variant="body" tone="primary">
                      {contactsContent.githubLabel}
                    </Text>
                    <a
                      className="ds-text ds-text--body portfolio-contact-link"
                      href={`https://${contactsContent.githubHandle}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contactsContent.githubHandle}
                    </a>
                  </div>
                </div>
              </TextBox>
            </Panel>
          </section>
        </div>

        <DesignSystemFooter
          outlineComponents={outlineComponents}
          onToggleOutline={() => setOutlineComponents((prev) => !prev)}
        />
      </main>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        commands={commands}
      />

      <ComponentOutliner enabled={outlineComponents} />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <PortfolioPage />
    </ThemeProvider>
  );
}
