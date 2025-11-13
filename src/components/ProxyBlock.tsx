import { useI18n } from '../contexts/I18nContext';
import flagVn from '../assets/images/flag-vn.svg';
import flagRu from '../assets/images/flag-ru.svg';
import flagUs from '../assets/images/flag-us.svg';

const proxyList = [
  { flag: flagVn, ip: '113.190.119.252' },
  { flag: flagRu, ip: '185.32.121.11' },
  { flag: flagUs, ip: '104.244.42.1' },
];

const ProxyBlock = () => {
  const { t } = useI18n();

  return (
    <section className="bg-navy text-white pt-5 md:pt-7 pb-[68px] md:pb-[76px] mt-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="flex-1 space-y-2 md:space-y-3 opacity-0 animate-fade-in-up order-2 lg:order-1 text-center lg:text-left" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h3 className="m-0 mb-1 md:mb-1.5 text-xl md:text-2xl lg:text-3xl font-bold">{t('proxy.title')}</h3>
            <p className="text-[#9fb8c8] m-0 text-sm md:text-base lg:text-lg">{t('proxy.muted')}</p>
            <div className="p-0 m-2 md:m-3 space-y-1 md:space-y-1.5 text-sm md:text-base lg:text-lg">
              <div>{t('proxy.countries')}</div>
              <div>{t('proxy.ipv4')}</div>
            </div>
            <a
              href="https://fineproxy.org/vi/free-proxy/"
              className="inline-block px-3 md:px-3.5 py-2 md:py-2.5 rounded-lg bg-[#0b66ff] text-white no-underline font-semibold text-sm md:text-base hover:bg-[#0a5ae6] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('proxy.cta')}
            </a>
          </div>
          <div className="w-full lg:w-[480px] xl:w-[520px] opacity-0 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="bg-white/6 p-3 md:p-4.5 rounded-[10px] space-y-2 md:space-y-2.5">
              {proxyList.map((proxy, index) => (
                <div
                  key={index}
                  className="flex gap-2 md:gap-3 items-center p-2 md:p-2.5 hover:bg-white/10 rounded-md transition-colors"
                >
                  <img
                    src={proxy.flag}
                    alt="flag"
                    className="w-6 md:w-7 h-4 md:h-[18px] object-cover rounded-sm"
                  />
                  <span className="text-white text-sm md:text-base">{proxy.ip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProxyBlock;

