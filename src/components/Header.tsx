import { useI18n } from '../contexts/I18nContext';
import logoImage from '../assets/images/Logo.png';

const Header = () => {
  const { t, language, setLanguage } = useI18n();

  const handleLanguageToggle = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLanguageToggle();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#eef3f7] z-[1200] shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="Accsafe" className="h-[34px]" />
          </a>
          <div className="flex items-center gap-3.5">
            <a href="#" className="text-[#334155] no-underline hover:text-accent transition-colors font-medium">
              {t('top.account')}
            </a>
            <a
              href="#"
              className="inline-block px-3.5 py-2.5 rounded-[10px] bg-accent text-white no-underline font-semibold hover:bg-[#0d8d8c] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('top.download')}
            </a>
            <button
              type="button"
              role="switch"
              aria-checked={language === 'en'}
              aria-label="Toggle language"
              onClick={handleLanguageToggle}
              onKeyDown={handleKeyDown}
              className="relative inline-flex h-8 w-20 items-center rounded-md bg-gray-100 border border-gray-300 hover:border-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus-visible:outline-none overflow-hidden shadow-sm"
            >
              <span
                className={`absolute left-0 w-1/2 flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 ${
                  language === 'vi' ? 'text-white drop-shadow-md' : 'text-gray-800'
                }`}
              >
                VI
              </span>
              <span
                className={`absolute right-0 w-1/2 flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 ${
                  language === 'en' ? 'text-white drop-shadow-md' : 'text-gray-800'
                }`}
              >
                EN
              </span>
              <span
                className={`absolute h-6 w-1/2 transform rounded-md bg-accent shadow-lg transition-transform duration-300 ease-in-out z-0 ${
                  language === 'en' ? 'translate-x-10' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

