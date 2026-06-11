import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'kit', label: 'Kit de Lanzamiento' },
    { id: 'kpis', label: 'KPIs del e-commerce' },
    { id: 'validacion', label: 'Validación de producto' },
  ];

  return (
    <nav className="sticky top-0 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-2.5 z-50">
      <div className="max-w-[1020px] mx-auto px-5 flex gap-2 items-center flex-wrap">
        <span className="font-mono text-[0.78rem] font-bold tracking-[0.14em] text-brand-accent-dark mr-2 flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_6px_#0f9d58] mr-1.5"></span>
          PROYECTO HAWKERS · OS
        </span>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`text-[0.8rem] font-semibold no-underline border rounded-full py-1 px-4 cursor-pointer transition-colors ${
              activeTab === tab.id
                ? 'bg-brand-tag-bg border-brand-tag-border text-brand-accent-dark'
                : 'bg-transparent border-brand-border text-brand-muted hover:border-brand-accent hover:text-brand-accent-dark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
