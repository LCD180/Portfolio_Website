export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string[];
  appliedIn: string[];
}

export interface AccordionEntry {
  id: string;
  title: string;
  organisation: string;
  period: string;
  paragraphs: string[];
  tags: string[];
  link?: {
    label: string;
    url: string;
  };
}

export interface SocialBadgeLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export const designSystemInfo = {
  name: "Simple Portfolio Design System",
  figmaUrl:
    "https://www.figma.com/design/PF0IgqJo2FrfDJcUJ34tgi/Portfolio-Design-System--Community-?node-id=0-1&p=f&t=WwRBNGHV2KDK12J6-0",
};

export interface EducationEntry {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  highlight?: string;
  details: string[];
}

export interface AwardEntry {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export interface TokenPreview {
  name: string;
  cssVar: string;
}

export const navigationItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "other", label: "Other", href: "#other" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const topSocialBadges: SocialBadgeLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lewis-dempster-b884672b3",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/LCD180",
    external: true,
  },
  {
    id: "figma",
    label: "Figma Community",
    href: designSystemInfo.figmaUrl,
    external: true,
  },
  {
    id: "email",
    label: "lewis.dempster@hotmail.com",
    href: "mailto:lewis.dempster@hotmail.com",
  },
];

export const heroContent = {
  greeting: "I’m Lewis,",
  roleBadge: "IT Higher Level Apprentice @ CME Group",
  intro:
    "A software developer building interfaces that balance elegant aesthetics with zero friction usability.",
  ctaLabel: "View Experience",
  aboutTitle: "Who am I",
  aboutParagraphs: [
    "IT Higher Level Apprentice (HLA) at CME Group studying BSc (Hons) Computing Systems at Ulster University.",
    "Experienced across backend market data engineering, full-stack web tooling, vulnerability compliance, and UI/UX design systems.",
    "Fast learner who thrives in Agile teams with clear requirements, defined tickets, and daily standups.",
  ],
};

