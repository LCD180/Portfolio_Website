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
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const skillFilterGroups: SkillFilterGroup[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "data", label: "Data & Messaging" },
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
    label: "Email",
    href: "mailto:lewis.dempster@hotmail.com",
  },
];

export const heroContent = {
  greeting: "I’m Lewis,",
  roleBadge: "IT Higher Level Apprentice @ CME Group",
  intro:
    "A software developer building interfaces that balance elegant aesthetics with zero friction usability.",
  ctaLabel: "View Experience",
  aboutTitle: "About Me",
  aboutParagraphs: [
    "I am an IT Higher Level Apprentice at CME Group studying BSc (Hons) Computing Systems at Ulster University, with a creative edge and a strong interest in future-focused technology.",
    "Rotating across backend market data development, full-stack tooling, vulnerability compliance, and UI/UX design in Agile teams has given me hands-on experience across both software engineering and interface design.",
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
      "Optimised Java data processing models for the Market Data Real Time (MDRT) billing application querying BigQuery logs, cutting execution time by 76%.",
      "Resolved Java 17 runtime issues across containerised builds using Google Jib and Artifact Registry.",
    ],
    appliedIn: ["MDRT Billing Application", "BSc Computing Systems"],
  },
  {
    id: "python",
    name: "Python",
    icon: "./icons/python.svg",
    category: "Languages & ML",
    filterGroup: "languages",
    description: [
      "Built a concurrent Python data upload script on a dedicated VM for continuous GCP transfers, doubling transfer speeds.",
      "Used Python in the NRE Graph tool rebuild and in an adversarial machine learning artwork protection platform with PyTorch.",
    ],
    appliedIn: ["Concurrent GCP Data Upload", "Adversarial ML Art Platform"],
  },
  {
    id: "csharp",
    name: "C#",
    icon: "./icons/csharp.svg",
    category: "Languages",
    filterGroup: "languages",
    description: [
      "Developed object-oriented software systems in C#, where my AS-Level Software Systems Development coursework scored 100% and was showcased by CCEA as exemplary work.",
    ],
    appliedIn: ["Software Systems Development", "BSc Computing Systems"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "./icons/javascript.svg",
    category: "Frontend & Fullstack",
    filterGroup: "languages",
    description: [
      "Rebuilt the legacy Network Reliability Engineering (NRE) Graph tool frontend, improving UX flow and load speeds.",
      "Built React component libraries and worked on an API for Software Request Form AppScripts.",
    ],
    appliedIn: ["NRE Graph Tool Overhaul", "Simple Portfolio Design System"],
  },
  {
    id: "html5",
    name: "HTML5",
    icon: "./icons/html5.svg",
    category: "Frontend",
    filterGroup: "frontend",
    description: [
      "Built accessible, semantic web interfaces for the NRE Graph tool rebuild, custom design system components, and digital form workflows.",
    ],
    appliedIn: ["NRE Graph Tool", "Portfolio Web App"],
  },
  {
    id: "css3",
    name: "CSS3",
    icon: "./icons/css3.svg",
    category: "Frontend & Design Systems",
    filterGroup: "frontend",
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
    filterGroup: "data",
    description: [
      "Queried and optimised large log and billing datasets across relational databases and Google BigQuery for real-time market data billing.",
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
      "Authored Kubernetes cluster manifests and custom Argo Workflows CI/CD pipeline definitions separating local builds from cluster deployments.",
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
      "Designed reusable components for the CME Design System and interface layouts for the CME Trading Simulator.",
      "Prototyped 3D floor maps for the CME Desk Booking System redesign and published the Simple Portfolio Design System on Figma Community.",
    ],
    appliedIn: ["CME Design System", "Desk Booking Redesign", "Simple Portfolio Design System"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes (GKE)",
    icon: "./icons/kubernetes.svg",
    category: "Cloud & DevOps",
    filterGroup: "cloud",
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
    filterGroup: "cloud",
    description: [
      "Migrated and maintained services from on-prem servers to GCP using Pub/Sub, GKE, BigQuery, Artifact Registry, Cloud Logging, and Cloud Monitoring.",
    ],
    appliedIn: ["On-Prem to Cloud Migration", "Concurrent VM Data Upload"],
  },
  {
    id: "argo",
    name: "Argo Workflows & Google Jib",
    icon: "./icons/argo.svg",
    category: "CI/CD Automation",
    filterGroup: "cloud",
    description: [
      "Modernised build pipelines using custom Argo Workflows and Google Jib (Artifact Registry), resolving Java 17 runtime issues.",
    ],
    appliedIn: ["MDRT CI/CD Modernisation"],
  },
  {
    id: "nats",
    name: "NATS JetStream",
    icon: "./icons/nats.svg",
    category: "Real-Time Messaging",
    filterGroup: "data",
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
    filterGroup: "data",
    description: [
      "Maintained backwards compatibility across gRPC microservices and WebSocket streams by integrating Pact API contract testing into deployment pipelines.",
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
      "Building a full-stack social platform for artists using PyTorch and Hugging Face to apply adversarial noise against automated image scraping.",
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
      "Worked with Android Studio, an API for Software Request Form AppScripts, Tripwire Enterprise and Remedy (resolving 1,000+ cleartext password exposures), and Jamf/Oomnitza.",
    ],
    appliedIn: ["Tripwire Enterprise VMT", "Android Studio"],
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
      "Updated CI/CD pipelines with Argo Workflows and Google Jib, and added Pact API contract testing for gRPC services.",
    ],
    tags: ["Java 17", "NATS JetStream", "GKE", "BigQuery", "Argo Workflows", "gRPC"],
  },
  {
    id: "cme-desk-booking-role",
    title: "Enterprise Desk Booking System Redesign - UX/UI Lead",
    organisation: "CME Group",
    period: "Jun 2026 - Dec 2026",
    paragraphs: [
      "Co-led the UX/UI redesign of CME Group's enterprise desk-booking system through staff surveys and competitor research.",
      "Designed interactive Figma prototypes with 3D cartoon-style floor maps, bulk bookings, and utilisation metrics.",
      "Presented research insights, live demos, and final UI designs to the Senior Director of Product Management.",
    ],
    tags: ["Figma", "CME Design System", "User Research", "3D Floor Maps"],
  },
  {
    id: "cme-vmt",
    title: "Vulnerability Management Team (VMT) - Compliance",
    organisation: "CME Group",
    period: "Dec 2025 - May 2026",
    paragraphs: [
      "Audited production releases, maintained server compliance, and resolved security vulnerabilities across CME infrastructure.",
      "Led an initiative eliminating over 1,000 cleartext password exposures across the VMT environment.",
      "Reviewed Change Requests (CRQs) using Tripwire Enterprise, Alphabet, and Remedy to authorise compliant deployments.",
    ],
    tags: ["Tripwire Enterprise", "Remedy", "CRQ Gatekeeping", "Security Compliance"],
  },
  {
    id: "cme-nre",
    title: "Network Reliability Engineering (NRE) - Fullstack Development",
    organisation: "CME Group",
    period: "Jun 2025 - Dec 2025",
    paragraphs: [
      "Overhauled the legacy NRE Graph tool frontend using HTML, CSS, JavaScript, and Python with a custom design system.",
      "Built concurrent Python scripts on a dedicated VM to automate GCP data uploads, doubling transfer speeds.",
    ],
    tags: ["Python", "JavaScript", "HTML & CSS", "GCP"],
  },
  {
    id: "cme-cx",
    title: "Customer Experience - UI/UX Designer",
    organisation: "CME Group",
    period: "Nov 2024 - Jun 2025",
    paragraphs: [
      "Designed accessible, reusable components in Figma for the CME Design System.",
      "Created wireframes, navigation bars, and workspace layouts for the CME Trading Simulator and performed cross-team UI/UX QA.",
    ],
    tags: ["Figma", "CME Design System", "CME Trading Simulator", "UI/UX QA"],
  },
  {
    id: "cme-desktop",
    title: "Desktop Support Engineer",
    organisation: "CME Group",
    period: "Sep 2024 - Nov 2024",
    paragraphs: [
      "Managed the full hardware lifecycle of company laptops and desktops for Belfast staff.",
      "Provisioned Windows PCs and Apple Macs via Jamf and Oomnitza and handled certified data wiping.",
    ],
    tags: ["Windows & macOS", "Jamf", "Oomnitza", "Endpoint Lifecycle"],
  },
  {
    id: "displaynote-work-exp",
    title: "IT Work Experience - Product Chatbot Prototype",
    organisation: "DisplayNote",
    period: "Jul 2023",
    paragraphs: [
      "Built a product customer-service chatbot prototype for Northern Ireland tech company DisplayNote and pitched it directly to the CEO.",
    ],
    tags: ["Chatbot Prototype", "Customer Service Automation", "CEO Pitch"],
  },
  {
    id: "civil-service-and-mcdonalds",
    title: "Civil Service IT Work Experience & McDonald’s Crew Member",
    organisation: "NI Civil Service / McDonald’s",
    period: "Jul 2022 - Sep 2024",
    paragraphs: [
      "Completed practical IT training at Northern Ireland Civil Service (Nov 2022) covering accounting software and digital form services.",
      "Earned Employee of the Month twice and Employee of the Quarter once at McDonald’s (2022 - 2024).",
    ],
    tags: ["Digital Form Services", "Employee of the Quarter", "2× Employee of the Month"],
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
      "Uses PyTorch and Hugging Face models (Glaze/Nightshade concept) so uploaded artwork resists automated image scraping.",
    ],
    tags: ["PyTorch", "Hugging Face", "Python", "Full-Stack"],
  },
  {
    id: "portfolio-ds",
    title: "Portfolio Website & Simple Portfolio Design System",
    organisation: "Figma Community",
    period: "2026",
    paragraphs: [
      "Designed and published the Simple Portfolio Design System and wireframes on Figma Community with dark and light mode tokens.",
      "Built a reusable React + TypeScript component library and this portfolio website directly from the Figma tokens.",
    ],
    tags: ["Figma Community", "React", "TypeScript", "Design Tokens"],
    link: {
      label: "View on Figma Community",
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
    organisation: "Lagan College",
    period: "£1,000 IT Grant",
    paragraphs: [
      "Co-developed an interactive, student-controlled 360° VR school tour with optional ambient audio to ease anxiety before Open Days.",
      "Presented the finished tour to Northern Ireland education stakeholders, securing a £1,000 school IT grant.",
    ],
    tags: ["360° VR", "Ambient Audio", "Carson Award"],
  },
  {
    id: "foldable-headphones",
    title: "Young Engineers Award - Foldable Speaker Headphones & STEM Outreach",
    organisation: "Young Engineers",
    period: "1st Place",
    paragraphs: [
      "Won 1st Place in age group for designing foldable headphones that convert into freestanding speakers.",
      "Regularly represent CME Group at school and industry STEM outreach events, speaking to students about tech apprenticeships.",
    ],
    tags: ["1st Place", "Product Design", "STEM Outreach"],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    id: "ulster-uni",
    institution: "Ulster University, Belfast",
    qualification: "BSc (Hons) Computing Systems",
    period: "Sep 2024 - Present",
    details: [
      "Completing Year 1 and Year 2 modules alongside full-time rotations at CME Group, covering software engineering, databases, networking, and enterprise systems.",
    ],
  },
  {
    id: "lagan-college",
    institution: "Lagan College, Belfast",
    qualification: "A Levels & GCSEs",
    period: "Sep 2020 - Jun 2024",
    highlight: "100% AS Coursework (CCEA Exemplary)",
    details: [
      "A Levels: Art, Software Systems Development (100% AS coursework, flagged by CCEA as exemplary), and Physics.",
      "GCSEs: 1 A*, 7 As, 1 B (including A in Computer Science, Maths & Statistics, and Physics).",
    ],
  },
];

export const awardEntries: AwardEntry[] = [
  {
    id: "ccea-exemplary",
    title: "CCEA Exemplary AS-Level Coursework",
    badge: "100% Score",
    description:
      "Awarded 100% in AS-Level Software Systems Development coursework and flagged by CCEA as exemplary work.",
  },
  {
    id: "carson-award",
    title: "Carson Award Winner - 360° VR School Tour",
    badge: "£1,000 Grant",
    description:
      "Built a student-controlled 360° VR tour with ambient audio for Open Day students, securing a £1,000 IT grant.",
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
    detail: "Playing acoustic and electric arrangements.",
  },
  {
    name: "Digital Art & Illustration",
    detail: "Digital illustration, 3D concepts, and UI design.",
  },
  {
    name: "Music Exploration",
    detail: "Exploring new genres, live music, and sound design.",
  },
];

export const contactsContent = {
  title: "Contact",
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
