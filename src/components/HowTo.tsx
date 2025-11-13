import { useI18n } from '../contexts/I18nContext';

const steps = ['s1', 's2', 's3'];

const HowTo = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white pt-[120px] md:pt-[140px] pb-6 md:pb-9">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-7">
          <div className="flex-1 space-y-2 md:space-y-3 opacity-0 animate-fade-in-up text-center lg:text-left" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">{t('howto.title')}</h3>
            <p className="text-muted text-base md:text-lg lg:text-xl leading-relaxed">{t('howto.desc')}</p>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:gap-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="border-2 border-[#dbeefc] p-3 md:p-4 rounded-xl bg-white opacity-0 animate-fade-in-up hover:border-accent hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <h4 className="m-0 mb-1.5 md:mb-2 font-semibold text-base md:text-lg lg:text-xl">{t(`howto.${step}.title`)}</h4>
                <p className="m-0 text-muted text-sm md:text-base lg:text-lg">{t(`howto.${step}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;

