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
    <section className="bg-white py-9">
      <div className="container">
        <h2 className="text-center mb-6.5 text-3xl font-bold opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          {t('multi.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6.5 items-start">
          {multiFeatures.map((feature, index) => (
            <div
              key={feature.key}
              className="bg-transparent p-2.5 text-center opacity-0 animate-fade-in-up hover:scale-105 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:shadow-md"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-5xl mb-3 hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h4 className="m-2 mb-2 text-base font-semibold">{t(`multi.${feature.key}.title`)}</h4>
              <p className="text-muted text-sm m-0">{t(`multi.${feature.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiFeatures;

