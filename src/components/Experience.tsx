import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 font-display font-semibold text-sm uppercase tracking-wider">
            My professional journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Work Experience
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-cyan-500 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`reveal relative flex flex-col sm:flex-row gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-sky-400 ring-4 ring-sky-500/20 sm:-translate-x-1/2 z-10 mt-1" />

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <div className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-sky-500/10 transition-all">
                    <div className="flex items-center gap-2 text-xs text-sky-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
