/** All portfolio content lives here, so updating the site never requires touching components. */

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Htet Naing Aung',
  role: 'Java Software Engineer',
  roles: ['Java Software Engineer', 'Senior Java Developer', 'Full-Stack Engineer', 'REST API & Microservices Engineer'],
  headline: 'I build reliable Java & Spring Boot systems that scale.',
  summary:
    'Software engineer with 5+ years of experience shipping Spring Boot microservices, REST APIs and event-driven systems for logistics, e-commerce and ERP platforms, with Angular and React on the front end. I use AI tools like Claude Code and GitHub Copilot to move faster, and tests and code review to keep quality high.',
  location: 'Da Lat, Vietnam',
  availability: 'Open to new roles · Remote or on-site',
  email: 'htetnaing.ucsmdy@gmail.com',
  phone: '+84 359 624 255',
  whatsapp: '+84 359 624 255',
  line: '+95 996 151 4366',
  photo: asset('images/profile.webp'),
  cv: asset('files/Htet_Naing_Aung_Java_Developer_CV.pdf'),
  recommendation: asset('files/Recommendation_Letter.pdf'),
  links: {
    github: 'https://github.com/htetnaing-hub',
    linkedin: 'https://www.linkedin.com/in/htet-naing-nicholas-a91989212/',
    whatsapp: 'https://wa.me/84359624255',
    line: 'https://line.me/ti/p/tiGeoOULD6',
  },
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years building production software' },
  { value: 3, suffix: '', label: 'Companies & clients' },
  { value: 7, suffix: '', label: 'Industry certifications' },
  { value: 2, suffix: '', label: 'Team awards at NTT DATA' },
]

export const about = {
  paragraphs: [
    'I am a Java engineer from Myanmar, now based in Vietnam. Most of my career has been on the backend: Spring Boot microservices, REST APIs, batch processing, Kafka messaging and the databases behind them. I am equally comfortable building the Angular or React screens that use those APIs.',
    'At NTT DATA I worked on the Myanmar Automated Cargo Clearance System (MACCS), a national logistics platform where correctness and uptime matter. Before that, I built ERP modules end to end with Angular and Spring Boot at METATEAM. Most recently I have been building REST APIs for start-ups in Myanmar and Thailand.',
    'I enjoy owning a feature across the whole SDLC, from requirements and design to deployment and production support, and working with international product, QA and DevOps teams in Agile environments.',
  ],
}

export type RoleFit = { title: string; description: string; skills: string[] }

