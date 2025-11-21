import { useState } from 'react';
import { useI18n } from '../contexts/I18nContext';
import logoImage from '../assets/images/Logo-accsafe.svg';
import { scrollToSection } from '../utils/scroll';

const Header = () => {
  const { t, language, setLanguage } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageToggle = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLanguageToggle();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-navy to-navy-dark backdrop-blur-sm border-b border-navy/50 z-[1200] shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between py-2 md:py-3">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="Accsafe" className="h-8 md:h-[44px] drop-shadow-lg" />
          </a>

          <div className="flex items-center gap-2 md:gap-3.5">
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 mr-2 md:mr-4">
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, '#features')}
                className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 hover:scale-105"
              >
                {t('nav.intro')}
              </a>
              <a
                href="#multifeatures"
                onClick={(e) => handleNavClick(e, '#multifeatures')}
                className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 hover:scale-105"
              >
                {t('nav.features')}
              </a>
              <a
                href="#guide"
                onClick={(e) => handleNavClick(e, '#guide')}
                className="text-white/90 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200 hover:scale-105"
              >
                {t('nav.guide')}
              </a>
            </nav>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <button
              type="button"
              role="switch"
              aria-checked={language === 'en'}
              aria-label="Toggle language"
              onClick={handleLanguageToggle}
              onKeyDown={handleKeyDown}
              className="relative inline-flex h-7 md:h-8 w-16 md:w-20 items-center rounded-md bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus-visible:outline-none overflow-hidden shadow-sm"
            >
              <span
                className={`absolute left-0 w-1/2 flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 ${language === 'vi' ? 'text-white drop-shadow-md' : 'text-white/80'
                  }`}
              >
                VI
              </span>
              <span
                className={`absolute right-0 w-1/2 flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 ${language === 'en' ? 'text-white drop-shadow-md' : 'text-white/80'
                  }`}
              >
                EN
              </span>
              <span
                className={`absolute h-5 md:h-6 w-1/2 transform rounded-md bg-accent shadow-lg transition-transform duration-300 ease-in-out z-0 ${language === 'en' ? 'translate-x-8 md:translate-x-10' : 'translate-x-0'
                  }`}
              />
            </button>
            <a
              href="#"
              className="inline-block px-2.5 md:px-3.5 py-1.5 md:py-2.5 rounded-[10px] bg-white text-navy no-underline font-semibold text-sm md:text-base hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('top.download')}
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-navy/50 py-4 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, '#features')}
                className="text-white/90 hover:text-white text-base font-medium transition-colors duration-200 py-2"
              >
                {t('nav.intro')}
              </a>
              <a
                href="#multifeatures"
                onClick={(e) => handleNavClick(e, '#multifeatures')}
                className="text-white/90 hover:text-white text-base font-medium transition-colors duration-200 py-2"
              >
                {t('nav.features')}
              </a>
              <a
                href="#guide"
                onClick={(e) => handleNavClick(e, '#guide')}
                className="text-white/90 hover:text-white text-base font-medium transition-colors duration-200 py-2"
              >
                {t('nav.guide')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

