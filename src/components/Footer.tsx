import { useI18n } from '../contexts/I18nContext';
import logoImage from '../assets/images/Logo-accsafe.svg';

const Footer = () => {
  const { t } = useI18n();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Handle navigation or scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#082438] border-t border-gray-700/30">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <img src={logoImage} alt="Accsafe" className="h-8 md:h-10" />
            </a>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              {t('choose.desc')}
            </p>
            {/* Social Media Icons */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white mb-3">{t('footer.follow')}</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20"
                  onClick={(e) => handleLinkClick(e, '#')}
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20"
                  onClick={(e) => handleLinkClick(e, '#')}
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20"
                  onClick={(e) => handleLinkClick(e, '#')}
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              {t('footer.products')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#features')}
                >
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#pricing')}
                >
                  {t('footer.pricing')}
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#api')}
                >
                  {t('footer.api')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#about')}
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#blog')}
                >
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#careers')}
                >
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                >
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#docs"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#docs')}
                >
                  {t('footer.docs')}
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#support')}
                >
                  {t('footer.support')}
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-gray-300 text-sm hover:text-accent transition-colors duration-200"
                  onClick={(e) => handleLinkClick(e, '#community')}
                >
                  {t('footer.community')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {t('footer.copy')}
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-accent transition-colors duration-200"
                onClick={(e) => handleLinkClick(e, '#privacy')}
              >
                {t('footer.privacy')}
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-accent transition-colors duration-200"
                onClick={(e) => handleLinkClick(e, '#terms')}
              >
                {t('footer.terms')}
              </a>
              <a
                href="#cookie"
                className="text-gray-400 hover:text-accent transition-colors duration-200"
                onClick={(e) => handleLinkClick(e, '#cookie')}
              >
                {t('footer.cookie')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
