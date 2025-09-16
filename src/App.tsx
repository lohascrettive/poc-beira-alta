import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-accent-50">
      <Header />
      
      <main>
        <ChatInterface />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
