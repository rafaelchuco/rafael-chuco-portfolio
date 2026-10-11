import { Download, ExternalLink, FileText } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function CVLinks() {
  return <div className="mt-10" id="curriculum">
    <h3 className="mb-5 text-2xl font-semibold text-white">Mi currículum</h3>
    <div className="grid gap-5 md:grid-cols-2">
      {siteConfig.cvs.map((cv) => <article key={cv.href} className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary-purple/[0.08] to-primary-blue/[0.04] p-6">
        <FileText className="mb-4 h-7 w-7 text-violet-400" aria-hidden="true" />
        <h4 className="mb-2 text-lg font-semibold text-white">CV {cv.label}</h4>
        <p className="mb-5 text-sm leading-relaxed text-gray-400">{cv.description}</p>
        <div className="flex flex-wrap gap-4">
          <a href={cv.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver CV ${cv.label}`} className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white"><ExternalLink className="h-4 w-4" aria-hidden="true" />Ver CV</a>
          <a href={cv.href} download aria-label={`Descargar CV ${cv.label}`} className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white"><Download className="h-4 w-4" aria-hidden="true" />Descargar</a>
        </div>
      </article>)}
    </div>
  </div>;
}
