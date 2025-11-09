import { useI18n } from '../contexts/I18nContext';
import image6 from '../assets/images/image 6.png';

const WhyChoose = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-7 items-center">
          <div className="flex-shrink-0 lg:w-[420px] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <img
              src={image6}
              alt={t('choose.title')}
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-3xl font-bold mb-3">{t('choose.title')}</h3>
            <p className="text-muted text-lg leading-relaxed">{t('choose.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

