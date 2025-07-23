
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Logo } from '../constants';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <header className="bg-brand-surface/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 border-b border-gray-700/50">
          <Link to={user ? '/dashboard' : '/'}>
            <Logo />
          </Link>
          <nav className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-400 hidden sm:block">Welcome, {user.profile.name}!</span>
                 <Link to="/dashboard" className="text-gray-300 hover:text-brand-primary-light transition-colors duration-200">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:text-brand-primary-light transition-colors duration-200">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
