import { FaGithub, FaLine, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { Mail } from 'lucide-react'
import { profile } from './profile'

export const socials = [
  { label: 'GitHub', href: profile.links.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'WhatsApp', href: profile.links.whatsapp, Icon: FaWhatsapp },
  { label: 'LINE', href: profile.links.line, Icon: FaLine },
]
