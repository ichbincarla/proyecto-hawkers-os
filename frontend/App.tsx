import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { KitPage } from './components/KitPage';
import { KpisPage } from './components/KpisPage';
import { ValidationPage } from './components/ValidationPage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('kit');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('k-')) {
        setActiveTab('kpis');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash.startsWith('v-')) {
        setActiveTab('validacion');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (['kit', 'kpis', 'validacion'].includes(hash)) {
        setActiveTab(hash);
        window.scrollTo(0, 0);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string, hash?: string) => {
    setActiveTab(tab);
    if (hash) {
      window.location.hash = hash;
    } else {
      window.location.hash = tab;
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation activeTab={activeTab} onTabChange={(tab) => handleNavigate(tab)} />
      
      <main className="flex-grow">
        {activeTab === 'kit' && <KitPage onNavigate={handleNavigate} />}
        {activeTab === 'kpis' && <KpisPage />}
        {activeTab === 'validacion' && <ValidationPage onNavigate={handleNavigate} />}
      </main>

      <footer className="border-t border-brand-border mt-10 py-4 pb-8 text-brand-muted text-[0.7rem] tracking-[0.08em] text-center">
        <div className="max-w-[1020px] mx-auto px-5 font-mono">
          PROYECTO HAWKERS · OS v1.0 · KIT DE LANZAMIENTO + KPIs + VALIDACIÓN DE PRODUCTO
        </div>
      </footer>
    </div>
  );
};

export default App;
