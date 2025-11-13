import { useI18n } from '../contexts/I18nContext';
import { useEffect, useRef, useState } from 'react';
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
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="bg-[#e9f0f7] py-[58px] md:py-[74px] lg:py-[90px] relative overflow-hidden">
      {/* Decor elements - Multilogin style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(6, 32, 43, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 32, 43, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>

        {/* Floating gradient blobs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-float decor-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-float decor-blob" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/8 to-blue-400/8 rounded-full blur-3xl animate-float decor-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        {features.map((feature, index) => {
          const isReverse = index % 2 === 1;
          const isVisible = visibleItems.has(index);

          return (
            <div
              key={feature.key}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start py-[58px] md:py-[74px] lg:py-[90px]"
            >
              {!isReverse ? (
                <>
                  <div
                    className={`space-y-4 md:space-y-5 order-1 flex flex-col justify-start feature-reveal-left ${isVisible ? 'visible' : ''}`}
                    style={isVisible ? { transitionDelay: `${index * 0.1}s` } : {}}
                  >
                    <h3 className="m-0 mb-4 md:mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">{t(`feat.${feature.key}.title`)}</h3>
                    <p className="text-muted leading-relaxed text-base md:text-lg lg:text-xl mb-4 md:mb-5">{t(`feat.${feature.key}.desc`)}</p>
                    <a
                      href="#"
                      className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg bg-accent text-white no-underline font-semibold text-base md:text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                    >
                      {t('feat.cta')}
                    </a>
                  </div>
                  <div
                    className={`order-2 flex justify-center lg:justify-end feature-reveal-right ${isVisible ? 'visible' : ''}`}
                    style={isVisible ? { transitionDelay: `${index * 0.1 + 0.1}s` } : {}}
                  >
                    <img
                      src={feature.image}
                      alt={t(`feat.${feature.key}.title`)}
                      className="w-full max-w-full md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`order-1 flex justify-center lg:justify-start feature-reveal-left ${isVisible ? 'visible' : ''}`}
                    style={isVisible ? { transitionDelay: `${index * 0.1 + 0.1}s` } : {}}
                  >
                    <img
                      src={feature.image}
                      alt={t(`feat.${feature.key}.title`)}
                      className="w-full max-w-full md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div
                    className={`space-y-4 md:space-y-5 order-2 flex flex-col justify-start feature-reveal-right ${isVisible ? 'visible' : ''}`}
                    style={isVisible ? { transitionDelay: `${index * 0.1}s` } : {}}
                  >
                    <h3 className="m-0 mb-4 md:mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">{t(`feat.${feature.key}.title`)}</h3>
                    <p className="text-muted leading-relaxed text-base md:text-lg lg:text-xl mb-4 md:mb-5">{t(`feat.${feature.key}.desc`)}</p>
                    <a
                      href="#"
                      className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg bg-accent text-white no-underline font-semibold text-base md:text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                    >
                      {t('feat.cta')}
                    </a>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