/** The kinds of positions this portfolio targets, and the evidence for each. */
export const roleFits: RoleFit[] = [
  {
    title: 'Java / Senior Java Developer',
    description: 'Core Java, Spring Boot and clean, tested backend code that runs reliably in production.',
    skills: ['Java 8–25', 'Spring Boot', 'JPA / Hibernate', 'Concurrency', 'JUnit'],
  },
  {
    title: 'Full-Stack Engineer',
    description: 'Feature delivery from database schema to UI with Spring Boot APIs and Angular or React front ends.',
    skills: ['Angular', 'React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'REST API & Microservices',
    description: 'Well-designed REST contracts, secure services and event-driven communication between them.',
    skills: ['REST', 'OpenAPI', 'Spring Security', 'Kafka', 'Spring Batch'],
  },
  {
    title: 'Cloud & DevOps-minded',
    description: 'Containerised services with CI/CD pipelines on AWS, Google Cloud and Oracle Cloud.',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'AWS · GCP · OCI'],
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
    company: 'Start-up clients (Myanmar & Thailand)',
    shortName: 'Freelance',
    role: 'Java Backend Developer — REST APIs',
    period: 'Oct 2025 – Jul 2026',
    duration: '10 mos',
    location: 'Remote',
    type: 'Freelance · Part-time',
    project: { name: 'Web applications for start-ups' },
    summary:
      'Designed and built REST APIs for start-up web applications, working directly with frontend developers and business stakeholders, and using AI tools to deliver faster without lowering the quality bar.',
    highlights: [
      {
        title: 'API development',
        items: [
          'Developed and optimized scalable RESTful APIs with Java and Spring Boot to support new web application features and business requirements.',
          'Integrated authentication, authorization and third-party services following secure-coding and REST API best practices.',
          'Designed and implemented database operations focused on efficient data management, performance and data integrity.',
        ],
      },
      {
        title: 'AI-assisted engineering',
        items: [
          'Used Claude, Claude Code and GitHub Copilot to scaffold features, refactor code and draft documentation, reviewing every change before merging.',
          'Used AI review passes alongside human code review to catch bugs, edge cases and security issues earlier.',
          'Generated and extended unit and integration tests with AI assistance, then validated behaviour by running the suites and checking results by hand.',
        ],
      },
      {
        title: 'Collaboration & delivery',
        items: [
          'Collaborated with frontend developers and business stakeholders to turn requirements into working features.',
          'Took part in code reviews, troubleshooting, testing and deployment to keep releases reliable and improving.',
        ],
      },
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'MySQL', 'Docker', 'Claude Code', 'GitHub Copilot'],
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
      name: 'Myanmar Automated Cargo Clearance System (MACCS)',
      url: 'https://myanmar.gov.mm/-/myanmar-automated-cargo-clearance-system-maccs-',
    },
    summary:
      'Backend engineer on the Batch Team of a national logistics and customs-clearance platform, plus e-commerce services, built as Java/Spring Boot microservices for thousands of concurrent users.',
    highlights: [
      {
        title: 'Architecture & development',
        items: [
          'Developed and maintained scalable Java/Spring Boot microservices supporting high-volume consumer and enterprise applications in production.',
          'Designed, implemented and optimized RESTful APIs and backend services following microservices architecture and clean-code principles.',
          'Built event-driven systems with Apache Kafka for reliable, high-throughput communication and real-time features such as notifications, order tracking and live analytics.',
          'Developed Spring Batch jobs that efficiently process large volumes of business and transactional data.',
        ],
      },
      {
        title: 'Data, performance & reliability',
        items: [
          'Designed and optimized data access across PostgreSQL, MySQL, MongoDB, Redis and Cassandra for high-performance, scalable applications.',
          'Applied SQL optimization to improve query performance for large-scale transaction processing.',
          'Performed performance tuning, troubleshooting and monitoring to keep enterprise-scale platforms highly available.',
          'Investigated and resolved production incidents and bugs across the logistics system, recognised with the 2024 Support Team Award.',
        ],
      },
      {
        title: 'Cloud, testing & delivery',
        items: [
          'Deployed and managed cloud-native applications on AWS, GCP and Oracle Cloud Infrastructure using Docker and Kubernetes.',
          'Implemented unit, integration and acceptance testing that improved reliability and supported CI/CD pipelines with Jenkins and GitHub Actions.',
          'Owned the full SDLC, from requirements analysis and design to development, testing, deployment and production support.',
        ],
      },
      {
        title: 'Collaboration & leadership',
        items: [
          'Delivered the Regional Expansion (Tachileik) release within the contract timeline without release defects, earning the 2025 Collaboration Team Award.',
          'Collaborated with international Product, QA, DevOps and engineering teams in Agile/Scrum.',
          'Mentored junior engineers on clean code, test-driven development and DevOps practices.',
        ],
      },
    ],
    stack: ['Java', 'Spring Boot', 'Spring Batch', 'Apache Kafka', 'Microservices', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'OCI', 'Jenkins'],
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
    project: { name: 'Enterprise ERP System' },
    summary:
      'Built ERP modules end to end, from PostgreSQL schema and Spring Boot APIs to the Angular screens enterprise users work in every day.',
    highlights: [
      {
        title: 'Full-stack feature delivery',
        items: [
          'Designed and implemented core ERP modules: inventory management, procurement, sales orders and financial accounting with Java, Spring Boot and PostgreSQL.',
          'Developed scalable RESTful APIs with Spring Data JPA and Hibernate for data access and business logic across ERP components.',
          'Built dynamic, responsive Angular interfaces that improved usability and workflow efficiency for enterprise users.',
        ],
      },
      {
        title: 'Security & performance',
        items: [
          'Secured frontend-to-backend communication with role-based access control and data validation on the REST APIs.',
          'Optimized database schema and SQL queries for high transaction volumes and concurrent users.',
        ],
      },
      {
        title: 'Quality & delivery',
        items: [
          'Automated build, test and deployment pipelines with Jenkins and GitLab CI/CD for rapid delivery and safe rollback.',
          'Wrote unit and integration tests to keep coverage high and production defects low.',
          'Used GitHub pull requests, branching strategies and issue tracking to keep code quality high.',
          'Worked in Agile/Scrum with QA, DevOps and business analysts, from sprint planning to retrospectives.',
        ],
      },
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Angular', 'TypeScript', 'PostgreSQL', 'Jenkins', 'GitLab CI'],
  },
]

