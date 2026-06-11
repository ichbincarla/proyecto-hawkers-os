import React, { useState, useMemo } from 'react';

export const Scorecard: React.FC = () => {
  const [scores, setScores] = useState<Record<string, number | null>>({
    demanda: null,
    margen: null,
    intensidad: null,
    angulo: null,
    logistica: null
  });

  const handleScore = (crit: string, val: number) => {
    setScores(prev => ({ ...prev, [crit]: val }));
  };

  const result = useMemo(() => {
    const keys = Object.keys(scores);
    const answered = keys.filter(k => scores[k] !== null);
    
    if (answered.length < 5) {
      const currentTotal = answered.reduce((sum, k) => sum + (scores[k] || 0), 0);
      return {
        status: 'pending',
        text: `Llevas ${answered.length} de 5 criterios puntuados. Total parcial: ${currentTotal}.`,
        className: 'bg-[#f2f4f9] text-brand-muted'
      };
    }

    const total = keys.reduce((sum, k) => sum + (scores[k] || 0), 0);
    const hasCriticalZero = ['demanda', 'margen', 'logistica'].some(c => scores[c] === 0);

    if (hasCriticalZero) {
      return {
        status: 'bad',
        text: `Total: ${total}/10 — DESCARTE DIRECTO: tienes un 0 en demanda, margen o logística/legalidad. Son límites estructurales: pasa al siguiente producto.`,
        className: 'bg-brand-warn-bg text-brand-warn border border-brand-warn-border'
      };
    } else if (total >= 9) {
      return {
        status: 'ok',
        text: `Total: ${total}/10 — ADELANTE: valida la oferta con dinero real (paso 5 del proceso: landing + 50-100 € de ads o pre-venta).`,
        className: 'bg-brand-tag-bg text-brand-accent-dark border border-brand-tag-border'
      };
    } else if (total >= 6) {
      return {
        status: 'mid',
        text: `Total: ${total}/10 — VIABLE CON DEBERES: arregla los puntos flojos (los 0 y los 1) antes de invertir fuerte.`,
        className: 'bg-[#fef6e7] text-[#9a6d12] border border-[#ecd9a8]'
      };
    } else {
      return {
        status: 'bad',
        text: `Total: ${total}/10 — DESCÁRTALO y pasa al siguiente. Matar rápido una mala idea es una habilidad, no un fracaso.`,
        className: 'bg-brand-warn-bg text-brand-warn border border-brand-warn-border'
      };
    }
  }, [scores]);

  const criteria = [
    { id: 'demanda', label: '1 · Demanda', desc: '¿Ya hay gente buscándolo y competidores vendiéndolo?' },
    { id: 'margen', label: '2 · Margen', desc: '¿El precio de venta es ≥ 3× el coste landed real?' },
    { id: 'intensidad', label: '3 · Intensidad', desc: '¿Produce un "lo necesito" o un "wow", no un "estaría bien"?' },
    { id: 'angulo', label: '4 · Ángulo', desc: '¿Tienes un ángulo defendible más allá del precio?' },
    { id: 'logistica', label: '5 · Logística', desc: '¿Ligero, robusto, legal y con proveedor fiable + plan B?' },
  ];

  return (
    <div className="bg-brand-panel border border-brand-border rounded-xl p-4 mt-2.5">
      {criteria.map((c) => (
        <div key={c.id} className="flex items-center gap-2.5 py-2 border-b border-dashed border-brand-border flex-wrap">
          <div className="flex-1 min-w-[220px]">
            <b className="text-[0.86rem] block">{c.label}</b>
            <span className="text-[0.76rem] text-brand-muted">{c.desc}</span>
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2].map(val => {
              const isSelected = scores[c.id] === val;
              let btnClass = "w-9 h-8 border border-brand-border bg-[#f2f4f9] rounded-md text-[0.85rem] font-bold text-brand-muted cursor-pointer hover:border-brand-accent transition-colors";
              if (isSelected) {
                if (val === 0) btnClass = "w-9 h-8 border rounded-md text-[0.85rem] font-bold cursor-pointer transition-colors bg-brand-warn-bg border-brand-warn text-brand-warn";
                if (val === 1) btnClass = "w-9 h-8 border rounded-md text-[0.85rem] font-bold cursor-pointer transition-colors bg-[#fef6e7] border-[#e0a93e] text-[#9a6d12]";
                if (val === 2) btnClass = "w-9 h-8 border rounded-md text-[0.85rem] font-bold cursor-pointer transition-colors bg-brand-tag-bg border-brand-accent text-brand-accent-dark";
              }
              return (
                <button key={val} onClick={() => handleScore(c.id, val)} className={btnClass}>
                  {val}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className={`mt-3.5 p-3 rounded-lg text-[0.86rem] font-semibold ${result.className}`}>
        {result.text}
      </div>
    </div>
  );
};
