
import React from 'react';

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-butter-dark leading-tight mb-4">
          See Customer Churn <br className="hidden md:block" />
          Before It Happens
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Unlock predictive insights and stop churn in its tracks. Butter AI gives you the clarity to act before your customers walk away.
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-butter-yellow text-butter-dark font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transform transition-transform duration-300"
        >
          Get Early Access
        </button>
      </div>
    </section>
  );
};

export default Hero;
