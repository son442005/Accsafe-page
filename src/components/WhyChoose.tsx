import { useI18n } from '../contexts/I18nContext';
import image6 from '../assets/images/image 6.png';

const WhyChoose = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white py-6 md:py-10">
      <div className="container px-4 md:px-5">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-7 items-center">
          <div className="flex-shrink-0 w-full lg:w-[420px] opacity-0 animate-fade-in-up order-2 lg:order-1" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <img
              src={image6}
              alt={t('choose.title')}
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 space-y-2 md:space-y-3 opacity-0 animate-fade-in-up order-1 lg:order-2 text-center lg:text-left" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">{t('choose.title')}</h3>
            <p className="text-muted text-base md:text-lg leading-relaxed">{t('choose.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

