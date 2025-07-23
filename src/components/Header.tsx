
import React from 'react';
import { Logo } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-surface/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center py-4 border-b border-gray-700/50">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
