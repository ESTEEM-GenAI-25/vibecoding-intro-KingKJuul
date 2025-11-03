
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import ChatbotSection from './components/ChatbotSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Product', ref: productRef },
    { name: 'Q&A', ref: chatbotRef },
    { name: 'Contact', ref: contactRef },
  ];

  return (
    <div className="bg-gray-50 text-butter-dark">
      <Header navLinks={navLinks} scrollToRef={scrollToRef} />
      <main>
        <div ref={homeRef}>
          <Hero scrollToContact={() => scrollToRef(contactRef)} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={productRef}>
          <Product />
        </div>
        <div ref={chatbotRef}>
          <ChatbotSection />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
