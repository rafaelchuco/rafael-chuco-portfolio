const groups = [
  { title: 'Competencias técnicas', skills: ['Inteligencia Artificial', 'Automatización', 'SAP', 'SAP BTP', 'ABAP', 'SAP Fiori', 'Python', 'Java', 'Playwright', 'Git / GitHub'] },
  { title: 'Competencias personales', skills: ['Liderazgo', 'Trabajo en equipo', 'Comunicación', 'Resolución de problemas', 'Adaptabilidad', 'Aprendizaje continuo'] },
];

export default function Competencies() {
  return <section id="competencias" className="px-6 py-24 bg-dark-card/30">
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-purple">Mis competencias</p>
      <h2 className="mt-4 mb-10 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">Competencias que aplico en <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">cada proyecto</span></h2>
      <div className="grid gap-6 md:grid-cols-2">{groups.map((group) => <div key={group.title} className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7">
        <h3 className="mb-5 text-xl font-semibold text-white">{group.title}</h3>
        <ul className="flex flex-wrap gap-3">{group.skills.map((skill) => <li key={skill} className="rounded-full border border-primary-purple/25 bg-primary-purple/10 px-4 py-2 text-sm text-violet-300">{skill}</li>)}</ul>
      </div>)}</div>
    </div>
  </section>;
}
