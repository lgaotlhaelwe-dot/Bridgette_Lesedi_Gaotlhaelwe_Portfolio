import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react';
import { education, certifications } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education */}
        <div className="reveal text-center mb-12">
          <span className="text-sky-400 font-display font-semibold text-sm uppercase tracking-wider">
            Academic background
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Education
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="reveal glass-card rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:shadow-sky-500/10 transition-all"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-sky-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-sky-400 font-medium">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {edu.period}
                {edu.gpa && (
                  <span className="ml-auto px-2.5 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal text-center mb-12">
          <span className="text-sky-400 font-display font-semibold text-sm uppercase tracking-wider">
            Continuous learning
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Certifications
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div id="certifications" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 scroll-mt-20">
          {certifications.map((cert, i) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group glass-card rounded-2xl p-5 hover:shadow-lg hover:shadow-sky-500/10 transition-all hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-sky-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-sm leading-snug group-hover:text-sky-400 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{cert.date}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-600 mt-2 font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
