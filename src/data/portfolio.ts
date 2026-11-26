export type SkillFilterGroupId =
  | "all"
  | "languages"
  | "frontend"
  | "cloud"
  | "data";

export interface SkillFilterGroup {
  id: SkillFilterGroupId;
  label: string;
}

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  category: string;
  filterGroup: Exclude<SkillFilterGroupId, "all">;
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

export const skillFilterGroups: SkillFilterGroup[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "data", label: "Data, APIs & ML" },
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
    "Apprenticeship & Degree: IT Higher Level Apprentice (HLA) at CME Group studying BSc (Hons) Computing Systems at Ulster University.",
    "Cross-Team Experience: Rotated across backend market data engineering, full-stack web tooling, vulnerability compliance, and UI/UX design systems.",
    "Agile Delivery: Fast learner who thrives in ticket-based Agile teams with clear requirements and daily standups.",
  ],
};

export const skills: SkillItem[] = [
  {
    id: "java",
    name: "Java",
    icon: "./icons/java.svg",
    category: "Languages & Backend",
    filterGroup: "languages",
    description: [
      "76% Faster Billing: Optimised Java data processing models for the Market Data Real Time (MDRT) billing application querying BigQuery logs.",
      "Java 17 Containers: Resolved runtime issues across containerised builds using Google Jib and Artifact Registry.",
    ],
    appliedIn: ["MDRT Billing Application", "Java 17 CI/CD Pipelines", "BSc Computing Systems"],
  },
  {
    id: "python",
    name: "Python",
    icon: "./icons/python.svg",
    category: "Languages & ML",
    filterGroup: "languages",
    description: [
      "2× Transfer Speed: Built a concurrent Python data upload script on a dedicated VM for continuous GCP transfers.",
      "Full-Stack & ML: Used Python in the NRE Graph tool rebuild and in an adversarial machine learning artwork protection platform with PyTorch.",
    ],
    appliedIn: ["Concurrent GCP Data Upload", "NRE Graph Tool", "Adversarial ML Art Platform"],
  },
  {
    id: "csharp",
    name: "C#",
    icon: "./icons/csharp.svg",
    category: "Languages",
    filterGroup: "languages",
    description: [
      "100% CCEA Score: Developed object-oriented software systems in C#, where my AS-Level Software Systems Development coursework scored 100% and was showcased by CCEA as exemplary work.",
    ],
    appliedIn: ["CCEA Exemplary Coursework (100%)", "Software Systems Development", "BSc Computing Systems"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "./icons/javascript.svg",
    category: "Frontend & Fullstack",
    filterGroup: "languages",
    description: [
      "NRE Tool Rebuild: Rebuilt the legacy Network Reliability Engineering (NRE) Graph tool frontend, improving UX flow and load speeds.",
      "Libraries & APIs: Built React component libraries and worked on an API for Software Request Form AppScripts.",
    ],
    appliedIn: ["NRE Graph Tool Overhaul", "Simple Portfolio Design System", "Software Request Form AppScripts"],
  },
  {
    id: "html5",
    name: "HTML5",
    icon: "./icons/html5.svg",
    category: "Frontend",
    filterGroup: "frontend",
    description: [
      "Semantic Interfaces: Built accessible web interfaces for the NRE Graph tool rebuild, custom design system components, and digital form workflows.",
    ],
    appliedIn: ["NRE Graph Tool", "Portfolio Web App", "Digital Form Services"],
  },
  {
    id: "css3",
    name: "CSS3",
    icon: "./icons/css3.svg",
    category: "Frontend & Design Systems",
    filterGroup: "frontend",
    description: [
      "Token Architecture: Translated Figma token collections into CSS custom properties supporting dark and light modes, responsive layouts, and fluid animations.",
    ],
    appliedIn: ["Simple Portfolio Design System", "NRE Custom Design System"],
  },
  {
    id: "sql",
    name: "SQL & BigQuery",
    icon: "./icons/sql.svg",
    category: "Data & Analytics",
    filterGroup: "data",
    description: [
      "High-Volume Queries: Queried and optimised large log and billing datasets across relational databases and Google BigQuery for real-time market data billing.",
    ],
    appliedIn: ["MDRT BigQuery Billing", "Database Systems"],
  },
  {
    id: "yaml",
    name: "YAML",
    icon: "./icons/yaml.svg",
    category: "Cloud & DevOps",
    filterGroup: "cloud",
    description: [
      "Declarative Pipelines: Authored Kubernetes cluster manifests and custom Argo Workflows CI/CD pipeline definitions separating local builds from cluster deployments.",
    ],
    appliedIn: ["Argo Workflows CI/CD", "GKE Cluster Configurations"],
  },
  {
    id: "figma",
    name: "Figma",
    icon: "./icons/figma.svg",
    category: "UI/UX & Design Systems",
    filterGroup: "frontend",
    description: [
      "Enterprise Design Systems: Designed reusable components for the CME Design System and interface layouts for the CME Trading Simulator.",
      "3D Maps & Community Kit: Prototyped 3D floor maps for the CME Desk Booking System redesign and published the Simple Portfolio Design System on Figma Community.",
    ],
    appliedIn: ["CME Design System", "Desk Booking Redesign", "CME Trading Simulator", "Simple Portfolio Design System"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes (GKE)",
    icon: "./icons/kubernetes.svg",
    category: "Cloud & DevOps",
    filterGroup: "cloud",
    description: [
      "Cluster Workloads: Configured NATS JetStream clusters, Key-Value stores, and backend microservices on Google Kubernetes Engine (GKE).",
    ],
    appliedIn: ["MDRT Market Data Streaming", "GKE Environment Isolation"],
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    icon: "./icons/googlecloud.svg",
    category: "Cloud & DevOps",
    filterGroup: "cloud",
    description: [
      "Cloud Migration: Migrated and maintained services from on-prem servers to GCP using Pub/Sub, GKE, BigQuery, Artifact Registry, Cloud Logging, and Cloud Monitoring.",
    ],
    appliedIn: ["On-Prem to Cloud Migration", "GCP Pub/Sub & BigQuery", "Concurrent VM Data Upload"],
  },
  {
    id: "argo",
    name: "Argo Workflows & Google Jib",
    icon: "./icons/argo.svg",
    category: "CI/CD Automation",
    filterGroup: "cloud",
    description: [
      "CI/CD Modernisation: Modernised build pipelines using custom Argo Workflows and Google Jib (Artifact Registry), resolving Java 17 runtime issues.",
    ],
    appliedIn: ["MDRT CI/CD Modernisation", "Artifact Registry Builds"],
  },
  {
    id: "nats",
    name: "NATS JetStream",
    icon: "./icons/nats.svg",
    category: "Real-Time Messaging",
    filterGroup: "data",
    description: [
      "Market Data Streaming: Configured NATS JetStream and Key-Value stores on GKE to stream real-time market data to customers via WebSockets and Google Pub/Sub.",
    ],
    appliedIn: ["MDRT Real-Time Market Data"],
  },
  {
    id: "grpc",
    name: "gRPC, WebSockets & Pact",
    icon: "./icons/grpc.svg",
    category: "APIs & Contract Testing",
    filterGroup: "data",
    description: [
      "Contract Testing: Maintained backwards compatibility across gRPC microservices and WebSocket streams by integrating Pact API contract testing into deployment pipelines.",
    ],
    appliedIn: ["MDRT WebSockets & gRPC", "Pact Contract Testing"],
  },
  {
    id: "pytorch",
    name: "PyTorch & Machine Learning",
    icon: "./icons/pytorch.svg",
    category: "Machine Learning",
    filterGroup: "data",
    description: [
      "Adversarial Protection: Building a full-stack social platform for artists using PyTorch and Hugging Face to apply adversarial noise against automated image scraping.",
    ],
    appliedIn: ["Full-Stack Art Platform & Adversarial ML"],
  },
  {
    id: "androidstudio",
    name: "Android Studio & Enterprise Tooling",
    icon: "./icons/androidstudio.svg",
    category: "Mobile, Scripts & SecOps",
    filterGroup: "cloud",
    description: [
      "Enterprise Tooling: Worked with Android Studio, an API for Software Request Form AppScripts, Tripwire Enterprise and Remedy (resolving 1,000+ cleartext password exposures), and Jamf/Oomnitza.",
    ],
    appliedIn: ["Tripwire Enterprise VMT", "Software Request Form AppScripts", "Android Studio"],
  },
];

export const experienceEntries: AccordionEntry[] = [
  {
    id: "cme-mdrt",
    title: "Market Data Real Time - Backend Development",
    organisation: "CME Group",
    period: "May 2026 - Dec 2026",
    paragraphs: [
      "Real-Time Streaming: Configured NATS JetStream and Key-Value stores on GKE to stream market data via WebSockets and Google Pub/Sub.",
      "76% Faster Billing: Optimised Java billing models interacting with BigQuery log records, cutting execution time by 76%.",
      "CI/CD Modernisation: Updated pipelines with Argo Workflows (YAML) and Google Jib (Artifact Registry) to resolve Java 17 runtime issues.",
      "Contract Testing & Cloud: Added Pact API contract testing for gRPC backwards compatibility and supported on-prem to GCP migrations.",
    ],
    tags: ["Java 17", "NATS JetStream", "Key-Value Stores", "GKE", "WebSockets", "Pub/Sub", "BigQuery", "Argo Workflows", "Google Jib", "Pact", "gRPC"],
  },
  {
    id: "cme-desk-booking-role",
    title: "Enterprise Desk Booking System Redesign - UX/UI Lead",
    organisation: "CME Group",
    period: "Jun 2026 - Dec 2026",
    paragraphs: [
      "UX/UI Co-Lead: Co-led the end-to-end redesign of CME Group's enterprise desk-booking system for the Belfast office.",
      "User Research: Conducted staff surveys and competitor analysis, translating findings into structured project requirements.",
      "3D Floor Maps: Designed interactive Figma prototypes using the CME Design System with 3D cartoon-style floor maps, bulk bookings, and utilisation metrics.",
      "Executive Pitch: Presented research insights, live workflow demos, and final UI designs to the Senior Director of Product Management.",
    ],
    tags: ["Figma", "CME Design System", "User Research", "3D Floor Maps", "Executive Presentation"],
  },
  {
    id: "cme-vmt",
    title: "Vulnerability Management Team (VMT) - Compliance",
    organisation: "CME Group",
    period: "Dec 2025 - May 2026",
    paragraphs: [
      "Infrastructure Compliance: Audited production releases, maintained server compliance, and resolved security vulnerabilities across CME infrastructure.",
      "1,000+ Credentials Fixed: Led an initiative eliminating over 1,000 cleartext password exposures across the VMT environment.",
      "Release Gatekeeping: Reviewed Change Requests (CRQs) using Tripwire Enterprise, Alphabet, and Remedy, authorising compliant releases and blocking high-risk changes.",
    ],
    tags: ["Tripwire Enterprise", "Remedy", "Alphabet", "CRQ Gatekeeping", "Credential Remediation"],
  },
  {
    id: "cme-nre",
    title: "Network Reliability Engineering (NRE) - Fullstack Development",
    organisation: "CME Group",
    period: "Jun 2025 - Dec 2025",
    paragraphs: [
      "Frontend Overhaul: Rebuilt the legacy NRE Graph tool frontend using HTML, CSS, JavaScript, and Python with a custom CME-aligned design system.",
      "2× Faster GCP Uploads: Built concurrent Python scripts on a dedicated VM to automate GCP data transfers and bypass bandwidth bottlenecks.",
      "Remote Agile Delivery: Delivered full-stack features and internal customer requests in a fully remote team environment.",
    ],
    tags: ["Python", "JavaScript", "HTML & CSS", "Smart Concurrency", "GCP", "Custom Design System"],
  },
  {
    id: "cme-cx",
    title: "Customer Experience - UI/UX Designer",
    organisation: "CME Group",
    period: "Nov 2024 - Jun 2025",
    paragraphs: [
      "CME Design System: Designed accessible, reusable Figma components (buttons, mobile menus, dropdowns, tooltips, accordions, loaders).",
      "CME Trading Simulator: Created wireframes, navigation bars, and specialised workspace layouts.",
      "UI/UX Quality Assurance: Performed cross-team design QA to maintain visual consistency and presented rationale to stakeholders.",
    ],
    tags: ["Figma", "CME Design System", "CME Trading Simulator", "UI/UX QA", "Agile"],
  },
  {
    id: "cme-desktop",
    title: "Desktop Support Engineer",
    organisation: "CME Group",
    period: "Sep 2024 - Nov 2024",
    paragraphs: [
      "Hardware Lifecycle: Managed the full lifecycle of company laptops and desktops for Belfast staff during my first apprentice rotation.",
      "Endpoint Provisioning: Configured Windows PCs and Apple Macs via Jamf and Oomnitza, resolving hardware and software tickets.",
      "Secure Decommissioning: Handled physical hardware dismantling and certified data wiping.",
    ],
    tags: ["Windows", "macOS", "Jamf", "Oomnitza", "Endpoint Lifecycle", "Certified Data Wiping"],
  },
  {
    id: "displaynote-work-exp",
    title: "IT Work Experience - Product Chatbot Prototype",
    organisation: "Generation Innovation / DisplayNote",
    period: "Jul 2023",
    paragraphs: [
      "Chatbot Prototype: Built a product customer-service chatbot prototype for Northern Ireland tech company DisplayNote.",
      "CEO Pitch: Pitched the working prototype and business concept directly to the CEO.",
    ],
    tags: ["Chatbot Prototype", "Customer Service Automation", "CEO Pitch"],
  },
  {
    id: "civil-service-and-mcdonalds",
    title: "Civil Service IT Work Experience & McDonald’s Crew Member",
    organisation: "NI Civil Service / McDonald’s",
    period: "Jul 2022 - Sep 2024",
    paragraphs: [
      "NI Civil Service (Nov 2022): Completed practical IT training in accounting software and digital form creation services.",
      "McDonald’s (Jul 2022 - Sep 2024): Awarded Employee of the Month twice and Employee of the Quarter once in a fast-paced team environment.",
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
      "Creator Platform: Building a full-stack social platform for artists integrated with machine learning protection workflows.",
      "Adversarial Noise: Uses PyTorch and Hugging Face models (Glaze/Nightshade concept) so uploaded artwork resists automated image scraping.",
    ],
    tags: ["PyTorch", "Hugging Face", "Adversarial ML", "Python", "Full-Stack"],
  },
  {
    id: "portfolio-ds",
    title: "Portfolio Website & Simple Portfolio Design System",
    organisation: "Personal Project / Figma Community",
    period: "2026",
    paragraphs: [
      "Figma Community Kit: Designed and published the Simple Portfolio Design System and wireframes with dark and light mode token collections.",
      "React Component Library: Built a reusable React + TypeScript package and this interactive portfolio website directly from the Figma tokens.",
    ],
    tags: ["Figma Community", "React", "TypeScript", "Simple Portfolio Design System"],
    link: {
      label: "View Simple Portfolio Design System on Figma Community",
      url: designSystemInfo.figmaUrl,
    },
  },
];

export const appliedInTargets: Record<
  string,
  { sectionId: string; entryId?: string; group?: "experience" | "personal" | "school" }
> = {
  "MDRT Billing Application": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "Java 17 CI/CD Pipelines": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "BSc Computing Systems": { sectionId: "education", entryId: "ulster-uni" },
  "Concurrent GCP Data Upload": { sectionId: "experience", entryId: "cme-nre", group: "experience" },
  "NRE Graph Tool": { sectionId: "experience", entryId: "cme-nre", group: "experience" },
  "NRE Graph Tool Overhaul": { sectionId: "experience", entryId: "cme-nre", group: "experience" },
  "NRE Custom Design System": { sectionId: "experience", entryId: "cme-nre", group: "experience" },
  "Adversarial ML Art Platform": { sectionId: "projects", entryId: "art-platform", group: "personal" },
  "Full-Stack Art Platform & Adversarial ML": { sectionId: "projects", entryId: "art-platform", group: "personal" },
  "CCEA Exemplary Coursework (100%)": { sectionId: "education", entryId: "lagan-college" },
  "Software Systems Development": { sectionId: "education", entryId: "lagan-college" },
  "Simple Portfolio Design System": { sectionId: "projects", entryId: "portfolio-ds", group: "personal" },
  "Portfolio Web App": { sectionId: "projects", entryId: "portfolio-ds", group: "personal" },
  "Digital Form Services": { sectionId: "experience", entryId: "civil-service-and-mcdonalds", group: "experience" },
  "MDRT BigQuery Billing": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "Database Systems": { sectionId: "education", entryId: "ulster-uni" },
  "Argo Workflows CI/CD": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "GKE Cluster Configurations": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "CME Design System": { sectionId: "experience", entryId: "cme-cx", group: "experience" },
  "Desk Booking Redesign": { sectionId: "experience", entryId: "cme-desk-booking-role", group: "experience" },
  "CME Trading Simulator": { sectionId: "experience", entryId: "cme-cx", group: "experience" },
  "MDRT Market Data Streaming": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "GKE Environment Isolation": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "On-Prem to Cloud Migration": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "GCP Pub/Sub & BigQuery": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "MDRT CI/CD Modernisation": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "Artifact Registry Builds": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "MDRT Real-Time Market Data": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "MDRT WebSockets & gRPC": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "Pact Contract Testing": { sectionId: "experience", entryId: "cme-mdrt", group: "experience" },
  "Tripwire Enterprise VMT": { sectionId: "experience", entryId: "cme-vmt", group: "experience" },
  "Software Request Form AppScripts": { sectionId: "experience", entryId: "cme-nre", group: "experience" },
  "Android Studio": { sectionId: "education", entryId: "ulster-uni" },
};

export const schoolProjectEntries: AccordionEntry[] = [
  {
    id: "vr-school-tour",
    title: "Carson Award VR Tour Team - 360° Virtual Reality School Tour",
    organisation: "Lagan College / £1,000 IT Grant",
    period: "Award Winner",
    paragraphs: [
      "360° VR Experience: Co-developed an interactive, student-controlled VR school tour with optional ambient audio to ease anxiety before Open Days.",
      "£1,000 IT Grant: Presented the finished tour to Northern Ireland education stakeholders, securing a £1,000 school IT grant.",
    ],
    tags: ["360° VR", "Ambient Audio", "Carson Award", "£1,000 IT Grant"],
  },
  {
    id: "foldable-headphones",
    title: "Young Engineers Award - Foldable Speaker Headphones & STEM Outreach",
    organisation: "Young Engineers / STEM Outreach",
    period: "1st Place Winner",
    paragraphs: [
      "1st Place Product Design: Won 1st Place in age group at the Young Engineers Awards for designing foldable headphones that convert into freestanding speakers.",
      "CME STEM Ambassador: Regularly represent CME Group at school and industry events, speaking to students about technology careers and apprenticeships.",
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
      "Higher Level Apprenticeship: Completing Year 1 and Year 2 modules alongside full-time rotations at CME Group.",
      "Core Modules: Software engineering, relational databases, computer networking, and enterprise computing systems.",
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
