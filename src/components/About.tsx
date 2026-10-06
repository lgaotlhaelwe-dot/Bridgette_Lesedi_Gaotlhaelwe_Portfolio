import { CheckCircle2, Download } from 'lucide-react';
import { profile, aboutParagraphs, stats } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="text-sky-400 font-display font-semibold text-sm uppercase tracking-wider">
            Get to know me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            About Me
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Avatar / decorative */}
          <div className="lg:col-span-2 reveal">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative gradient-border rounded-3xl p-8 glass-card">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                  <span className="font-display text-7xl font-bold gradient-text">
                    {profile.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white text-center mb-1">
                  {profile.name}
                </h3>
                <p className="text-sm text-sky-400 text-center mb-4">{profile.role}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    {profile.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Available for opportunities
                  </div>
                </div>
                <a
                  href={profile.cvUrl}
                  download
                  className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-3 reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="space-y-5">
              {aboutParagraphs.map((para, i) => (
                <p key={i} className="text-slate-400 text-base lg:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                'Clean, maintainable code',
                'User-centric design approach',
                'Agile development experience',
                'Strong problem-solving skills',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl lg:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
