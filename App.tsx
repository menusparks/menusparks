
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();
  if (auth.loading) {
    return null; // Or a loading spinner for the whole page
  }
  return auth.user ? <>{children}</> : <Navigate to="/login" replace />;
};

const AppRoutes: React.FC = () => {
  const auth = useAuth();
  return (
    <div className="bg-brand-dark min-h-screen text-gray-300 flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={auth.user ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
          <Route path="/signup" element={auth.user ? <Navigate to="/dashboard" replace /> : <SignUpPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </AuthProvider>
);

export default App;