import { useI18n } from '../contexts/I18nContext';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-white text-[#233044] py-4 md:py-5.5">
      <div className="container px-4 md:px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 text-center md:text-left">
          <div className="text-sm md:text-base">{t('footer.copy')}</div>
          <div className="text-muted text-xs md:text-sm">{t('footer.socials')}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

