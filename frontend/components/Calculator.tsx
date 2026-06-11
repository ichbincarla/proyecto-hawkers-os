import React, { useState, useMemo } from 'react';

export const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    inv: '', imp: '', clk: '', ses: '', atc: '', ped: '', uni: '', ing: '', mar: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const results = useMemo(() => {
    const inv = parseFloat(inputs.inv) || 0;
    const imp = parseFloat(inputs.imp) || 0;
    const clk = parseFloat(inputs.clk) || 0;
    const ses = parseFloat(inputs.ses) || 0;
    const atc = parseFloat(inputs.atc) || 0;
    const ped = parseFloat(inputs.ped) || 0;
    const uni = parseFloat(inputs.uni) || 0;
    const ing = parseFloat(inputs.ing) || 0;
    const mar = (parseFloat(inputs.mar) || 0) / 100;

    const fmt = (v: number, dec = 2, suf = '') => 
      (isFinite(v) && !isNaN(v)) ? v.toLocaleString('es-ES', { maximumFractionDigits: dec, minimumFractionDigits: 0 }) + suf : '—';

    const roas = inv > 0 ? ing / inv : NaN;
    const be = mar > 0 ? 1 / mar : NaN;
    const isOk = isFinite(roas) && isFinite(be) && roas >= be;

    return {
      cpm: imp > 0 ? fmt((inv / imp) * 1000, 2, ' €') : '—',
      ctr: imp > 0 ? fmt((clk / imp) * 100, 2, ' %') : '—',
      cpc: clk > 0 ? fmt(inv / clk, 2, ' €') : '—',
      cpa: ped > 0 ? fmt(inv / ped, 2, ' €') : '—',
      roas: isFinite(roas) ? fmt(roas, 2) : '—',
      atcRate: ses > 0 ? fmt((atc / ses) * 100, 2, ' %') : '—',
      cr: ses > 0 ? fmt((ped / ses) * 100, 2, ' %') : '—',
      aov: ped > 0 ? fmt(ing / ped, 2, ' €') : '—',
      upt: ped > 0 ? fmt(uni / ped, 2) : '—',
      be: isFinite(be) ? fmt(be, 2) : '—',
      isOk,
      hasData: isFinite(roas) && isFinite(be)
    };
  }, [inputs]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2.5">
      <div className="bg-brand-panel border border-brand-border rounded-xl p-4">
        <h3 className="text-[0.95rem] font-bold mb-3">Inputs del periodo</h3>
        {[
          { name: 'inv', label: 'Inversión publicitaria (€)' },
          { name: 'imp', label: 'Impresiones' },
          { name: 'clk', label: 'Clicks' },
          { name: 'ses', label: 'Sesiones' },
          { name: 'atc', label: 'Add-to-carts' },
          { name: 'ped', label: 'Pedidos' },
          { name: 'uni', label: 'Unidades vendidas' },
          { name: 'ing', label: 'Ingresos totales (€)' },
          { name: 'mar', label: 'Margen bruto medio (%)', max: "100" },
        ].map(field => (
          <div key={field.name} className="flex items-center gap-2 mb-2">
            <label className="flex-1 text-[0.8rem] text-brand-muted">{field.label}</label>
            <input
              type="number"
              name={field.name}
              min="0"
              max={field.max}
              placeholder="0"
              value={inputs[field.name as keyof typeof inputs]}
              onChange={handleInputChange}
              className="w-[130px] py-1 px-2 border border-brand-border rounded-md text-[0.84rem] bg-white text-brand-text outline-none text-right focus:border-brand-accent transition-colors"
            />
          </div>
        ))}
      </div>
      <div className="bg-brand-panel border border-brand-border rounded-xl p-4">
        <h3 className="text-[0.95rem] font-bold mb-3">KPIs derivados</h3>
        {[
          { label: 'CPM (€/1000 imp)', val: results.cpm },
          { label: 'CTR (clicks/imp)', val: results.ctr },
          { label: 'CPC (€/click)', val: results.cpc },
          { label: 'CPA (€/pedido)', val: results.cpa },
          { label: 'ROAS (€/€ ads)', val: results.roas, highlight: true },
          { label: 'ATC Rate', val: results.atcRate },
          { label: 'Conversion Rate global', val: results.cr },
          { label: 'AOV (€/pedido)', val: results.aov },
          { label: 'UPT (unidades/pedido)', val: results.upt },
          { label: 'Breakeven ROAS', val: results.be },
        ].map((res, idx) => (
          <div key={idx} className="flex justify-between items-baseline py-1.5 border-b border-dashed border-brand-border text-[0.83rem]">
            <span className="text-brand-muted">{res.label}</span>
            <b className={`font-mono tabular-nums ${res.highlight && results.hasData ? (results.isOk ? 'text-brand-accent-dark' : 'text-brand-warn') : ''}`}>
              {res.val}
            </b>
          </div>
        ))}
        
        <div className={`mt-2.5 p-2.5 rounded-lg text-[0.82rem] font-semibold ${
          !results.hasData ? 'bg-[#f2f4f9] text-brand-muted' :
          results.isOk ? 'bg-brand-tag-bg text-brand-accent-dark border border-brand-tag-border' :
          'bg-brand-warn-bg text-brand-warn border border-brand-warn-border'
        }`}>
          {!results.hasData ? 'Introduce inversión, ingresos y margen para ver el veredicto.' :
           results.isOk ? '✓ Vas por encima de tu Breakeven ROAS: ganas dinero en cada venta nueva.' :
           '✗ Vas por debajo de tu Breakeven ROAS: estás vendiendo a pérdida en la adquisición.'}
        </div>
      </div>
    </div>
  );
};
