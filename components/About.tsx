
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-butter-dark mb-4">
            Stop Guessing, Start Retaining
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            For early-stage SaaS founders, retaining customers is everything. But sifting through CRM notes, Slack messages, and usage logs is a full-time job. You're flying blind, guessing which accounts need attention.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed font-semibold">
            Butter AI was built to change that. We connect your data sources and use AI to surface the critical signals, so you can spend less time guessing and more time building relationships that last.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
