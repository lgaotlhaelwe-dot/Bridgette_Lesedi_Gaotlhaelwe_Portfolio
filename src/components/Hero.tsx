import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile, stats } from '@/data/portfolio';

const roles = [
  'Full-Stack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Lifelong Learner',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Available for opportunities
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-medium mb-6 h-10">
            <span className="text-sky-400">{text}</span>
            <span className="animate-blink text-sky-400">|</span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-sky-500 hover:text-sky-400 transition-all"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-3 justify-center lg:justify-start">
            {[
              ...(profile.github ? [{ icon: Github, href: profile.github, label: 'GitHub' }] : []),
              ...(profile.linkedin
                ? [{ icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' }]
                : []),
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:scale-110 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <div className="glass-card rounded-3xl p-8 lg:p-10 animate-pulse-glow">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-sky-500/30 transition-colors"
                >
                  <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 text-center">
                <span className="text-sky-400 font-semibold">{profile.location}</span> ·
                Open to remote & on-site
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-sky-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
