import type { KeyboardEvent } from 'react';
import { useI18n } from '../contexts/I18nContext';

type LanguageToggleProps = {
  className?: string;
  variant?: 'header' | 'light';
};

const LanguageToggle = ({ className = '', variant = 'header' }: LanguageToggleProps) => {
  const { language, setLanguage } = useI18n();
  const isHeaderVariant = variant === 'header';

  const handleToggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggleLanguage();
    }
  };

  const trackClasses = isHeaderVariant
    ? 'h-7 md:h-8 w-20 rounded-md bg-white/10 border border-white/20 hover:border-white/30 shadow-sm focus:ring-accent'
    : 'h-8 w-24 rounded-full bg-white border border-[#0ea5a4]/80 shadow-[0_6px_18px_rgba(14,165,164,0.2)] focus:ring-[#0ea5a4]/60';

  const activeTextClass = isHeaderVariant ? 'text-white drop-shadow-md' : 'text-white';
  const inactiveTextClass = isHeaderVariant ? 'text-[#0ea5a4]' : 'text-[#0ea5a4]';

  const sliderBaseClasses = isHeaderVariant
    ? 'h-5 md:h-6 rounded-md bg-accent shadow-lg'
    : 'h-6 rounded-full bg-[#0ea5a4] shadow-[0_8px_18px_rgba(14,165,164,0.35)]';

  const sliderPositionClass = isHeaderVariant
    ? language === 'en'
      ? 'translate-x-8 md:translate-x-10'
      : 'translate-x-0'
    : language === 'en'
      ? 'translate-x-full'
      : 'translate-x-0';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={language === 'en'}
      aria-label="Toggle language"
      onClick={handleToggleLanguage}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex items-center justify-between overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none ${trackClasses} ${className}`}
    >
      <span
        className={`absolute left-0 w-1/2 flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 ${language === 'vi' ? activeTextClass : inactiveTextClass
          }`}
      >
        VI
      </span>
      <span
        className={`absolute right-0 w-1/2 flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 ${language === 'en' ? activeTextClass : inactiveTextClass
          }`}
      >
        EN
      </span>
      <span
        className={`absolute w-1/2 transform transition-transform duration-300 ease-in-out z-0 ${sliderBaseClasses} ${sliderPositionClass}`}
      />
    </button>
  );
};

export default LanguageToggle;

