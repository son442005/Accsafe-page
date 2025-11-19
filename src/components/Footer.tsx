import { Link } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';
import logoImage from '../assets/images/Logo-accsafe.svg';

const Footer = () => {
  const { t } = useI18n();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#082438] border-t border-gray-700/30">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <img src={logoImage} alt="Accsafe" className="h-8 md:h-10" />
            </a>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              {t('choose.desc')}
            </p>
            {/* Social Media Icons */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">{t('footer.follow')}</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/long.trung.37201"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#1877F2] hover:border-[#166FE5]"
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
                >
                  Z
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-10 h-10 rounded-lg bg-[#0088cc] hover:bg-[#0077B5] flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#0088cc] hover:border-[#0077B5]"
                >
                  <svg
                    className="w-5 h-5 text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
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
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('#features');
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

          {/* Legal Column */}
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Accsafe. {t('footer.copy')}
            </div>
            <div className="text-gray-500 text-xs text-center md:text-right">
              {t('footer.allRightsReserved') || 'Tất cả quyền được bảo lưu.'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
