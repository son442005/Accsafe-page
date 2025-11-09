import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import MultiFeatures from './components/MultiFeatures';
import ProxyBlock from './components/ProxyBlock';
import HowTo from './components/HowTo';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Features />
        <WhyChoose />
        <MultiFeatures />
        <ProxyBlock />
        <HowTo />
      </main>
      <Footer />
    </>
  );
};

export default App;
