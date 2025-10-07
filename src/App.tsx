import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import WhyUs from './WhyUs';
import ROICalculator from './ROICalculator';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <ROICalculator />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
