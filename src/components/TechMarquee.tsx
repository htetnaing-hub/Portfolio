import { FaAws, FaJava } from 'react-icons/fa6'
import { VscAzure } from 'react-icons/vsc'
import {
  SiAngular,
  SiApachemaven,
  SiFlyway,
  SiKotlin,
  SiRabbitmq,
  SiApachekafka,
  SiDocker,
  SiGithubactions,
  SiGithubcopilot,
  SiClaude,
  SiGooglecloud,
  SiHibernate,
  SiJenkins,
  SiJunit5,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'

const tech = [
  { name: 'Java', Icon: FaJava },
  { name: 'Kotlin', Icon: SiKotlin },
  { name: 'Spring Boot', Icon: SiSpringboot },
  { name: 'Hibernate', Icon: SiHibernate },
  { name: 'Apache Kafka', Icon: SiApachekafka },
  { name: 'RabbitMQ', Icon: SiRabbitmq },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Flyway', Icon: SiFlyway },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Redis', Icon: SiRedis },
  { name: 'Angular', Icon: SiAngular },
  { name: 'React', Icon: SiReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: 'Azure', Icon: VscAzure },
  { name: 'AWS', Icon: FaAws },
  { name: 'Google Cloud', Icon: SiGooglecloud },
  { name: 'Maven', Icon: SiApachemaven },
  { name: 'Jenkins', Icon: SiJenkins },
  { name: 'GitHub Actions', Icon: SiGithubactions },
  { name: 'JUnit 5', Icon: SiJunit5 },
  { name: 'Claude', Icon: SiClaude },
  { name: 'GitHub Copilot', Icon: SiGithubcopilot },
]

export function TechMarquee() {
  return (
    <div
      aria-label="Technologies I work with"
      role="region"
      className="relative overflow-hidden border-y border-slate-200 py-6 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] dark:border-white/10"
    >
      <ul className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused]">
        {[...tech, ...tech].map(({ name, Icon }, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= tech.length}
            className="flex items-center gap-2.5 text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-300"
          >
            <Icon className="size-6" />
            <span className="text-sm font-medium whitespace-nowrap">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
