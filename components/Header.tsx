
import React, { useState } from 'react';

interface NavLink {
  name: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface HeaderProps {
  navLinks: NavLink[];
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ navLinks, scrollToRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-butter-dark">
          Butter <span className="text-butter-yellow">AI</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToRef(link.ref)}
              className="text-gray-600 hover:text-butter-dark font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
        
        <button 
          onClick={() => scrollToRef(navLinks[navLinks.length - 1].ref)}
          className="hidden md:inline-block bg-butter-dark text-white font-semibold py-2 px-5 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Get Early Access
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToRef(link.ref);
                  setIsMenuOpen(false);
                }}
                className="py-2 text-gray-600 hover:text-butter-dark font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                scrollToRef(navLinks[navLinks.length - 1].ref);
                setIsMenuOpen(false);
              }}
              className="mt-4 bg-butter-dark text-white font-semibold py-2 px-5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Early Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
