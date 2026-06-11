import React, { useState } from 'react';
import { KIT_DATA, Tool } from '../constants';

interface KitPageProps {
  onNavigate: (tab: string, hash?: string) => void;
}

export const KitPage: React.FC<KitPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTools = (tools: Tool[]) => {
    if (!searchQuery) return tools;
    const lowerQuery = searchQuery.toLowerCase();
    return tools.filter(
      (t) =>
        t.name.toLowerCase().includes(lowerQuery) ||
        t.desc.toLowerCase().includes(lowerQuery)
    );
  };

  return (
    <div className="animate-in fade-in duration-300">
      <header className="pt-8 pb-5 border-b border-brand-border bg-gradient-to-b from-[#f0faf4] to-brand-bg">
        <div className="max-w-[1020px] mx-auto px-5">
          <div className="font-mono text-[0.7rem] tracking-[0.18em] text-brand-accent-dark uppercase font-bold">
            PROYECTO HAWKERS / PACK DE LANZAMIENTO
          </div>
          <h1 className="text-[1.9rem] my-1.5 tracking-tight font-bold">Pack de Lanzamiento</h1>
          <p className="text-brand-muted max-w-[780px] text-[0.92rem]">
            <strong className="text-brand-text font-semibold">Todo lo que necesitamos para crear y escalar nuestra tienda online.</strong> El arsenal completo del directo de dos días en un solo sitio: investigación de producto, proveedores, la tienda, las creatividades y el marketing. Haz clic en cualquier tarjeta para abrir la herramienta.
          </p>
          <input
            type="search"
            className="text-[0.8rem] py-1.5 px-3.5 border border-brand-border rounded-full bg-white text-brand-text outline-none min-w-[200px] mt-3 focus:border-brand-accent transition-colors"
            placeholder="Buscar herramienta…"
            aria-label="Buscar herramienta"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      {KIT_DATA.map((dayData, idx) => {
        // Check if any tools match in this day to hide empty sections
        const hasMatchingTools = dayData.groups.some(g => filterTools(g.tools).length > 0);
        if (!hasMatchingTools && searchQuery) return null;

        return (
          <section key={idx} className="py-7">
            <div className="max-w-[1020px] mx-auto px-5">
              <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">
                {dayData.day}
              </span>
              <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">{dayData.title}</h2>
              <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">
                {dayData.lead}
              </p>

              {dayData.groups.map((group, gIdx) => {
                const filtered = filterTools(group.tools);
                if (filtered.length === 0) return null;

                return (
                  <div key={gIdx}>
                    <h3 className="font-mono text-[0.72rem] text-brand-accent2 tracking-[0.12em] uppercase mt-6 mb-2.5 before:content-['//_'] before:text-[#a8b0c2]">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
                      {filtered.map((tool, tIdx) => (
                        <a
                          key={tIdx}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-brand-panel border border-brand-border rounded-xl p-3.5 text-brand-text no-underline transition-all duration-150 hover:border-brand-accent hover:shadow-[0_3px_12px_rgba(15,157,88,0.12)] hover:-translate-y-0.5"
                        >
                          <span className="font-bold text-[0.92rem] flex items-baseline gap-1.5 flex-wrap">
                            {tool.name}
                            {tool.pill && (
                              <span className="inline-block text-[0.64rem] bg-brand-tag-bg text-brand-accent-dark border border-brand-tag-border rounded-full py-[1px] px-2 font-bold">
                                {tool.pill}
                              </span>
                            )}
                            <span className="ml-auto text-brand-accent text-[0.78rem]">↗</span>
                          </span>
                          <span className="block text-brand-muted text-[0.8rem] mt-1.5 leading-snug">
                            {tool.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {!searchQuery && (
        <section className="py-7">
          <div className="max-w-[1020px] mx-auto px-5">
            <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">
              Guías
            </span>
            <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Guías propias del OS</h2>
            <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">
              El contenido completo, dentro de esta misma web. Clic para abrir.
            </p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
              <button
                onClick={() => onNavigate('validacion')}
                className="text-left block bg-brand-panel border border-brand-border rounded-xl p-3.5 text-brand-text no-underline transition-all duration-150 hover:border-brand-accent hover:shadow-[0_3px_12px_rgba(15,157,88,0.12)] hover:-translate-y-0.5"
              >
                <span className="font-bold text-[0.92rem] flex items-baseline gap-1.5 flex-wrap">
                  Criterios de validación de producto
                  <span className="ml-auto text-brand-accent text-[0.78rem]">→</span>
                </span>
                <span className="block text-brand-muted text-[0.8rem] mt-1.5 leading-snug">
                  Los 5 criterios no negociables, el proceso de 7 pasos, banderas rojas y scorecard interactivo. Pásalo ANTES de elegir producto.
                </span>
              </button>
              <button
                onClick={() => onNavigate('kpis')}
                className="text-left block bg-brand-panel border border-brand-border rounded-xl p-3.5 text-brand-text no-underline transition-all duration-150 hover:border-brand-accent hover:shadow-[0_3px_12px_rgba(15,157,88,0.12)] hover:-translate-y-0.5"
              >
                <span className="font-bold text-[0.92rem] flex items-baseline gap-1.5 flex-wrap">
                  KPIs completos del e-commerce
                  <span className="ml-auto text-brand-accent text-[0.78rem]">→</span>
                </span>
                <span className="block text-brand-muted text-[0.8rem] mt-1.5 leading-snug">
                  Las métricas que de verdad importan con sus rangos sanos, cadencia de revisión y calculadora. Tu cuadro de mando.
                </span>
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#eefaf3] to-white border border-brand-tag-border rounded-xl p-4 mt-3.5">
              <p className="text-[0.88rem] text-brand-text">
                <b className="text-brand-accent-dark font-semibold">// Siguiente paso:</b> Fase 1 — elegir y validar producto con los criterios de la guía. Después: marca → tienda → captación → comunidad → lanzamiento.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
