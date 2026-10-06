import { useState } from 'react';
import { ExternalLink, Github, X, CheckCircle2 } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 font-display font-semibold text-sm uppercase tracking-wider">
            Things I've built
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Featured Projects
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <div
              key={project.title}
              className="reveal group glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-sky-500/10 transition-all hover:-translate-y-1 cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setSelected(project)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs text-sky-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-400 font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  <span className="ml-auto text-xs text-slate-500 group-hover:text-sky-400 transition-colors">
                    Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 className="font-display text-lg font-bold text-slate-300 mb-4">
              Other Projects
            </h3>
            <div className="space-y-3">
              {other.map((project) => (
                <div
                  key={project.title}
                  className="group glass-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-sky-500/30 transition-all cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-800 text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-sky-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-white"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden rounded-t-3xl">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {selected.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {selected.longDescription}
              </p>

              <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wide mb-3">
                Key Features
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {selected.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wide mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sm text-sky-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(selected.liveUrl || selected.repoUrl) && (
                <div className="flex gap-3">
                  {selected.liveUrl && (
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selected.repoUrl && (
                    <a
                      href={selected.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-sky-500 hover:text-sky-400 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
