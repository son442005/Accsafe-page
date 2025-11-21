import { useI18n } from '../contexts/I18nContext';
import { useEffect, useRef, useState } from 'react';

const steps = ['s1', 's2', 's3'];

const HowTo = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

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

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            headerObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

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
      headerObserver.disconnect();
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="guide" className="bg-white pt-[120px] md:pt-[140px] pb-6 md:pb-9">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-7">
          <div
            ref={headerRef}
            className="flex-1 space-y-2 md:space-y-3 text-center lg:text-left opacity-0 translate-y-5 transition-all duration-600"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">{t('howto.title')}</h3>
            <p className="text-muted text-base md:text-lg lg:text-xl leading-relaxed">{t('howto.desc')}</p>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:gap-3">
            {steps.map((step, index) => {
              const itemVisible = visibleItems.has(index);
              return (
                <div
                  key={step}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`border-2 border-[#dbeefc] p-3 md:p-4 rounded-xl bg-white hover:border-accent hover:shadow-lg transition-all duration-300 ${
                    itemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={itemVisible ? { transitionDelay: `${index * 0.1}s` } : {}}
                >
                  <h4 className="m-0 mb-1.5 md:mb-2 font-semibold text-base md:text-lg lg:text-xl">{t(`howto.${step}.title`)}</h4>
                  <p className="m-0 text-muted text-sm md:text-base lg:text-lg">{t(`howto.${step}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;

