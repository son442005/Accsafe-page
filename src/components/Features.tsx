import { useI18n } from '../contexts/I18nContext';
import image1 from '../assets/images/image 1.png';
import image2 from '../assets/images/image 2.png';
import image3 from '../assets/images/image 3.png';
import image4 from '../assets/images/image 4.png';
import image5 from '../assets/images/image 5.png';

const features = [
  { key: 'p1', image: image1 },
  { key: 'p2', image: image2 },
  { key: 'p3', image: image3 },
  { key: 'p4', image: image4 },
  { key: 'p5', image: image5 },
];

const Features = () => {
  const { t } = useI18n();

  return (
    <section className="bg-[#e9f0f7] py-6 md:py-9">
      <div className="container px-4 md:px-5">
        {features.map((feature, index) => {
          const isReverse = index % 2 === 1;
          return (
            <div
              key={feature.key}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 items-center py-4 md:py-6.5 ${
                isReverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {!isReverse && (
                <div className="space-y-2 md:space-y-2.5 opacity-0 animate-fade-in-up order-1" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                  <h3 className="m-0 mb-2 md:mb-2.5 text-xl md:text-2xl font-bold">{t(`feat.${feature.key}.title`)}</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">{t(`feat.${feature.key}.desc`)}</p>
                </div>
              )}
              <div className={`opacity-0 animate-fade-in-up ${isReverse ? 'lg:order-1 order-1' : 'order-2'} flex justify-center lg:justify-start`} style={{ animationDelay: `${index * 0.1 + 0.1}s`, animationFillMode: 'forwards' }}>
                <img
                  src={feature.image}
                  alt={t(`feat.${feature.key}.title`)}
                  className="w-full max-w-full md:max-w-[360px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              {isReverse && (
                <div className="space-y-2 md:space-y-2.5 opacity-0 animate-fade-in-up lg:order-2 order-2" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                  <h3 className="m-0 mb-2 md:mb-2.5 text-xl md:text-2xl font-bold">{t(`feat.${feature.key}.title`)}</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">{t(`feat.${feature.key}.desc`)}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

