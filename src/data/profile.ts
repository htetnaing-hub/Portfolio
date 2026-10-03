/** All portfolio content lives here, so updating the site never requires touching components. */

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Htet Naing Aung',
  role: 'Java Backend Engineer',
  headline: 'I build reliable Java & Spring Boot backends that scale.',
  summary:
    'Backend engineer with 5+ years of experience designing microservices, REST APIs and event-driven systems for logistics, e-commerce and ERP platforms. I care about clean code, observability and shipping software that keeps running under real production load.',
  location: 'Da Nang, Vietnam',
  availability: 'Open to full-time roles · Remote or on-site',
  email: 'htetnaing.ucsmdy@gmail.com',
  phone: '+84 359 624 255',
  photo: asset('images/profile.webp'),
  cv: asset('files/Htet_Naing_Aung_Java_Developer_CV.pdf'),
  recommendation: asset('files/Recommendation_Letter.pdf'),
  links: {
    github: 'https://github.com/htetnaing-hub',
    linkedin: 'https://www.linkedin.com/in/htet-naing-nicholas-a91989212/',
    whatsapp: 'https://wa.me/66931296650',
    line: 'https://line.me/ti/p/tiGeoOULD6',
  },
}

export const stats = [
  { value: '5+', label: 'Years of experience' },
  { value: '3', label: 'Companies & clients' },
  { value: '6', label: 'Certifications' },
  { value: '2', label: 'Team awards at NTT DATA' },
]

export const about = {
  paragraphs: [
    'I am a Java engineer from Myanmar, now based in Vietnam. Most of my career has been spent on the backend: Spring Boot microservices, batch processing, Kafka-based messaging and the databases behind them.',
    'At NTT DATA I worked on the Myanmar Automated Cargo Clearance System (MACCS), a national logistics platform where correctness and uptime matter. Before that, I built ERP modules end to end with Angular and Spring Boot at METATEAM.',
    'I enjoy owning a feature across the whole SDLC, from requirements and design to deployment and production support, and working with international product, QA and DevOps teams in Agile environments.',
  ],
  highlights: [
    'Microservices & REST API design',
    'Event-driven systems with Apache Kafka',
    'Large-scale batch processing with Spring Batch',
    'Cloud deployments on AWS, GCP & OCI',
    'SQL tuning for high transaction volumes',
    'Agile/Scrum, code reviews & mentoring',
  ],
}

export type Experience = {
  company: string
  companyUrl?: string
  logo?: string
  role: string
  period: string
  duration: string
  location: string
  type: string
  project?: { name: string; url?: string }
  summary: string
  achievements: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'Start-up clients (Myanmar & Thailand)',
    role: 'Backend Developer — REST APIs (Java, Spring Boot)',
    period: 'Oct 2025 – Jul 2026',
    duration: '10 mos',
    location: 'Remote',
    type: 'Freelance · Part-time',
    summary: 'Built and optimized REST APIs for start-up web applications, working directly with frontend developers and business stakeholders.',
    achievements: [
      'Developed and optimized scalable RESTful APIs with Java and Spring Boot to deliver new web application features.',
      'Designed database operations focused on performance, data integrity and efficient data management.',
      'Integrated authentication, authorization and third-party services following secure-coding and REST best practices.',
      'Took part in code reviews, troubleshooting, testing and deployment to keep releases reliable.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'MySQL', 'Docker'],
  },
  {
    company: 'NTT DATA Myanmar Co., Ltd',
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
    summary: 'Batch Team engineer on a national logistics and customs platform, plus e-commerce services, built as Java/Spring Boot microservices.',
    achievements: [
      'Developed and maintained Spring Boot microservices for high-volume consumer and enterprise applications in production.',
      'Built event-driven communication with Apache Kafka for real-time notifications, order tracking and live analytics.',
      'Delivered Spring Batch jobs that process large volumes of business and transactional data.',
      'Deployed cloud-native services on AWS, GCP and OCI using Docker and Kubernetes.',
      'Tuned MySQL, MongoDB, Redis and Cassandra data access for performance and scalability.',
      'Shipped the Regional Expansion (Tachileik) release on schedule and investigated production incidents end to end.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Batch', 'Kafka', 'Microservices', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'GCP', 'Jenkins'],
  },
  {
    company: 'METATEAM Myanmar Co., Ltd',
    companyUrl: 'https://metateammyanmar.com/',
    logo: asset('images/metateam.webp'),
    role: 'Full-Stack Software Engineer (Angular + Java)',
    period: 'Dec 2020 – Jun 2022',
    duration: '1 yr 7 mos',
    location: 'Yangon, Myanmar',
    type: 'Full-time · On-site',
    project: { name: 'ERP System' },
    summary: 'Built ERP modules end to end, from PostgreSQL schema and Spring Boot APIs to Angular user interfaces.',
    achievements: [
      'Designed and implemented inventory, procurement, sales-order and financial-accounting modules.',
      'Built REST APIs with Spring Data JPA and Hibernate, with role-based access control and input validation.',
      'Created responsive Angular interfaces that improved day-to-day workflows for enterprise users.',
      'Automated build, test and deployment pipelines with Jenkins and GitLab CI/CD.',
      'Optimized schemas and SQL queries for high transaction volumes and concurrent users.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'Angular', 'PostgreSQL', 'Jenkins', 'GitLab CI'],
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
      'Tested with JUnit, WireMock and Testcontainers; decisions recorded as ADRs',
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
]

export type SkillGroup = { title: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', skills: ['Java 8–25', 'SQL', 'TypeScript', 'JavaScript', 'HTML5 / CSS3'] },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'Hibernate', 'JDBC', 'J2EE / Servlet / JSP', 'REST APIs', 'Microservices', 'Concurrency'],
  },
  { title: 'Messaging & Data', skills: ['Apache Kafka', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra'] },
  { title: 'Cloud & DevOps', skills: ['AWS', 'Google Cloud', 'Oracle Cloud (OCI)', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Maven'] },
  { title: 'Testing & Quality', skills: ['JUnit', 'Testcontainers', 'WireMock', 'Code review', 'Clean code'] },
  { title: 'Frontend & Tools', skills: ['Angular', 'React', 'Bootstrap', 'Git', 'GitHub', 'SVN'] },
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
    name: 'Google Cloud Certified — Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: 'May 2025',
    image: asset('images/cert-gcp-cdl.webp'),
    verifyUrl: 'https://www.credly.com/badges/8f5770c4-8c5c-4c80-be85-d63fdfed8580/linked_in_profile',
  },
  {
    name: 'REST API (Intermediate)',
    issuer: 'HackerRank',
    date: 'Oct 2025',
    image: asset('images/cert-rest-api.webp'),
    verifyUrl: asset('files/REST_API_Intermediate_Certificate.pdf'),
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
