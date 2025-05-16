import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (

      <Preloader>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
      </Preloader>

  );
}

export default App;