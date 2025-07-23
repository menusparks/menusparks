
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Logo } from '../constants';
import Spinner from '../components/Spinner';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('chef@thesizzlinggrill.com');
  const [password, setPassword] = useState('password123'); // Dummy password
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      // In a real app, you'd validate the password too
      if (!email) {
          throw new Error("Email is required.");
      }
      await login(email);
      // On success, the App's routing logic will navigate to the dashboard.
      // We don't set isLoading to false here, as this component will be unmounted.
    } catch (err: any) {
      setError(err.message || 'Failed to log in. Please try again.');
      // Only set loading to false on failure, as we're staying on the page.
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        <div className="bg-brand-surface border border-gray-700/50 rounded-xl shadow-2xl shadow-brand-dark p-8">
            <div className="flex justify-center mb-6">
                <Logo />
            </div>
            <h2 className="text-2xl font-bold text-center text-white mb-2">Welcome Back</h2>
            <p className="text-center text-gray-400 mb-6">Enter your credentials to access your dashboard.</p>

            {error && <p className="bg-red-900/50 text-red-300 p-3 rounded-md mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-brand-dark bg-brand-primary hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-primary disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <Spinner size="sm" /> : 'Sign In'}
              </button>
            </div>
          </form>
           <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-brand-primary-light hover:text-brand-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
