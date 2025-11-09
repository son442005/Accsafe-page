import { useI18n } from '../contexts/I18nContext';

const steps = ['s1', 's2', 's3'];

const HowTo = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white py-9">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex-1 space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h3 className="text-3xl font-bold mb-3">{t('howto.title')}</h3>
            <p className="text-muted text-lg leading-relaxed">{t('howto.desc')}</p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="border-2 border-[#dbeefc] p-4 rounded-xl bg-white opacity-0 animate-fade-in-up hover:border-accent hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <h4 className="m-0 mb-2 font-semibold text-lg">{t(`howto.${step}.title`)}</h4>
                <p className="m-0 text-muted">{t(`howto.${step}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;

