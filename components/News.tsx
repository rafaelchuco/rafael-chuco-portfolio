import { ArrowUpRight, Newspaper } from 'lucide-react';
import { news } from '@/lib/news';
export default function News() {
  return <section id="noticias" className="px-6 py-24"><div className="mx-auto max-w-7xl">
    <div className="mb-12 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-blue">Noticias</p><h2 className="mt-4 mb-6 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">Ideas y tendencias <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">que sigo</span></h2><p className="text-lg leading-relaxed text-gray-400">Tecnología, inteligencia artificial, automatización y transformación empresarial.</p></div>
    <div className="grid gap-6 md:grid-cols-3">{news.map((item) => <article key={item.url} lang={item.language} className="group flex flex-col rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 transition-colors hover:border-primary-purple/30">
      <div className="mb-6 flex items-center justify-between"><Newspaper className="h-7 w-7 text-violet-400" aria-hidden="true" /><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">{item.language === 'es' ? 'Español' : 'English'}</span></div>
      <p className="mb-3 text-xs text-gray-500"><time dateTime={item.date}>{item.dateLabel}</time></p><h3 className="mb-4 text-xl font-semibold leading-snug text-white">{item.title}</h3><p className="mb-5 text-sm leading-relaxed text-gray-400">{item.summary}</p>
      <div className="mb-6 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-primary-purple/10 px-3 py-1 text-[10px] tracking-wide text-violet-300">{tag}</span>)}</div>
      <p className="mt-auto mb-4 text-xs leading-relaxed text-gray-500">{item.source}<br /><span>{item.originalTitle}</span></p><a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white">{item.language === 'es' ? 'Leer artículo' : 'Read article'}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
    </article>)}</div>
  </div></section>;
}
