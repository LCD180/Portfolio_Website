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
  highlight: string;
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
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "other", label: "Other", href: "#other" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const heroContent = {
  greeting: "I’m Lewis,",
  roleBadge: "IT Higher Level Apprentice @ CME Group",
  intro:
    "A software developer building interfaces that balance elegant aesthetics with zero friction usability.",
  ctaLabel: "View Experience",
  aboutTitle: "Who am I",
  aboutParagraphs: [
    "I am an IT Higher Level Apprentice (HLA) at CME Group with a creative edge and a strong interest in future-focused technology. I’m a fast learner, staying up to date with the latest tech trends and working well in Agile environments with clear requirements, defined tasks, and daily standups.",
    "Rotating across backend market data development, full-stack tooling, vulnerability compliance, and UI/UX at CME Group while studying BSc Computing Systems at Ulster University (Predicted 1st) has given me hands-on experience across both software engineering and interface design.",
  ],
};

export const skills: SkillItem[] = [
  {
    id: "java",
    name: "Java",
    icon: "/icons/java.svg",
    category: "Languages & Backend",
    description: [
      "Worked on optimising Java-based data processing models for the Market Data Real Time (MDRT) billing application interacting with BigQuery log records. After my changes were implemented, execution time was reduced by 76%.",
      "Resolved Java 17 runtime issues across containerised builds using Google Jib and Artifact Registry.",
    ],
    appliedIn: ["MDRT Billing Application", "Java 17 CI/CD Pipelines", "BSc Computing Systems"],
  },
  {
    id: "python",
    name: "Python",
    icon: "/icons/python.svg",
    category: "Languages & ML",
    description: [
      "Developed a concurrent Python data upload script hosted on a dedicated VM for continuous Google Cloud Platform data transfer, using smart concurrency to process multiple data streams simultaneously and double transfer speeds.",
      "Also used Python in the NRE Graph tool rebuild and in my machine learning artwork protection project with PyTorch.",
    ],
    appliedIn: ["Concurrent GCP Data Upload", "NRE Graph Tool", "Adversarial ML Art Platform"],
  },
  {
    id: "csharp",
    name: "C#",
    icon: "/icons/csharp.svg",
    category: "Languages",
    description: [
      "Developed object-oriented software systems in C#, including A-Level System Software Design where my AS-Level coursework was awarded 100% and flagged at CCEA Case Study meetings as exemplary coursework.",
    ],
    appliedIn: ["CCEA Exemplary Coursework (100%)", "System Software Design", "BSc Computing Systems"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    category: "Frontend & Fullstack",
    description: [
      "Rebuilt the frontend for the legacy Network Reliability Engineering (NRE) Graph tool, improving UX flow and application load speeds for internal teams.",
      "Built web applications, Google App Scripts APIs for internal software request forms, and React component libraries.",
    ],
    appliedIn: ["NRE Graph Tool Overhaul", "Simple Portfolio Design System", "Software Request Form API"],
  },
  {
    id: "html5",
    name: "HTML5",
    icon: "/icons/html5.svg",
    category: "Frontend",
    description: [
      "Built accessible, semantic web interfaces for the NRE Graph tool rebuild, custom design system components, and digital form workflows.",
    ],
    appliedIn: ["NRE Graph Tool", "Portfolio Web App", "Digital Form Services"],
  },
  {
    id: "css3",
    name: "CSS3",
    icon: "/icons/css3.svg",
    category: "Frontend & Design Systems",
    description: [
      "Translated Figma token collections into CSS custom properties supporting dark and light modes, responsive layouts, and component animations.",
    ],
    appliedIn: ["Simple Portfolio Design System", "NRE Custom Design System"],
  },
  {
    id: "sql",
    name: "SQL & BigQuery",
    icon: "/icons/sql.svg",
    category: "Data & Analytics",
    description: [
      "Queried and optimised high-volume log and billing datasets across relational databases and Google BigQuery for CME Group's real-time market data billing systems.",
    ],
    appliedIn: ["MDRT BigQuery Billing", "Database Systems"],
  },
  {
    id: "yaml",
    name: "YAML",
    icon: "/icons/yaml.svg",
    category: "Cloud & DevOps",
    description: [
      "Wrote Kubernetes cluster manifests and custom Argo Workflows CI/CD pipeline definitions to separate local development builds from secure in-cluster deployments.",
    ],
    appliedIn: ["Argo Workflows CI/CD", "GKE Cluster Configurations"],
  },
  {
    id: "figma",
    name: "Figma",
    icon: "/icons/figma.svg",
    category: "UI/UX & Design Systems",
    description: [
      "Designed core components for the CME Design System (buttons, mobile menus, dropdowns, tooltips, accordions, interactive loaders) and workspace layouts for the CME Trading Simulator.",
      "Created wireframes and interactive prototypes with 3D cartoon-style floor maps for the CME Desk Booking System redesign, and published the Simple Portfolio Design System on Figma Community.",
    ],
    appliedIn: ["CME Design System", "Desk Booking Redesign", "CME Trading Simulator", "Simple Portfolio Design System"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes (GKE)",
    icon: "/icons/kubernetes.svg",
    category: "Cloud & DevOps",
    description: [
      "Configured NATS JetStream clusters, Key-Value stores, and backend microservices on Google Kubernetes Engine (GKE), isolating local development builds from secure cluster deployments.",
    ],
    appliedIn: ["MDRT Market Data Streaming", "GKE Environment Isolation"],
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    icon: "/icons/googlecloud.svg",
    category: "Cloud & DevOps",
    description: [
      "Worked on applications migrated from on-prem servers to Google Cloud Platform, creating Pub/Sub channels, managing GKE workloads, querying BigQuery datasets, pushing images to Artifact Registry, and monitoring services with Cloud Logging and Cloud Monitoring.",
    ],
    appliedIn: ["On-Prem to Cloud Migration", "GCP Pub/Sub & BigQuery", "Concurrent VM Data Upload"],
  },
  {
    id: "argo",
    name: "Argo Workflows & Google Jib",
    icon: "/icons/argo.svg",
    category: "CI/CD Automation",
    description: [
      "Updated CI/CD pipelines using custom Argo Workflows and Google Jib (Artifact Registry), resolving Java 17 runtime issues and unblocking deployments.",
    ],
    appliedIn: ["MDRT CI/CD Modernisation", "Artifact Registry Builds"],
  },
  {
    id: "nats",
    name: "NATS JetStream",
    icon: "/icons/nats.svg",
    category: "Real-Time Messaging",
    description: [
      "Configured NATS JetStream and Key-Value stores on GKE to stream real-time market data to customers via WebSockets and Google Pub/Sub.",
    ],
    appliedIn: ["MDRT Real-Time Market Data"],
  },
  {
    id: "grpc",
    name: "gRPC, WebSockets & Pact",
    icon: "/icons/grpc.svg",
    category: "APIs & Contract Testing",
    description: [
      "Supported real-time market data delivery over WebSockets and maintained backward compatibility across gRPC microservices by adding Pact API contract testing into the deployment pipeline to prevent race conditions.",
    ],
    appliedIn: ["MDRT WebSockets & gRPC", "Pact Contract Testing"],
  },
  {
    id: "pytorch",
    name: "PyTorch & Machine Learning",
    icon: "/icons/pytorch.svg",
    category: "AI & Adversarial ML",
    description: [
      "Building a full-stack social platform for artists using PyTorch and Hugging Face to apply adversarial noise (Glaze/Nightshade concept) to protect digital artwork from AI scraping.",
    ],
    appliedIn: ["Full-Stack Art Platform & Adversarial ML"],
  },
  {
    id: "androidstudio",
    name: "Android Studio & Enterprise Tooling",
    icon: "/icons/androidstudio.svg",
    category: "Mobile, Scripts & SecOps",
    description: [
      "Experienced with Android Studio, Google App Scripts (building an API for Software Request Forms), Tripwire Enterprise and Remedy (auditing production Change Requests and resolving over 1,000 cleartext password exposures), and Jamf/Oomnitza endpoint management.",
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
      "Worked in a story- and ticket-based Agile team. Configured NATS JetStream and Key-Value stores deployed on Google Kubernetes Engine (GKE), enabling the platform to stream real-time market data to customers via WebSockets and Google Pub/Sub.",
      "Worked on optimising Java-based data processing models for the MDRT billing application interacting with high-volume BigQuery log records. After my changes were implemented, execution time was reduced by 76%.",
      "Updated CI/CD pipelines using custom Argo Workflows (YAML) and Google Jib (Artifact Registry), resolving Java 17 runtime issues and unblocking deployments.",
      "Implemented Pact API contract testing across deployments to eliminate race conditions and maintain gRPC microservice backward compatibility, managed Kubernetes configurations to separate local development builds from secure cluster deployments, and maintained applications migrated from on-prem servers to GCP (creating Pub/Sub channels, BigQuery, GKE, Cloud Logging, and Cloud Monitoring).",
    ],
    tags: ["Java 17", "NATS JetStream", "Key-Value Stores", "GKE", "WebSockets", "Pub/Sub", "BigQuery", "Argo Workflows", "Google Jib", "Pact", "gRPC"],
  },
  {
    id: "cme-desk-booking-role",
    title: "Desk Booking System Redesign - UX/UI Lead",
    organisation: "CME Group",
    period: "Jun 2026 - Dec 2026",
    paragraphs: [
      "Worked alongside one other apprentice to lead the UX/UI redesign of an enterprise desk-booking system, replacing a legacy tool to improve navigation and visual clarity from initial discovery through to final high-fidelity delivery.",
      "Ran user research by designing internal staff surveys, conducting competitor analysis, and turning the findings into clear project requirements documentation.",
      "Created wireframes and interactive high-fidelity prototypes in Figma using the CME Design System, introducing 3D cartoon-style floor maps, bulk/recurring booking flows, and space utilisation metrics tailored to the Belfast office.",
      "Presented the end-to-end research insights, workflow demonstrations, and final UI prototypes to the Sr. Director of Product Management and Executive Leadership.",
    ],
    tags: ["Figma", "CME Design System", "User Research", "3D Floor Maps", "Executive Presentation"],
  },
  {
    id: "cme-vmt",
    title: "Vulnerability Management Team (VMT) - Compliance",
    organisation: "CME Group",
    period: "Dec 2025 - May 2026",
    paragraphs: [
      "Joined the Vulnerability Management Team (VMT), whose role is maintaining server compliance, auditing production releases, and resolving security vulnerabilities across CME infrastructure.",
      "Led an initiative to eliminate over 1,000 cleartext password exposures across the VMT environment, identifying affected systems and coordinating credential remediation with teams.",
      "Used CME Tripwire Enterprise, Alphabet, and Remedy in a security gatekeeper and change-management review role across releases proposed by teams across CME Group. Evaluated Change Requests (CRQs) against a prescribed checklist of release criteria, authorised compliant deployments, blocked high-risk changes, and liaised with teams that had failed to meet release criteria.",
    ],
    tags: ["Tripwire Enterprise", "Remedy", "Alphabet", "CRQ Gatekeeping", "Credential Remediation"],
  },
  {
    id: "cme-nre",
    title: "Network Reliability Engineering (NRE) - Fullstack Development",
    organisation: "CME Group",
    period: "Jun 2025 - Dec 2025",
    paragraphs: [
      "Led the overhaul of the legacy NRE Graph tool frontend using HTML, CSS, JavaScript, and Python, building a custom design system aligned with CME Group standards that improved UX flow, boosted application load speeds, and supported internal customer requests.",
      "Automated Google Cloud Platform (GCP) data uploads by developing Python scripts on a dedicated VM using smart concurrency so multiple data streams process simultaneously, bypassing bandwidth bottlenecks and doubling transfer speeds.",
      "Delivered full-stack projects in a fully remote team environment while maintaining clear communication and consistent delivery.",
    ],
    tags: ["Python", "JavaScript", "HTML & CSS", "Smart Concurrency", "GCP", "Custom Design System"],
  },
  {
    id: "cme-cx",
    title: "Customer Experience - UI/UX Designer",
    organisation: "CME Group",
    period: "Nov 2024 - Jun 2025",
    paragraphs: [
      "CME Design System: Designed accessible, reusable core components in Figma (buttons, mobile menus, dropdowns, tooltips, accordions, interactive loaders) adhering to CME Group brand and accessibility standards.",
      "CME Trading Simulator: Created wireframes, navigation bars, and specialised interface layouts for the CME Trading Simulator.",
      "UI/UX Quality Assurance: Performed UI/UX QA across cross-team designs to keep visual consistency, presented design rationale to stakeholders, and iterated quickly within an Agile workflow.",
    ],
    tags: ["Figma", "CME Design System", "CME Trading Simulator", "UI/UX QA", "Agile"],
  },
  {
    id: "cme-desktop",
    title: "Desktop Support Engineer",
    organisation: "CME Group",
    period: "Sep 2024 - Nov 2024",
    paragraphs: [
      "First apprentice rotation at CME Group, managing the full lifecycle of company laptops and desktops for Belfast-based staff.",
      "Provisioned and configured Windows PCs and Apple Macs (using Jamf and Oomnitza) and provided end-to-end hardware and software troubleshooting for colleagues.",
      "Managed hardware lifecycle decommissioning, including physical dismantling and certified data wiping.",
    ],
    tags: ["Windows", "macOS", "Jamf", "Oomnitza", "Endpoint Lifecycle", "Certified Data Wiping"],
  },
  {
    id: "displaynote-work-exp",
    title: "IT Work Experience - Product Chatbot Prototype",
    organisation: "Generation Innovation / DisplayNote",
    period: "Jul 2023",
    paragraphs: [
      "Developed a product-related customer service chatbot prototype for DisplayNote, a Northern Ireland tech company, during the early days of AI adoption.",
      "Pitched the working prototype and business concept directly to the CEO, receiving positive feedback and congratulations on the initiative and presentation.",
    ],
    tags: ["Chatbot Prototype", "Customer Service AI", "CEO Pitch"],
  },
  {
    id: "civil-service-and-mcdonalds",
    title: "Civil Service IT Work Experience & McDonald’s Crew Member",
    organisation: "NI Civil Service / McDonald’s",
    period: "Jul 2022 - Sep 2024",
    paragraphs: [
      "Northern Ireland Civil Service - IT Work Experience (Nov 2022): Completed an IT training course focused on accounting software and digital tech form creation services.",
      "McDonald’s - Crew Member (Jul 2022 - Sep 2024): Built strong teamwork and communication skills in a fast-paced environment; earned Employee of the Month twice and Employee of the Quarter once.",
    ],
    tags: ["Accounting & Form Services", "Employee of the Quarter", "2× Employee of the Month"],
  },
];

export const projectEntries: AccordionEntry[] = [
  {
    id: "art-platform",
    title: "Full-Stack Art Platform & Adversarial ML Protection",
    organisation: "My Personal Projects",
    period: "Current",
    paragraphs: [
      "Developing a full-stack social platform for artists alongside AI-driven workflows using machine learning.",
      "Uses PyTorch and Hugging Face models to apply adversarial noise (Glaze/Nightshade concept) to uploaded artwork to protect it from AI scraping.",
    ],
    tags: ["PyTorch", "Hugging Face", "Adversarial ML", "Python", "Full-Stack"],
  },
  {
    id: "desk-booking",
    title: "Enterprise Desk Booking System & 3D Floor Maps",
    organisation: "CME Group",
    period: "Jun 2026 - Dec 2026",
    paragraphs: [
      "Co-led the user research and Figma prototyping for an enterprise desk-booking app tailored to the Belfast office, featuring interactive 3D cartoon-style floor maps, bulk/recurring booking, and space utilisation metrics.",
      "Presented research insights, workflow demonstrations, and final UI designs to the Sr. Director of Product Management.",
    ],
    tags: ["Figma", "CME Design System", "3D Floor Maps", "User Research"],
  },
  {
    id: "portfolio-ds",
    title: "Portfolio Website & Simple Portfolio Design System",
    organisation: "My Personal Projects / Figma Community",
    period: "2026",
    paragraphs: [
      "Built a custom personal CV website to showcase the complete design-to-development lifecycle. Designed and published the Simple Portfolio Design System and wireframes on Figma Community, translating them directly into a reusable React + TypeScript component library.",
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
    organisation: "Automation & Internal Tooling",
    period: "Project",
    paragraphs: [
      "Worked on a Google App Scripts API integration for automating Software Request Form submissions and workflow handling.",
    ],
    tags: ["Google App Scripts", "API Integration", "Workflow Automation"],
  },
  {
    id: "vr-school-tour",
    title: "Carson Award VR Tour Team - 360° Virtual Reality School Tour",
    organisation: "Lagan College / £1,000 IT Grant",
    period: "Award Winner",
    paragraphs: [
      "Worked in a pair with another student to develop an immersive, student-controlled 360-degree VR school tour with optional ambient sound features to ease student anxiety ahead of school Open Days.",
      "Presented the finished tour to educational stakeholders in Northern Ireland, securing a £1,000 IT grant for the school.",
    ],
    tags: ["360° VR", "Ambient Audio", "Carson Award", "£1,000 IT Grant"],
  },
  {
    id: "foldable-headphones",
    title: "Young Engineers Award - Foldable Speaker Headphones & STEM Outreach",
    organisation: "Young Engineers / CME Group STEM",
    period: "1st Place Winner",
    paragraphs: [
      "Young Engineers Award Winner (1st Place in age group): Designed foldable headphones that convert into freestanding speakers.",
      "CME Group STEM Outreach: Regularly represent CME Group at local schools and tech industry events, delivering talks to prospective students on technology careers and the apprenticeship route.",
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
    highlight: "Predicted Grade: 1st Class Honours",
    details: [
      "Completing Year 1 and Year 2 modules alongside the CME Group Higher Level Apprenticeship, covering software engineering, databases, networking, and enterprise computing systems.",
    ],
  },
  {
    id: "lagan-college",
    institution: "Lagan College, Belfast",
    qualification: "A Levels & GCSEs",
    period: "Sep 2020 - Jun 2024",
    highlight: "100% AS Coursework (CCEA Exemplary)",
    details: [
      "A Levels (2022 - 2024): Art, System Software Design (AS coursework awarded 100% and flagged at CCEA Case Study meetings as exemplary coursework), and Physics.",
      "GCSEs (2020 - 2022): 1 A*, 7 As, 1 B, including A in Computer Science, A in Maths and Statistics, A in Physics, and B in English Language.",
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
  linkedinHandle: "linkedin.com/in/lewis-dempster",
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
