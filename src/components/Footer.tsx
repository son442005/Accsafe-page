import { Link } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';
import logoImage from '../assets/images/Logo-accsafe.svg';
import { scrollToSection } from '../utils/scroll';

const Footer = () => {
  const { t } = useI18n();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-[#082438] border-t border-gray-700/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <img src={logoImage} alt="Accsafe" className="h-8 md:h-10" />
            </a>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              {t('choose.desc')}
            </p>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">{t('footer.follow')}</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/long.trung.37201"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#1877F2] hover:border-[#166FE5]"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.facebook.com/long.trung.37201', '_blank');
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://zalo.me/0785732404"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zalo"
                  className="w-10 h-10 rounded-lg bg-[#0068FF] hover:bg-[#0056E6] flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#0068FF] hover:border-[#0056E6] font-bold text-white text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://zalo.me/0785732404', '_blank');
                  }}
                >
                  Z
                </a>
                <a
                  href="https://x.com/SenoYaga?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-10 h-10 rounded-lg bg-black hover:bg-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-black hover:border-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://x.com/SenoYaga?s=09', '_blank');
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              {t('footer.navigation')}
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('#features');
                }}
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                {t('nav.intro')}
              </a>
              <a
                href="#multifeatures"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('#multifeatures');
                }}
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                {t('nav.features')}
              </a>
              <a
                href="#guide"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('#guide');
                }}
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                {t('nav.guide')}
              </a>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              {t('footer.legal')}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/privacy-policy"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                {t('footer.terms')}
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
              >
                {t('footer.cookie')}
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Accsafe. {t('footer.copy')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
