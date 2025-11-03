
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate a network request
    setTimeout(() => {
      // In a real app, you would handle form submission here.
      // For this demo, we'll just show a success message.
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-butter-dark">Join the Waitlist</h2>
          <p className="text-lg text-gray-600 mt-4 mb-8">
            Get early access to Butter AI and be the first to know when we launch.
          </p>
          
          {status === 'success' ? (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md text-left" role="alert">
              <p className="font-bold">Thank You!</p>
              <p>You're on the list. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="font-medium text-gray-700 sr-only">Name</label>
                <input type="text" id="name" required placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-butter-yellow" />
              </div>
              <div>
                <label htmlFor="email" className="font-medium text-gray-700 sr-only">Email</label>
                <input type="email" id="email" required placeholder="Your Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-butter-yellow" />
              </div>
              <div>
                <label htmlFor="message" className="font-medium text-gray-700 sr-only">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your startup (optional)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-butter-yellow"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-butter-dark text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {status === 'submitting' ? 'Submitting...' : 'Get Early Access'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
