
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ComingSoonPage from './pages/ComingSoonPage';
import PourPlanComingSoonPage from './pages/PourPlanComingSoonPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-brand-dark min-h-screen text-gray-300 flex flex-col font-sans">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ComingSoonPage />} />
            <Route path="/pourplan" element={<PourPlanComingSoonPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
