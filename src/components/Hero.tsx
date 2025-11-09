import { useI18n } from '../contexts/I18nContext';

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-b from-navy to-navy-dark text-white pt-[64px] pb-11">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
          <div className="space-y-3 animate-fade-in-up">
            <h1
              className="text-[28px] leading-[1.15] font-bold mb-3"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />
            <ul className="list-none p-0 m-0 mb-4.5 text-[#d7eaf3] space-y-2.5">
              <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                {t('hero.b1')}
              </li>
              <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {t('hero.b2')}
              </li>
              <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {t('hero.b3')}
              </li>
            </ul>
            <p className="text-[#9fb8c8] mt-2.5 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {t('hero.note')}
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="bg-[#e6eef4] rounded-md text-[#475569] h-[220px] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              {t('hero.note')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