export type AiPractice = { title: string; description: string; points: string[] }

export const aiTools = ['Claude', 'Claude Code', 'GitHub Copilot']

export const aiPractices: AiPractice[] = [
  {
    title: 'Development',
    description: 'Ship features faster with an AI pair programmer, while keeping the design decisions mine.',
    points: [
      'Scaffold Spring Boot services, DTOs and REST endpoints',
      'Refactor legacy code and explain unfamiliar codebases',
      'Draft ADRs, API docs and READMEs',
    ],
  },
  {
    title: 'Code review',
    description: 'An extra reviewer on every change, before a human teammate sees it.',
    points: [
      'Spot bugs, race conditions and missing edge cases',
      'Flag security issues such as injection and broken auth',
      'Suggest simpler, more readable alternatives',
    ],
  },
  {
    title: 'Testing & validation',
    description: 'AI writes test drafts; real test runs decide whether the code is correct.',
    points: [
      'Generate JUnit, integration and Testcontainers tests',
      'Cover boundary cases and failure paths',
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
      'A single VIN search that queries two dealership systems in parallel and merges every vehicle document into one list.',
    points: [
      'Parallel fan-out with 2 s per-source timeouts and graceful partial results',
      'Falls back to last-known documents flagged as stale; returns 503 instead of a misleading empty list',
      'Audit trail in PostgreSQL, Micrometer tracing, Prometheus metrics, OpenAPI docs',
      'Tested with JUnit, WireMock and Testcontainers; ADRs and an AI-usage log included',
    ],
    stack: ['Java 25', 'Spring Boot 4', 'PostgreSQL', 'Flyway', 'Testcontainers', 'WireMock', 'Docker'],
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
    description: 'The site you are reading: a fast, accessible single-page app with light and dark themes.',
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
  { title: 'Languages', skills: ['Java 8–25', 'SQL', 'TypeScript', 'JavaScript', 'HTML5 / CSS3'] },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'Hibernate', 'JDBC', 'J2EE / Servlet / JSP', 'REST APIs', 'Microservices', 'Concurrency'],
  },
  { title: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'Responsive design'] },
  { title: 'Messaging & Data', skills: ['Apache Kafka', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra'] },
  { title: 'Cloud & DevOps', skills: ['AWS', 'Google Cloud', 'Oracle Cloud (OCI)', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Maven'] },
  { title: 'Testing & Quality', skills: ['JUnit', 'Testcontainers', 'WireMock', 'Integration testing', 'Code review', 'Clean code'] },
  { title: 'AI-assisted Engineering', skills: ['Claude', 'Claude Code', 'GitHub Copilot', 'AI code review', 'AI test generation'] },
  { title: 'Tools & Practices', skills: ['Git', 'GitHub', 'SVN', 'Agile / Scrum', 'SDLC ownership', 'Mentoring'] },
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

export const languages = ['English — professional working proficiency', 'Burmese — native']
