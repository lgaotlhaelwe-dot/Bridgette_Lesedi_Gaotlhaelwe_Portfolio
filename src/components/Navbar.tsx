import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1e]/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-white group-hover:text-sky-400 transition-colors">
              {profile.name.split(' ')[0]}
              <span className="text-sky-400">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-sky-400 bg-sky-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.cvUrl}
              download
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen border-t border-slate-800' : 'max-h-0'
        }`}
      >
        <div className="bg-[#0a0f1e]/95 backdrop-blur-md px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                activeSection === link.href.slice(1)
                  ? 'text-sky-400 bg-sky-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.cvUrl}
            download
            className="block w-full text-center px-4 py-3 mt-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
