import { useI18n } from '../contexts/I18nContext';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-white text-[#233044] py-5.5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div>{t('footer.copy')}</div>
          <div className="text-muted">{t('footer.socials')}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

