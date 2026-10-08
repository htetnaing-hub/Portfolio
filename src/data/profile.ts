/** All portfolio content lives here, so updating the site never requires touching components. */

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Htet Naing Aung',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'Java & Kotlin Engineer', 'AI-assisted Developer', 'Event-driven Microservices Engineer'],
  headline: 'I build event-driven microservices, secure APIs and Angular front ends.',
  summary:
    'AI-experienced Full Stack Developer with nearly 6 years of Java, Kotlin and Spring Boot across financial services, banking, ERP accounting and e-commerce. I use Claude Code and GitHub Copilot every day, and every AI-generated change is tested and reviewed like hand-written code.',
  location: 'Da Lat, Vietnam',
  availability: 'Open to new roles · Remote, hybrid or on-site',
  email: 'htetnaing.ucsmdy@gmail.com',
  phone: '+84 359 624 255',
  whatsapp: '+84 359 624 255',
  line: '+95 996 151 4366',
  photo: asset('images/profile.webp'),
  cv: asset('files/Htet_Naing_Aung_Full_Stack_Developer_CV.pdf'),
  recommendation: asset('files/Recommendation_Letter.pdf'),
  links: {
    github: 'https://github.com/htetnaing-hub',
    linkedin: 'https://www.linkedin.com/in/htet-naing-nicholas-a91989212/',
    whatsapp: 'https://wa.me/84359624255',
    line: 'https://line.me/ti/p/tiGeoOULD6',
  },
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years of full-stack development' },
  { value: 3, suffix: '', label: 'Companies & clients' },
  { value: 7, suffix: '', label: 'Industry certifications' },
  { value: 2, suffix: '', label: 'Team awards at NTT DATA' },
]

export const about = {
  paragraphs: [
    'I am a full stack developer from Myanmar, now based in Vietnam. I build Java, Kotlin and Spring Boot microservices, secure REST APIs and Kafka event-driven systems, plus the Angular (and React) front ends that use them.',
    'At NTT DATA I worked on banking, e-commerce and logistics systems, including the Myanmar Automated Cargo Clearance System (MACCS), where security, data accuracy and uptime matter. Before that I built ERP accounting, procurement and sales modules end to end with Angular and Spring Boot at METATEAM. Since 2025 I have been building full-stack features for start-ups in Myanmar and Thailand.',
    'AI coding assistants are part of how I work every day. I defined my team’s standard that AI-generated code must pass unit tests, security checks and code review before it reaches production, and I build Claude Code skills, MCP servers and Spring AI features myself.',
  ],
}

export type RoleFit = { title: string; description: string; skills: string[] }

/** The kinds of positions this portfolio targets, and the evidence for each. */
export const roleFits: RoleFit[] = [
  {
    title: 'Full Stack Developer',
    description: 'Features end to end: PostgreSQL schema, Spring Boot APIs and Angular / TypeScript UI components.',
    skills: ['Java', 'Kotlin', 'Spring Boot', 'Angular', 'TypeScript'],
  },
  {
    title: 'Event-driven Microservices',
    description: 'Kafka-based services that stay reliable under high volume, with resilience patterns and caching.',
    skills: ['Kafka', 'RabbitMQ', 'Microservices', 'Redis', 'Resilience'],
  },
  {
    title: 'Secure APIs & Data',
    description: 'RESTful APIs secured with Spring Security, JWT and OAuth2, backed by tuned PostgreSQL.',
    skills: ['REST', 'Spring Security', 'JWT / OAuth2', 'PostgreSQL', 'Flyway'],
  },
  {
    title: 'Cloud-native & AI-assisted',
    description: 'Containerised delivery with CI/CD on Azure, AWS and GCP, built faster with AI coding tools.',
    skills: ['Azure', 'Docker', 'Kubernetes', 'Maven', 'Claude Code'],
  },
]

export type HighlightGroup = { title: string; items: string[] }

