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

  const handleLanguageKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLanguageToggle();
    }
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToSection(href);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[1200] w-full border-b border-navy/50 bg-gradient-to-r from-navy to-navy-dark shadow-lg backdrop-blur-sm">
      <div className="section-container">
        <div className="flex items-center justify-between py-3 md:py-4">
          <a href="#" className="flex items-center transition-opacity hover:opacity-80">
            <img src={logoImage} alt="Accsafe" className="h-8 drop-shadow-lg md:h-[44px]" />
          </a>

          <div className="flex items-center gap-2 md:gap-4">
            <nav className="mr-2 hidden items-center gap-6 md:flex lg:gap-8 md:mr-4">
              <a
                href="#features"
                onClick={(event) => handleNavClick(event, '#features')}
                className="text-sm font-medium text-white/90 transition-all duration-standard ease-smooth hover:scale-105 hover:text-white lg:text-base"
              >
                {t('nav.intro')}
              </a>
              <a
                href="#multifeatures"
                onClick={(event) => handleNavClick(event, '#multifeatures')}
                className="text-sm font-medium text-white/90 transition-all duration-standard ease-smooth hover:scale-105 hover:text-white lg:text-base"
              >
                {t('nav.features')}
              </a>
              <a
                href="#guide"
                onClick={(event) => handleNavClick(event, '#guide')}
                className="text-sm font-medium text-white/90 transition-all duration-standard ease-smooth hover:scale-105 hover:text-white lg:text-base"
              >
                {t('nav.guide')}
              </a>
            </nav>

            <button
              type="button"
              onClick={handleToggleMobileMenu}
              className="flex h-10 w-10 items-center justify-center text-white transition-colors duration-standard ease-smooth hover:text-accent md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              onKeyDown={handleLanguageKeyDown}
              className="relative inline-flex h-7 w-16 items-center overflow-hidden rounded-md border border-white/20 bg-white/10 shadow-sm transition-all duration-standard ease-smooth hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus-visible:outline-none md:h-8 md:w-20"
            >
              <span
                className={`absolute left-0 z-10 flex w-1/2 items-center justify-center text-xs font-bold transition-all duration-standard ease-smooth ${
                  language === 'vi' ? 'text-white drop-shadow-md' : 'text-white/80'
                }`}
              >
                VI
              </span>
              <span
                className={`absolute right-0 z-10 flex w-1/2 items-center justify-center text-xs font-bold transition-all duration-standard ease-smooth ${
                  language === 'en' ? 'text-white drop-shadow-md' : 'text-white/80'
                }`}
              >
                EN
              </span>
              <span
                className={`absolute z-0 h-5 w-1/2 transform rounded-md bg-accent shadow-lg transition-transform duration-standard ease-smooth md:h-6 ${
                  language === 'en' ? 'translate-x-8 md:translate-x-10' : 'translate-x-0'
                }`}
              />
            </button>

            <a
              href="https://github.com/son442005/Accsafe-page/releases/download/Accsafe-App/AccSafe-1.0.0-x64.exe"
              download
              className="btn-secondary btn-sm hidden md:inline-block"
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
                onClick={(event) => handleNavClick(event, '#features')}
                className="py-2 text-base font-medium text-white/90 transition-colors duration-standard ease-smooth hover:text-white"
              >
                {t('nav.intro')}
              </a>
              <a
                href="#multifeatures"
                onClick={(event) => handleNavClick(event, '#multifeatures')}
                className="py-2 text-base font-medium text-white/90 transition-colors duration-standard ease-smooth hover:text-white"
              >
                {t('nav.features')}
              </a>
              <a
                href="#guide"
                onClick={(event) => handleNavClick(event, '#guide')}
                className="py-2 text-base font-medium text-white/90 transition-colors duration-standard ease-smooth hover:text-white"
              >
                {t('nav.guide')}
              </a>
              <a
                href="https://github.com/son442005/Accsafe-page/releases/download/Accsafe-App/AccSafe-1.0.0-x64.exe"
                download
                className="btn-secondary btn-sm mt-2 inline-block self-start"
              >
                {t('top.download')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
