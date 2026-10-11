import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function SocialLinks() {
  return <div className="flex flex-wrap gap-3">
    {[{ label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin }, { label: 'GitHub', href: siteConfig.social.github, icon: Github }, { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail }].map(({ label, href, icon: Icon }) => (
      <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noopener noreferrer'} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-gray-300 transition-colors hover:border-primary-purple/40 hover:text-white"><Icon className="h-4 w-4" aria-hidden="true" />{label}</a>
    ))}
  </div>;
}
