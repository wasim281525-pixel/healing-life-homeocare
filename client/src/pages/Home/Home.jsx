import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';
import Appointment from '../../components/Appointment/Appointment';
import Contact from '../../components/Contact/Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Appointment />
      <Contact />
    </>
  );
}

export default Home;