export type Experience = {
  id: string
  company: string
  shortName: string
  companyUrl?: string
  logo?: string
  role: string
  period: string
  duration: string
  location: string
  type: string
  project?: { name: string; url?: string }
  summary: string
  highlights: HighlightGroup[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    id: 'freelance',
    company: 'Confidential start-up (Myanmar & Thailand)',
    shortName: 'Start-up',
    role: 'Full Stack Developer (Java, Kotlin, Angular)',
    period: 'Jul 2025 – Present',
    duration: '1 yr+',
    location: 'Remote',
    type: 'Part-time · Freelance',
    project: { name: 'Full-stack web applications' },
    summary:
      'Building full-stack features from API design to reusable UI components with Java, Kotlin, Spring Boot and Angular, and leading how the team uses AI coding tools safely.',
    highlights: [
      {
        title: 'Full-stack development',
        items: [
          'Develop full-stack features with Java, Kotlin, Spring Boot and Angular (v15+) / TypeScript, from API design to reusable UI components.',
          'Build secure RESTful APIs with Spring Security, JWT and OAuth2, and integrate third-party services.',
          'Design database operations for performance, data integrity and efficient data management.',
        ],
      },
      {
        title: 'AI-assisted engineering',
        items: [
          'Use Claude Code and GitHub Copilot daily for code generation, refactoring, unit testing, debugging and documentation.',
          'Defined the team’s AI standard: AI-generated code must pass unit tests, security checks and code review before production.',
          'Built Claude Code skills, MCP servers and prompt templates, and integrated LLM APIs with Spring AI for AI-powered features.',
        ],
      },
    ],
    stack: ['Java', 'Kotlin', 'Spring Boot', 'Spring Security', 'JWT / OAuth2', 'Angular', 'TypeScript', 'PostgreSQL', 'Spring AI', 'Claude Code', 'GitHub Copilot'],
  },
  {
    id: 'nttdata',
    company: 'NTT DATA Myanmar Co., Ltd',
    shortName: 'NTT DATA',
    companyUrl: 'https://www.infonttdatamyanmar.com.mm/',
    logo: asset('images/nttdata.webp'),
    role: 'Backend Engineer (Java)',
    period: 'Jun 2022 – Jun 2025',
    duration: '3 yrs',
    location: 'Yangon, Myanmar',
    type: 'Full-time · On-site',
    project: {
      name: 'Banking, e-commerce & MACCS national logistics',
      url: 'https://myanmar.gov.mm/-/myanmar-automated-cargo-clearance-system-maccs-',
    },
    summary:
      'Java/Spring Boot engineer on banking, e-commerce and logistics platforms, including the Myanmar Automated Cargo Clearance System, working with international Product, QA and DevOps teams.',
    highlights: [
      {
        title: 'Secure APIs & microservices',
        items: [
          'Developed Java/Spring Boot services and secure REST APIs for a banking project with strict security and data-accuracy standards.',
          'Built event-driven microservices with Apache Kafka for high-volume e-commerce, logistics and banking applications.',
          'Developed Spring Batch jobs that process large volumes of business and transactional data.',
        ],
      },
      {
        title: 'Reliability & performance',
        items: [
          'Implemented resilience patterns (circuit breakers, retries, timeouts) and Redis caching for reliable, low-latency services.',
          'Tuned PostgreSQL and MySQL queries for large-scale transaction processing.',
          'Investigated and resolved production incidents on the logistics platform, recognised with the 2024 Support Team Award.',
        ],
      },
      {
        title: 'Cloud-native delivery',
        items: [
          'Deployed cloud-native services with Docker and Kubernetes on AWS, GCP and OCI.',
          'Automated build, test and deployment with Jenkins and GitHub Actions CI/CD and JUnit test suites.',
        ],
      },
      {
        title: 'AI adoption & teamwork',
        items: [
          'Adopted GitHub Copilot and set validation practices for AI-generated code: code review, JUnit coverage and static analysis.',
          'Built React / TypeScript internal tools and mentored junior engineers.',
          'Delivered the Regional Expansion (Tachileik) release on schedule with no release defects, earning the 2025 Collaboration Team Award.',
        ],
      },
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Spring Batch', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'React', 'GitHub Copilot'],
  },
  {
    id: 'metateam',
    company: 'METATEAM Myanmar Co., Ltd',
    shortName: 'METATEAM',
    companyUrl: 'https://metateammyanmar.com/',
    logo: asset('images/metateam.webp'),
    role: 'Full-Stack Software Engineer (Angular + Java)',
    period: 'Dec 2020 – Jun 2022',
    duration: '1 yr 7 mos',
    location: 'Yangon, Myanmar',
    type: 'Full-time · On-site',
    project: { name: 'Enterprise ERP system' },
    summary:
      'Built ERP modules end to end, from PostgreSQL schema and Spring Boot APIs to the Angular screens finance and operations users work in every day.',
    highlights: [
      {
        title: 'Full-stack ERP modules',
        items: [
          'Built full-stack ERP modules for financial accounting, procurement, sales and inventory with Angular, TypeScript, Spring Boot and PostgreSQL.',
          'Created reusable Angular components and REST APIs with Spring Data JPA and Hibernate.',
        ],
      },
      {
        title: 'Security, data & delivery',
        items: [
          'Secured financial data with role-based access control and validation.',
          'Designed schemas and tuned SQL for high transaction volumes and concurrent users.',
          'Automated build, test and deployment with Jenkins and GitLab CI/CD in Agile/Scrum sprints.',
        ],
      },
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Angular', 'TypeScript', 'PostgreSQL', 'Jenkins', 'GitLab CI'],
  },
]

export type AiPractice = { title: string; description: string; points: string[] }

export const aiPractices: AiPractice[] = [
  {
    title: 'Development',
    description: 'Claude Code and Copilot speed up the routine work, while the design decisions stay mine.',
    points: [
      'Scaffold Spring Boot / Kotlin services, DTOs and Angular components',
      'Refactor and debug faster, and draft ADRs and API docs',
      'Built Claude Code skills, MCP servers and prompt templates',
      'Integrated LLM APIs with Spring AI for AI-powered features',
    ],
  },
  {
    title: 'Code review',
    description: 'An extra reviewer on every change, before a human teammate sees it.',
    points: [
      'Spot bugs, race conditions and missing edge cases',
      'Flag security issues such as injection and broken auth',
      'Static analysis alongside human review',
    ],
  },
  {
    title: 'Testing & validation',
    description: 'AI writes test drafts; real test runs decide whether the code is correct.',
    points: [
      'Generate JUnit, Mockito and Testcontainers tests',
      'Team rule I defined: AI code must pass tests, security checks and review',
      'Validate every AI change by running the suite and reviewing the diff',
    ],
  },
]

export type Project = {
  name: string
  description: string
  points: string[]
  stack: string[]
  repo?: string
  demo?: string
  label: string
}

export const projects: Project[] = [
  {
    name: 'Unified Document Viewer',
    label: 'Backend · System design',
    description:
      'A single VIN search that queries two dealership systems in parallel and merges every vehicle document into one list behind one REST API.',
    points: [
      'Parallel fan-out with 2 s per-source timeouts and graceful partial results',
      'Falls back to last-known documents flagged as stale; returns 503 instead of a misleading empty list',
      'PostgreSQL with Flyway migrations, audit trail, Micrometer tracing, Prometheus metrics, OpenAPI docs',
      'Tested with JUnit, WireMock and Testcontainers; ADRs and an AI-usage log included',
    ],
    stack: ['Java 25', 'Spring Boot 4', 'PostgreSQL', 'Flyway', 'Maven', 'Testcontainers', 'WireMock', 'Docker'],
    repo: 'https://github.com/htetnaing-hub/unified-document-viewer',
  },
  {
    name: 'MMK → VND Exchange',
    label: 'Frontend · PWA',
    description:
      'A fast, mobile-first calculator that converts Myanmar Kyat to Vietnamese Dong through USDT using Binance P2P rates.',
    points: [
      'Shows what the customer receives at each service-fee tier, in both directions',
      'Installable PWA that works offline',
      'Unit-tested with Vitest, linted and deployed by GitHub Actions',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Vitest', 'PWA', 'GitHub Actions'],
    repo: 'https://github.com/htetnaing-hub/mmk-vnd-exchange',
    demo: 'https://htetnaing-hub.github.io/mmk-vnd-exchange/',
  },
  {
    name: 'E-Commerce Backend',
    label: 'Backend · Microservices',
    description:
      'Backend services for an e-commerce web application, split into microservices with secured REST APIs.',
    points: [
      'Service-oriented design with clear REST contracts between services',
      'Authentication and authorization with Spring Security',
      'Relational persistence with JPA/Hibernate on PostgreSQL',
      'Source available on request (private repository)',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Hibernate', 'PostgreSQL'],
  },
  {
    name: 'This portfolio',
    label: 'Frontend · Web',
    description: 'The site you are reading: a fast, accessible single-page app with light and dark themes, installable on phones.',
    points: [
      'Typed content model, so updates never touch components',
      'Motion animations that respect reduced-motion settings',
      'Linted, built and deployed to GitHub Pages by GitHub Actions',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    repo: 'https://github.com/htetnaing-hub/Portfolio',
  },
]

export type SkillGroup = { title: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', skills: ['Java 8–25', 'Kotlin', 'TypeScript', 'JavaScript ES6+', 'SQL', 'Python'] },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'Spring AI', 'Hibernate', 'JDBC', 'REST APIs', 'JWT / OAuth2', 'Resilience patterns'],
  },
  { title: 'Frontend', skills: ['Angular (v15+)', 'TypeScript', 'React', 'HTML5 / CSS3', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Event-driven & Data', skills: ['Apache Kafka', 'RabbitMQ', 'Microservices', 'PostgreSQL', 'Flyway', 'MySQL', 'Redis', 'MongoDB'] },
  { title: 'Cloud & DevOps', skills: ['Azure', 'AWS', 'Google Cloud', 'Oracle Cloud (OCI)', 'Docker', 'Kubernetes', 'Maven', 'GitHub Actions', 'Jenkins', 'GitLab CI'] },
  { title: 'Testing & Quality', skills: ['JUnit', 'Mockito', 'Testcontainers', 'WireMock', 'Static analysis', 'Code review'] },
  { title: 'AI Coding Tools', skills: ['Claude Code', 'GitHub Copilot', 'ChatGPT', 'MCP servers', 'LLM APIs', 'Prompt templates'] },
  { title: 'Practices', skills: ['Agile / Scrum', 'Data structures & algorithms', 'SDLC ownership', 'Git / GitHub', 'Mentoring'] },
]

export type Certification = {
  name: string
  issuer: string
  date: string
  image: string
  verifyUrl: string
}

export const certifications: Certification[] = [
  {
    name: 'Software Engineer',
    issuer: 'HackerRank',
    date: 'Sep 2026',
    image: asset('images/cert-hackerrank-swe.webp'),
    verifyUrl: 'https://www.hackerrank.com/certificates/2bfe9e10804a',
  },
  {
    name: 'OCI Certified Architect Associate',
    issuer: 'Oracle',
    date: 'Jul 2026',
    image: asset('images/cert-oci-architect.webp'),
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1522A8ACC1644526E6F6DECF2BCCEB1716C05F0F486E492C25BF51E4EF5F1E5A',
  },
  {
    name: 'OCI Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Jul 2026',
    image: asset('images/cert-oci-ai.webp'),
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9A9DEE03C7016C2D564E366C19F32C2B05AC2683B5242E6654B89F2C167374B2',
  },
  {
    name: 'Oracle AI Database Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Jul 2026',
    image: asset('images/cert-oracle-ai-db.webp'),
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=3D557C6A819BB345A1A2FDD3CED5D4C4EBF041FBE54750DFCBE2EEA3148D6132',
  },
  {
    name: 'OCI Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Jul 2026',
    image: asset('images/cert-oci-foundations.webp'),
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=81CA27943ED59A5B201F70DF604886FD424537769B978D0CB4BC109174937D78',
  },
  {
    name: 'REST API (Intermediate)',
    issuer: 'HackerRank',
    date: 'Oct 2025',
    image: asset('images/cert-rest-api.webp'),
    verifyUrl: asset('files/REST_API_Intermediate_Certificate.pdf'),
  },
  {
    name: 'Google Cloud Certified — Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: 'May 2025',
    image: asset('images/cert-gcp-cdl.webp'),
    verifyUrl: 'https://www.credly.com/badges/8f5770c4-8c5c-4c80-be85-d63fdfed8580/linked_in_profile',
  },
]

export type Recognition = { title: string; org: string; date: string; description: string; image: string }

export const awards: Recognition[] = [
  {
    title: 'Collaboration Team Award',
    org: 'NTT DATA Myanmar',
    date: 'Mar 2025',
    description: 'Our team delivered the Regional Expansion (Tachileik) of the national logistics system within the contract timeline and without release defects.',
    image: asset('images/award-collaboration.webp'),
  },
  {
    title: 'Support Team Award',
    org: 'NTT DATA Myanmar',
    date: 'Mar 2024',
    description: 'Recognised the Batch Team for investigating and resolving production incidents and system bugs across the logistics platform.',
    image: asset('images/award-support-team.webp'),
  },
]

export const education = {
  degree: 'Bachelor of Computer Science (B.C.Sc.)',
  school: 'University of Computer Studies, Mandalay',
  date: 'Graduated May 2020',
  image: asset('images/degree.webp'),
}

export const languages = ['English — fluent', 'Burmese — native']
