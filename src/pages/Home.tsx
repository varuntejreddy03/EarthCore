import Hero from '../components/Hero';
import About from '../components/About';
import Commodities from '../components/Commodities';
import Services from '../components/Services';
import GlobalReach from '../components/GlobalReach';
import Vision from '../components/Vision';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Commodities />
      <Services />
      <GlobalReach />
      <Vision />
      <Contact />
    </div>
  );
}
