import { useEffect, useRef, useState } from 'react';
import { technicalSkills, softSkills } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimatedSkills(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 font-display font-semibold text-sm uppercase tracking-wider">
            What I bring to the table
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Skills & Expertise
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Technical skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {technicalSkills.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="reveal glass-card rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:shadow-sky-500/10 transition-all"
                style={{ transitionDelay: `${catIdx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-sky-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="skill-bar-fill h-full rounded-full"
                          style={{
                            width: animatedSkills ? `${skill.level}%` : '0%',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft skills */}
        <div className="reveal" style={{ transitionDelay: '0.3s' }}>
          <h3 className="font-display text-xl font-bold text-white text-center mb-8">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group glass-card rounded-2xl p-5 text-center hover:shadow-lg hover:shadow-sky-500/10 transition-all hover:scale-105"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