export const skills: SkillItem[] = [
  {
    id: "java",
    name: "Java",
    icon: "./icons/java.svg",
    category: "Languages & Backend",
    description: [
      "Optimised Java data processing models for the Market Data Real Time (MDRT) billing application querying BigQuery logs, cutting execution time by 76%.",
      "Resolved Java 17 runtime issues across containerised builds using Google Jib and Artifact Registry.",
    ],
    appliedIn: ["MDRT Billing Application", "Java 17 CI/CD Pipelines", "BSc Computing Systems"],
  },
  {
    id: "python",
    name: "Python",
    icon: "./icons/python.svg",
    category: "Languages & ML",
    description: [
      "Built a concurrent Python data upload script on a dedicated VM for continuous GCP transfers, doubling transfer speeds.",
      "Used Python in the NRE Graph tool rebuild and in an adversarial machine learning artwork protection platform with PyTorch.",
    ],
    appliedIn: ["Concurrent GCP Data Upload", "NRE Graph Tool", "Adversarial ML Art Platform"],
  },
  {
    id: "csharp",
    name: "C#",
    icon: "./icons/csharp.svg",
    category: "Languages",
    description: [
      "Developed object-oriented software systems in C#, including A-Level Software Systems Development where my AS-Level coursework scored 100% and was showcased by CCEA as exemplary work.",
    ],
    appliedIn: ["CCEA Exemplary Coursework (100%)", "Software Systems Development", "BSc Computing Systems"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "./icons/javascript.svg",
    category: "Frontend & Fullstack",
    description: [
      "Rebuilt the legacy Network Reliability Engineering (NRE) Graph tool frontend, improving UX flow and load speeds.",
      "Built React component libraries and Google App Scripts APIs for automated internal software request workflows.",
    ],
    appliedIn: ["NRE Graph Tool Overhaul", "Simple Portfolio Design System", "Software Request Form API"],
  },
  {
    id: "html5",
    name: "HTML5",
    icon: "./icons/html5.svg",
    category: "Frontend",
    description: [
      "Built accessible, semantic web interfaces for the NRE Graph tool rebuild, custom design system components, and digital form workflows.",
    ],
    appliedIn: ["NRE Graph Tool", "Portfolio Web App", "Digital Form Services"],
  },
  {
    id: "css3",
    name: "CSS3",
    icon: "./icons/css3.svg",
    category: "Frontend & Design Systems",
    description: [
      "Translated Figma token collections into CSS custom properties supporting dark and light modes, responsive layouts, and fluid animations.",
    ],
    appliedIn: ["Simple Portfolio Design System", "NRE Custom Design System"],
  },
  {
    id: "sql",
    name: "SQL & BigQuery",
    icon: "./icons/sql.svg",
    category: "Data & Analytics",
    description: [
      "Queried and optimised high-volume log and billing datasets across relational databases and Google BigQuery for real-time market data billing.",
    ],
    appliedIn: ["MDRT BigQuery Billing", "Database Systems"],
  },
  {
    id: "yaml",
    name: "YAML",
    icon: "./icons/yaml.svg",
    category: "Cloud & DevOps",
    description: [
      "Authored Kubernetes cluster manifests and custom Argo Workflows CI/CD pipeline definitions separating local builds from cluster deployments.",
    ],
    appliedIn: ["Argo Workflows CI/CD", "GKE Cluster Configurations"],
  },
  {
    id: "figma",
    name: "Figma",
    icon: "./icons/figma.svg",
    category: "UI/UX & Design Systems",
    description: [
      "Designed reusable components for the CME Design System and interface layouts for the CME Trading Simulator.",
      "Prototyped 3D floor maps for the CME Desk Booking System redesign and published the Simple Portfolio Design System on Figma Community.",
    ],
    appliedIn: ["CME Design System", "Desk Booking Redesign", "CME Trading Simulator", "Simple Portfolio Design System"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes (GKE)",
    icon: "./icons/kubernetes.svg",
    category: "Cloud & DevOps",
    description: [
      "Configured NATS JetStream clusters, Key-Value stores, and backend microservices on Google Kubernetes Engine (GKE).",
    ],
    appliedIn: ["MDRT Market Data Streaming", "GKE Environment Isolation"],
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    icon: "./icons/googlecloud.svg",
    category: "Cloud & DevOps",
    description: [
      "Migrated and maintained services from on-prem servers to GCP using Pub/Sub, GKE, BigQuery, Artifact Registry, Cloud Logging, and Cloud Monitoring.",
    ],
    appliedIn: ["On-Prem to Cloud Migration", "GCP Pub/Sub & BigQuery", "Concurrent VM Data Upload"],
  },
  {
    id: "argo",
    name: "Argo Workflows & Google Jib",
    icon: "./icons/argo.svg",
    category: "CI/CD Automation",
    description: [
      "Modernised CI/CD pipelines using custom Argo Workflows and Google Jib (Artifact Registry), resolving Java 17 runtime issues.",
    ],
    appliedIn: ["MDRT CI/CD Modernisation", "Artifact Registry Builds"],
  },
  {
    id: "nats",
    name: "NATS JetStream",
    icon: "./icons/nats.svg",
    category: "Real-Time Messaging",
    description: [
      "Configured NATS JetStream and Key-Value stores on GKE to stream real-time market data to customers via WebSockets and Google Pub/Sub.",
    ],
    appliedIn: ["MDRT Real-Time Market Data"],
  },
  {
    id: "grpc",
    name: "gRPC, WebSockets & Pact",
    icon: "./icons/grpc.svg",
    category: "APIs & Contract Testing",
    description: [
      "Maintained backwards compatibility across gRPC microservices and WebSocket streams by integrating Pact API contract testing into deployment pipelines.",
    ],
    appliedIn: ["MDRT WebSockets & gRPC", "Pact Contract Testing"],
  },
  {
    id: "pytorch",
    name: "PyTorch & Machine Learning",
    icon: "./icons/pytorch.svg",
    category: "AI & Adversarial ML",
    description: [
      "Building a full-stack social platform for artists using PyTorch and Hugging Face to apply adversarial noise against AI scraping.",
    ],
    appliedIn: ["Full-Stack Art Platform & Adversarial ML"],
  },
  {
    id: "androidstudio",
    name: "Android Studio & Enterprise Tooling",
    icon: "./icons/androidstudio.svg",
    category: "Mobile, Scripts & SecOps",
    description: [
      "Worked with Android Studio, Google App Scripts APIs, Tripwire Enterprise and Remedy (resolving 1,000+ cleartext password exposures), and Jamf/Oomnitza.",
    ],
    appliedIn: ["Software Request Form API", "Tripwire Enterprise VMT", "Android Studio"],
  },
];

export const experienceEntries: AccordionEntry[] = [
  {
    id: "cme-mdrt",
    title: "Market Data Real Time - Backend Development",
    organisation: "CME Group",
    period: "May 2026 - Dec 2026",
    paragraphs: [
      "Configured NATS JetStream and Key-Value stores on GKE to stream real-time market data via WebSockets and Google Pub/Sub.",
      "Optimised Java billing models interacting with BigQuery log records, reducing execution time by 76%.",
      "Updated CI/CD pipelines with Argo Workflows (YAML) and Google Jib (Artifact Registry) to resolve Java 17 runtime issues.",
      "Added Pact API contract testing for gRPC backwards compatibility and supported on-prem to GCP service migrations.",
    ],
    tags: ["Java 17", "NATS JetStream", "Key-Value Stores", "GKE", "WebSockets", "Pub/Sub", "BigQuery", "Argo Workflows", "Google Jib", "Pact", "gRPC"],
  },
  {
    id: "cme-desk-booking-role",
    title: "Enterprise Desk Booking System Redesign - UX/UI Lead",
    organisation: "CME Group",
    period: "Jun 2026 - Dec 2026",
    paragraphs: [
      "Co-led the end-to-end UX/UI redesign of CME Group's enterprise desk-booking system for the Belfast office.",
      "Conducted staff surveys and competitor analysis, translating findings into structured project requirements.",
      "Designed interactive Figma prototypes using the CME Design System, featuring 3D cartoon-style floor maps, bulk/recurring bookings, and space utilisation metrics.",
      "Presented research insights, live workflow demos, and final UI designs to the Senior Director of Product Management and Executive Leadership.",
    ],
    tags: ["Figma", "CME Design System", "User Research", "3D Floor Maps", "Executive Presentation"],
  },
  {
    id: "cme-vmt",
    title: "Vulnerability Management Team (VMT) - Compliance",
    organisation: "CME Group",
    period: "Dec 2025 - May 2026",
    paragraphs: [
      "Audited production releases, maintained server compliance, and resolved security vulnerabilities across CME infrastructure.",
      "Led an initiative eliminating over 1,000 cleartext password exposures across the VMT environment.",
      "Reviewed Change Requests (CRQs) using Tripwire Enterprise, Alphabet, and Remedy, authorising compliant releases and blocking high-risk deployments.",
    ],
    tags: ["Tripwire Enterprise", "Remedy", "Alphabet", "CRQ Gatekeeping", "Credential Remediation"],
  },
  {
    id: "cme-nre",
    title: "Network Reliability Engineering (NRE) - Fullstack Development",
    organisation: "CME Group",
    period: "Jun 2025 - Dec 2025",
    paragraphs: [
      "Overhauled the legacy NRE Graph tool frontend using HTML, CSS, JavaScript, and Python with a custom CME-aligned design system.",
      "Built concurrent Python scripts on a dedicated VM to automate GCP data uploads, bypassing bandwidth bottlenecks and doubling transfer speeds.",
      "Delivered full-stack features in a fully remote Agile team environment.",
    ],
    tags: ["Python", "JavaScript", "HTML & CSS", "Smart Concurrency", "GCP", "Custom Design System"],
  },
  {
    id: "cme-cx",
    title: "Customer Experience - UI/UX Designer",
    organisation: "CME Group",
    period: "Nov 2024 - Jun 2025",
    paragraphs: [
      "Designed accessible, reusable components in Figma for the CME Design System (buttons, mobile menus, dropdowns, tooltips, accordions, loaders).",
      "Created wireframes, navigation bars, and specialised workspace layouts for the CME Trading Simulator.",
      "Performed cross-team UI/UX quality assurance and presented design rationale to stakeholders.",
    ],
    tags: ["Figma", "CME Design System", "CME Trading Simulator", "UI/UX QA", "Agile"],
  },
  {
    id: "cme-desktop",
    title: "Desktop Support Engineer",
    organisation: "CME Group",
    period: "Sep 2024 - Nov 2024",
    paragraphs: [
      "Managed the full hardware lifecycle of company laptops and desktops for Belfast staff.",
      "Provisioned Windows PCs and Apple Macs via Jamf and Oomnitza, resolving hardware and software support tickets.",
      "Handled secure hardware decommissioning, physical dismantling, and certified data wiping.",
    ],
    tags: ["Windows", "macOS", "Jamf", "Oomnitza", "Endpoint Lifecycle", "Certified Data Wiping"],
  },
  {
    id: "displaynote-work-exp",
    title: "IT Work Experience - Product Chatbot Prototype",
    organisation: "Generation Innovation / DisplayNote",
    period: "Jul 2023",
    paragraphs: [
      "Built a product customer-service chatbot prototype for Northern Ireland tech company DisplayNote.",
      "Pitched the working prototype and business case directly to the CEO.",
    ],
    tags: ["Chatbot Prototype", "Customer Service AI", "CEO Pitch"],
  },
  {
    id: "civil-service-and-mcdonalds",
    title: "Civil Service IT Work Experience & McDonald’s Crew Member",
    organisation: "NI Civil Service / McDonald’s",
    period: "Jul 2022 - Sep 2024",
    paragraphs: [
      "Northern Ireland Civil Service (Nov 2022): Completed practical IT training in accounting software and digital form creation services.",
      "McDonald’s Crew Member (Jul 2022 - Sep 2024): Awarded Employee of the Month twice and Employee of the Quarter once in a fast-paced team environment.",
    ],
    tags: ["Accounting & Form Services", "Employee of the Quarter", "2× Employee of the Month"],
  },
];

export const personalProjectEntries: AccordionEntry[] = [
  {
    id: "art-platform",
    title: "Full-Stack Art Platform & Adversarial ML Protection",
    organisation: "Personal Project",
    period: "Current",
    paragraphs: [
      "Building a full-stack social platform for artists integrated with machine learning protection workflows.",
      "Uses PyTorch and Hugging Face models to apply adversarial noise (Glaze/Nightshade concept) so uploaded artwork resists AI scraping.",
    ],
    tags: ["PyTorch", "Hugging Face", "Adversarial ML", "Python", "Full-Stack"],
  },
  {
    id: "portfolio-ds",
    title: "Portfolio Website & Simple Portfolio Design System",
    organisation: "Personal Project / Figma Community",
    period: "2026",
    paragraphs: [
      "Designed and published the Simple Portfolio Design System and wireframes on Figma Community with dark and light mode token collections.",
      "Built a reusable React + TypeScript component package and this interactive portfolio website directly from the Figma tokens.",
    ],
    tags: ["Figma Community", "React", "TypeScript", "Simple Portfolio Design System"],
    link: {
      label: "View Simple Portfolio Design System on Figma Community",
      url: designSystemInfo.figmaUrl,
    },
  },
  {
    id: "appscripts-api",
    title: "Software Request Form AppScripts API",
    organisation: "Automation & Tooling",
    period: "Project",
    paragraphs: [
      "Built a Google App Scripts API integration to automate Software Request Form submissions and approval routing.",
    ],
    tags: ["Google App Scripts", "API Integration", "Workflow Automation"],
  },
];

export const schoolProjectEntries: AccordionEntry[] = [
  {
    id: "vr-school-tour",
    title: "Carson Award VR Tour Team - 360° Virtual Reality School Tour",
    organisation: "Lagan College / £1,000 IT Grant",
    period: "Award Winner",
    paragraphs: [
      "Co-developed an interactive, student-controlled 360-degree VR school tour with optional ambient audio to help ease anxiety before Open Days.",
      "Presented the finished tour to Northern Ireland education stakeholders, securing a £1,000 IT grant for the school.",
    ],
    tags: ["360° VR", "Ambient Audio", "Carson Award", "£1,000 IT Grant"],
  },
  {
    id: "foldable-headphones",
    title: "Young Engineers Award - Foldable Speaker Headphones & STEM Outreach",
    organisation: "Young Engineers / STEM Outreach",
    period: "1st Place Winner",
    paragraphs: [
      "Won 1st Place in age group at the Young Engineers Awards for designing foldable headphones that convert into freestanding speakers.",
      "Regularly represent CME Group at school and industry STEM outreach events, speaking to students about technology careers and apprenticeships.",
    ],
    tags: ["1st Place", "Product Design", "STEM Outreach", "Public Speaking"],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    id: "ulster-uni",
    institution: "Ulster University, Belfast",
    qualification: "BSc (Hons) Computing Systems",
    period: "Sep 2024 - Present",
    details: [
      "Completing Year 1 and Year 2 modules alongside the CME Group Higher Level Apprenticeship.",
      "Core focus on software engineering, relational databases, networking, and enterprise computing systems.",
    ],
  },
  {
    id: "lagan-college",
    institution: "Lagan College, Belfast",
    qualification: "A Levels & GCSEs",
    period: "Sep 2020 - Jun 2024",
    highlight: "100% AS Coursework (CCEA Exemplary)",
    details: [
      "A Levels (2022 - 2024): Art, Software Systems Development (100% AS coursework, flagged by CCEA as exemplary), and Physics.",
      "GCSEs (2020 - 2022): 1 A*, 7 As, 1 B (including A in Computer Science, A in Maths & Statistics, and A in Physics).",
    ],
  },
];

export const awardEntries: AwardEntry[] = [
  {
    id: "ccea-exemplary",
    title: "CCEA Exemplary AS-Level Coursework",
    badge: "100% Score",
    description:
      "Awarded 100% in AS-Level Software Systems Development coursework and flagged at CCEA Case Study meetings as exemplary work.",
  },
  {
    id: "carson-award",
    title: "Carson Award Winner - 360° VR School Tour",
    badge: "£1,000 IT Grant",
    description:
      "Built a student-controlled 360° VR tour with optional ambient sound for anxious Open Day students, securing a £1,000 IT grant.",
  },
  {
    id: "young-engineers",
    title: "Young Engineers Award Winner",
    badge: "1st Place",
    description:
      "Won 1st place in age group for designing foldable headphones that convert into freestanding speakers.",
  },
  {
    id: "employee-awards",
    title: "Employee of the Quarter & 2× Employee of the Month",
    badge: "McDonald’s",
    description:
      "Recognised three times for teamwork, communication, and performance in a fast-paced environment.",
  },
];

export const interestItems = [
  {
    name: "Guitar",
    detail: "Playing and learning arrangements across acoustic and electric styles.",
  },
  {
    name: "Digital Art & Illustration",
    detail: "Building on A-Level Art foundations across digital illustration, 3D visual concepts, and interface design.",
  },
  {
    name: "Music Exploration",
    detail: "Exploring new genres, live music, and sound design.",
  },
];

export const contactsContent = {
  title: "Contacts",
  emailLabel: "Email:",
  emailValue: "lewis.dempster@hotmail.com",
  linkedinLabel: "LinkedIn:",
  linkedinName: "Lewis Dempster - IT HLA @ CME Group",
  linkedinHandle: "www.linkedin.com/in/lewis-dempster-b884672b3",
  githubLabel: "GitHub:",
  githubHandle: "github.com/LCD180",
};

export const inspectorTokens: TokenPreview[] = [
  { name: "Page", cssVar: "--ds-bg-page" },
  { name: "Canvas", cssVar: "--ds-bg-canvas" },
  { name: "Panel", cssVar: "--ds-panel-bg" },
  { name: "Subtle", cssVar: "--ds-bg-subtle" },
  { name: "Panel Border", cssVar: "--ds-panel-border" },
  { name: "Accent", cssVar: "--ds-action-secondary-default" },
  { name: "Text Primary", cssVar: "--ds-text-primary" },
  { name: "Text Secondary", cssVar: "--ds-text-secondary" },
];

export const inspectorComponents = [
  "Navigation",
  "Button",
  "BorderlessButton",
  "Badge",
  "Panel",
  "IconPanel",
  "TextBox",
  "Accordion",
  "Divider",
  "ThemeProvider",
];
