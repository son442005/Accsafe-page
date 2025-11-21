import { useI18n } from '../contexts/I18nContext';
import { useEffect, useRef, useState } from 'react';

const multiFeatures = [
  { icon: '🔒', key: 'p1' },
  { icon: '🧩', key: 'p2' },
  { icon: '🔁', key: 'p3' },
  { icon: '🌐', key: 'p4' },
  { icon: '🖥️', key: 'p5' },
];

const MultiFeatures = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="multifeatures" className="bg-white py-6 md:py-9">
      <div className="container">
        <h2
          className={`text-center mb-8 md:mb-12 lg:mb-16 text-2xl md:text-3xl lg:text-4xl font-bold px-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {t('multi.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-7 lg:gap-8 items-start">
          {multiFeatures.map((feature, index) => {
            const itemVisible = visibleItems.has(index);
            return (
              <div
                key={feature.key}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`bg-transparent p-3 md:p-2.5 text-center hover:scale-105 transition-all duration-300 rounded-lg hover:bg-gray-50 hover:shadow-md ${
                  itemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={itemVisible ? { transitionDelay: `${index * 0.1}s` } : {}}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-3 hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="m-2 mb-2 text-sm md:text-base lg:text-lg font-semibold">{t(`multi.${feature.key}.title`)}</h4>
                <p className="text-muted text-xs md:text-sm lg:text-base m-0 px-2">{t(`multi.${feature.key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MultiFeatures;

