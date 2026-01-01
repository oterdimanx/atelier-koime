import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/introduction', label: t('nav.introduction') },
    { path: '/video', label: t('nav.video') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/resources', label: t('nav.resources') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Atelier Koimé" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
              <button
                onClick={() => setLanguage('en')}
                className={`text-lg transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                aria-label="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`text-lg transition-opacity ${language === 'fr' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                aria-label="Français"
              >
                🇫🇷
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`text-lg transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
                aria-label="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`text-lg transition-opacity ${language === 'fr' ? 'opacity-100' : 'opacity-50'}`}
                aria-label="Français"
              >
                🇫🇷
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-link py-2 ${isActive(item.path) ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
