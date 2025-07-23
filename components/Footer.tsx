
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface/30">
      <div className="container mx-auto px-4 py-6 mt-12 border-t border-gray-700/50">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MenuSparks. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" onClick={(e) => { e.preventDefault(); alert('PourPlan, our sister site for beverage menus, is coming soon!'); }} title="PourPlan: For all your beverage menu needs." className="text-gray-400 hover:text-brand-primary-light">PourPlan</a>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-brand-primary-light">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-brand-primary-light">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;