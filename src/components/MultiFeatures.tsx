import { useI18n } from '../contexts/I18nContext';

const multiFeatures = [
  { icon: '🔒', key: 'p1' },
  { icon: '🧩', key: 'p2' },
  { icon: '🔁', key: 'p3' },
  { icon: '🌐', key: 'p4' },
  { icon: '🖥️', key: 'p5' },
];

const MultiFeatures = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white py-6 md:py-9">
      <div className="container">
        <h2 className="text-center mb-4 md:mb-6.5 text-2xl md:text-3xl lg:text-4xl font-bold opacity-0 animate-fade-in-up px-4" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          {t('multi.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-7 lg:gap-8 items-start">
          {multiFeatures.map((feature, index) => (
            <div
              key={feature.key}
              className="bg-transparent p-3 md:p-2.5 text-center opacity-0 animate-fade-in-up hover:scale-105 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:shadow-md"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-3 hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h4 className="m-2 mb-2 text-sm md:text-base lg:text-lg font-semibold">{t(`multi.${feature.key}.title`)}</h4>
              <p className="text-muted text-xs md:text-sm lg:text-base m-0 px-2">{t(`multi.${feature.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiFeatures;

