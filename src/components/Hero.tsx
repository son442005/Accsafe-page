import { useI18n } from '../contexts/I18nContext';

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="animate-rgb-gradient text-white min-h-screen flex items-center pt-20 md:pt-16 pb-8 md:pb-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <div className="space-y-3 md:space-y-4 animate-fade-in-up max-w-3xl w-full">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[1.15] font-bold mb-3 md:mb-4 text-white drop-shadow-lg px-2"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />
            <ul className="list-none p-0 m-0 mb-4 md:mb-6 text-white/95 space-y-2 md:space-y-3 flex flex-col items-center">
              <li className="opacity-0 animate-fade-in-up font-medium text-base sm:text-lg md:text-xl px-4" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                {t('hero.b1')}
              </li>
              <li className="opacity-0 animate-fade-in-up font-medium text-base sm:text-lg md:text-xl px-4" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {t('hero.b2')}
              </li>
              <li className="opacity-0 animate-fade-in-up font-medium text-base sm:text-lg md:text-xl px-4" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {t('hero.b3')}
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/son442005/Accsafe-page/releases/download/Accsafe-App/AccSafe-1.0.0-x64.exe"
            download
            className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-[10px] bg-white text-navy no-underline font-semibold text-base md:text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

