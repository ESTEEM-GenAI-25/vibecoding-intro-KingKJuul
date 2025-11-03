import React from 'react';

// Fix: Use React.ReactElement instead of JSX.Element to resolve the missing JSX namespace error.
const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-butter-yellow text-butter-dark mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-butter-dark mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Product: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-butter-dark">One Dashboard, Total Clarity</h2>
          <p className="text-lg text-gray-600 mt-4">
            Butter AI unifies your fragmented customer data into actionable insights.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
            title="Customer Health Scoring"
          >
            Go beyond simple activity metrics. Our AI analyzes multi-channel interactions to generate a dynamic health score for every customer.
          </FeatureCard>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Insight Summaries"
          >
            Don't just see a risk score—understand it. Butter AI provides clear, natural language summaries explaining *why* a customer is at risk.
          </FeatureCard>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
            title="Automated Alerts"
          >
            Get notified in Slack the moment a high-value customer shows signs of churn. Our alerts are timely, specific, and actionable.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Product;