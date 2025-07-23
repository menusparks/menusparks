
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ComingSoonPage from './pages/ComingSoonPage';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-gray-300 flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ComingSoonPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
