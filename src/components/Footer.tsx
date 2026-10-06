import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              {profile.name}
            </h3>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex gap-3 mt-4">
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
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <a
                href={`mailto:${profile.email}`}
                className="block hover:text-sky-400 transition-colors"
              >
                {profile.email}
              </a>
              <p>{profile.location}</p>
              <div className="flex flex-col items-start gap-1 mt-2">
                <a
                  href={profile.cvUrl}
                  download
                  className="text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  Download CV →
                </a>
                <a
                  href={profile.presentationUrl}
                  download
                  className="text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  Download presentation →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            © {new Date().getFullYear()} {profile.name}. Built with
            <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400" /> using React & Tailwind CSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
