import React from 'react';
import { Calculator } from './Calculator';

export const KpisPage: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <button onClick={() => scrollTo(to)} className="text-[0.72rem] font-semibold text-brand-accent-dark no-underline bg-brand-tag-bg border border-brand-tag-border rounded-full py-0.5 px-2.5 hover:bg-[#d8f0e2] transition-colors">
      {children}
    </button>
  );

  const KpiCard = ({ title, sub, formula, ok, bad, desc, tools }: any) => (
    <div className="bg-brand-panel border border-brand-border rounded-xl p-3.5">
      <h4 className="text-[0.95rem] font-bold flex gap-2 items-baseline flex-wrap">
        {title} {sub && <small className="text-brand-muted font-normal text-[0.72rem]">{sub}</small>}
      </h4>
      <span className="block bg-[#f2f4f9] border border-brand-border rounded-md py-1 px-2 text-[0.74rem] text-brand-accent2 font-mono my-1.5">
        {formula}
      </span>
      {ok && <div className="text-[0.76rem] my-0.5"><b className="text-brand-accent-dark font-semibold">{ok.label}:</b> {ok.val}</div>}
      {bad && <div className="text-[0.76rem] my-0.5"><b className="text-brand-warn font-semibold">{bad.label}:</b> {bad.val}</div>}
      <p className="text-brand-muted text-[0.78rem] mt-1.5 leading-snug">{desc}</p>
      {tools && (
        <div className="mt-1.5">
          {tools.map((t: string, i: number) => (
            <span key={i} className="inline-block text-[0.64rem] bg-[#eef1f7] border border-brand-border rounded-full py-[1px] px-2 mr-1 text-brand-muted">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="animate-in fade-in duration-300">
      <header className="pt-8 pb-5 border-b border-brand-border bg-gradient-to-b from-[#f0faf4] to-brand-bg">
        <div className="max-w-[1020px] mx-auto px-5">
          <div className="font-mono text-[0.7rem] tracking-[0.18em] text-brand-accent-dark uppercase font-bold">
            PROYECTO HAWKERS / RECURSO
          </div>
          <h1 className="text-[1.9rem] my-1.5 tracking-tight font-bold">KPIs completos del e-commerce</h1>
          <p className="text-brand-muted max-w-[780px] text-[0.92rem]">
            Guía de referencia para evaluar de punta a punta el rendimiento de la tienda: del primer impacto publicitario al valor de vida del cliente. Cada KPI con su fórmula, rango orientativo y dónde se mide. Incluye calculadora al final.
          </p>
          <div className="flex gap-1.5 flex-wrap pt-3 font-mono">
            <NavLink to="k-s1">01 Uso</NavLink>
            <NavLink to="k-s2">02 Funnel</NavLink>
            <NavLink to="k-s3">03 Atención</NavLink>
            <NavLink to="k-s4">04 Adquisición</NavLink>
            <NavLink to="k-s5">05 Conversión</NavLink>
            <NavLink to="k-s6">06 Retención</NavLink>
            <NavLink to="k-s7">07 Financieros</NavLink>
            <NavLink to="k-s8">08 Operativos</NavLink>
            <NavLink to="k-s9">09 Cadencia</NavLink>
            <NavLink to="k-s10">10 Calculadora</NavLink>
          </div>
        </div>
      </header>

      <section id="k-s1" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">01 / Cómo usar esta guía</span>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem] mt-2.5">
            No es una lista para memorizar: es un mapa de qué mirar, cuándo y qué hacer con cada dato. Si aún no facturas, céntrate en las secciones 03 y 04. Si ya vendes, sube a 05, 06 y 07.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2.5 mt-1.5">
            {[
              { t: "Mide pocas, bien", d: "Mejor 6 KPIs revisados a diario que 40 ignorados. Empieza por los esenciales de tu fase." },
              { t: "Compárate contigo", d: "Los benchmarks orientan; lo que importa es tu tendencia semana a semana y cohort a cohort." },
              { t: "No optimices en vacío", d: "Un KPI sin experimento detrás es ruido. Antes de tocar nada, formula una hipótesis." },
              { t: "Herramientas mínimas", d: "Shopify Analytics, Meta Ads Manager, Google Ads, GA4 y Klaviyo cubren casi todo." }
            ].map((p, i) => (
              <div key={i} className="bg-brand-panel border border-brand-border rounded-xl p-3.5">
                <b className="block text-[0.88rem] mb-1">{p.t}</b>
                <span className="text-brand-muted text-[0.79rem]">{p.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="k-s2" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">02 / El funnel completo</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">El viaje del cliente y el KPI que manda en cada etapa</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Una venta es la consecuencia de pasos encadenados; si uno falla, los siguientes caen aunque el resto esté perfecto.</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(215px,1fr))] gap-2.5">
            {[
              { n: "01", t: "Atención", d: "El anuncio aparece en el feed", k: "Impresiones · CPM · Frecuencia" },
              { n: "02", t: "Enganche", d: "El usuario se detiene a mirar", k: "Hook Rate · Thumbstop · CTR" },
              { n: "03", t: "Click", d: "Sale del anuncio hacia la tienda", k: "CTR · CPC" },
              { n: "04", t: "Landing", d: "Llega y consume la ficha", k: "Bounce Rate · Tiempo en página" },
              { n: "05", t: "Add-to-Cart", d: "Mete el producto al carrito", k: "ATC Rate" },
              { n: "06", t: "Checkout", d: "Inicia el proceso de pago", k: "Checkout Rate · Abandono" },
              { n: "07", t: "Compra", d: "Paga y recibe confirmación", k: "CR global · AOV · UPT · ROAS" },
              { n: "08", t: "Repetición", d: "Vuelve y compra de nuevo", k: "Repeat Rate · LTV" }
            ].map((s, i) => (
              <div key={i} className="bg-brand-panel border border-brand-border border-l-4 border-l-brand-accent rounded-lg p-3">
                <span className="text-[0.68rem] text-brand-accent-dark font-bold font-mono">{s.n}</span>
                <b className="block text-[0.9rem]">{s.t}</b>
                <i className="block text-brand-muted text-[0.76rem] not-italic my-0.5">{s.d}</i>
                <span className="text-[0.72rem] text-brand-accent2 font-semibold">{s.k}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="k-s3" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">03 / Atención y tráfico</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Ganar el primer segundo, ganar el click</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Si esta capa no funciona, ninguna otra importa. Mide siempre por <b className="text-brand-text">creatividad</b>, no solo por campaña: lo que falla casi siempre es la pieza.</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-3">
            <KpiCard title="Impresiones" sub="volumen base" formula="Reach × Frecuencia" desc="No es un KPI de calidad: es el volumen que hace fiables todas las demás métricas." ok={{label: "Necesitas", val: "5.000–10.000 por creatividad antes de juzgarla."}} tools={["Meta Ads", "Google Ads"]} />
            <KpiCard title="CTR" sub="Click-Through Rate" formula="Clicks ÷ Impresiones × 100" ok={{label: "Sano", val: ">1,5% Meta · >2% Google Shopping"}} bad={{label: "Alarma", val: "<0,6% en Meta"}} desc="CTR bajo + CPM alto = audiencia equivocada. CTR bajo + CPM normal = creatividad débil." tools={["Meta Ads", "Google Ads"]} />
            <KpiCard title="Hook Rate" sub="vídeos 3s" formula="Reproducciones 3s ÷ Impresiones × 100" ok={{label: "Sano", val: ">25% · >30% en UGC"}} bad={{label: "Alarma", val: "<15%"}} desc="Mide si el primer frame y el primer segundo ganan la atención. Si no superas 25%, nada posterior te salva." tools={["Meta Ads"]} />
            <KpiCard title="Thumbstop Ratio" sub="variante exigente" formula="Vistas 2s ÷ Impresiones × 100" ok={{label: "Sano", val: ">35%"}} bad={{label: "Alarma", val: "<20%"}} desc="Cuánta gente literalmente para el pulgar. Ideal para A/B test entre dos primeros frames." tools={["Meta Ads"]} />
            <KpiCard title="CPM" sub="coste por mil" formula="Inversión ÷ Impresiones × 1000" ok={{label: "Sano", val: "5–15 € en España (Meta)"}} bad={{label: "Alarma", val: ">25 € sostenido"}} desc="CPM creciente sin cambiar nada = audiencia saturada o pujas de la competencia subiendo. Toca rotar creatividades o ampliar públicos." tools={["Meta Ads", "Google Ads"]} />
            <KpiCard title="Frecuencia" sub="impresiones/persona" formula="Impresiones ÷ Alcance único" ok={{label: "Sano", val: "1,5–3,0 en 7 días"}} bad={{label: "Alarma", val: ">4"}} desc="Frecuencia alta con CTR cayendo = fatiga del anuncio. En remarketing se acepta 5–7; en frío no." tools={["Meta Ads"]} />
            <KpiCard title="Bounce Rate" sub="tasa de rebote" formula="Sesiones de 1 página ÷ Sesiones × 100" ok={{label: "Sano", val: "<50% en ficha"}} bad={{label: "Alarma", val: ">75%"}} desc="Bounce alto con CTR alto = el anuncio promete algo que la landing no cumple. Revisa coherencia anuncio→página." tools={["GA4", "Shopify"]} />
            <KpiCard title="Tiempo en página" formula="Tiempo total ÷ Nº sesiones" ok={{label: "Sano", val: ">45s en ficha"}} bad={{label: "Alarma", val: "<20s"}} desc="Si se quedan más de 1 min y no compran, el problema no es interés: es precio, envío o confianza." tools={["GA4"]} />
          </div>
        </div>
      </section>

      <section id="k-s4" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">04 / Adquisición</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">¿Cuánto cuesta traer un cliente y aguanta a escala?</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-3 mt-3.5">
            <KpiCard title="CPC" sub="coste por click" formula="Inversión ÷ Clicks" ok={{label: "Sano", val: "0,30–1,20 € Meta · 0,50–2 € Google"}} bad={{label: "Alarma", val: ">3 € sostenido"}} desc="No la optimices sola: un CPC alto puede convivir con CPA bajo si el tráfico convierte muy bien." tools={["Meta Ads", "Google Ads"]} />
            <KpiCard title="CPA" sub="coste por compra" formula="Inversión ads ÷ Compras" ok={{label: "Regla", val: "CPA < AOV × margen %"}} bad={{label: "Alarma", val: "CPA > margen bruto unitario"}} desc="Solo mide la parte publicitaria. Útil para comparar canales, no para juzgar rentabilidad real." tools={["Meta Ads", "Google Ads"]} />
            <KpiCard title="CAC" sub="coste total de adquisición" formula="(Ads + salarios + tools + agencia) ÷ Clientes nuevos" ok={{label: "Sano", val: "CAC ≤ LTV/3"}} bad={{label: "Alarma", val: "LTV/CAC < 1"}} desc="El CPA 'honesto': incluye todo lo que tocas para conseguir clientes. La métrica de decisiones de fondo." tools={["Excel", "Shopify"]} />
            <KpiCard title="ROAS" sub="retorno del ad spend" formula="Ingresos atribuidos ÷ Inversión ads" ok={{label: "Sano", val: "> tu Breakeven ROAS"}} bad={{label: "Alarma", val: "<1"}} desc="El ROAS de plataforma suele inflarse un 20–40% por atribución. Crúzalo siempre con el MER." tools={["Meta Ads", "Google Ads"]} />
            <KpiCard title="MER" sub="blended ROAS" formula="Ingresos totales ÷ Inversión total marketing" ok={{label: "Sano", val: ">2,5 asentada · >3 en lanzamiento"}} bad={{label: "Alarma", val: "<1,5 con ROAS aparente alto"}} desc="La métrica del CFO: todo el ingreso contra todo el marketing, sin atribución. Si aguanta al subir inversión, escala; si baja, frena." tools={["Excel", "Triple Whale"]} />
            <KpiCard title="Breakeven ROAS" sub="punto muerto" formula="1 ÷ Margen de contribución" ok={{label: "Ejemplo", val: "margen 40% → BE-ROAS 2,5"}} bad={{label: "Regla", val: "por debajo pierdes en cada venta nueva"}} desc="El número que hay que saberse de memoria: el suelo por debajo del cual una campaña no puede vivir." tools={["Calcular una vez"]} />
          </div>
        </div>
      </section>

      <section id="k-s5" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">05 / Conversión y ticket</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Las palancas dentro de la tienda</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Una ficha y un checkout mejorados pueden duplicar ventas sin tocar un euro de inversión.</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-3">
            <KpiCard title="Conversion Rate global" sub="CR" formula="Compras ÷ Sesiones × 100" ok={{label: "Sano", val: "1,5–3% en DTC"}} bad={{label: "Alarma", val: "<0,8%"}} desc="Compárala SIEMPRE por dispositivo y por canal: móvil suele rendir la mitad que desktop, orgánico más que paid frío." tools={["Shopify", "GA4"]} />
            <KpiCard title="CR por device" sub="mobile vs desktop" formula="CR móvil ÷ CR desktop" ok={{label: "Normal", val: "móvil ≈ 50–70% del desktop"}} bad={{label: "Alarma", val: "<30% — la tienda no es mobile-first"}} desc="La mayoría del tráfico pagado entra por móvil. Si convierte mucho peor, el problema es tu tienda: UX, velocidad o checkout." tools={["Shopify", "GA4"]} />
            <KpiCard title="AOV" sub="ticket medio" formula="Ingresos ÷ Nº pedidos" bad={{label: "Alarma", val: "AOV bajando mientras sube inversión"}} desc="Subir el AOV un 10% es la palanca más infravalorada: bundles, 'envío gratis a partir de X', cross-sell en carrito." tools={["Shopify"]} />
            <KpiCard title="UPT" sub="unidades por pedido" formula="Unidades vendidas ÷ Nº pedidos" ok={{label: "Sano", val: ">1,6 moda · >2 cosmética/suplementos"}} bad={{label: "Alarma", val: "clavado en 1,0"}} desc="Un AOV de 60 € puede ser un producto de 60 € o tres de 20 €: dos negocios distintos. Si tu UPT no se mueve de 1,0 hay oro en bundles y upsells." tools={["Shopify"]} />
            <KpiCard title="ATC Rate" sub="add-to-cart" formula="Sesiones con ATC ÷ Sesiones × 100" ok={{label: "Sano", val: "6–12%"}} bad={{label: "Alarma", val: "<3%"}} desc="ATC bajo = el problema está antes del checkout (precio, fotos, descripción, reviews). ATC alto con CR bajo = el problema está en checkout/envío." tools={["Shopify", "GA4"]} />
            <KpiCard title="Checkout Rate" formula="Sesiones que inician checkout ÷ Sesiones × 100" ok={{label: "Sano", val: "3–6%"}} bad={{label: "Alarma", val: "ATC alto + checkout bajo"}} desc="El bache entre carrito y checkout casi siempre es el shock del coste de envío. Prueba envío gratis condicional o transparencia desde la ficha." tools={["Shopify"]} />
            <KpiCard title="Cart Abandonment" sub="abandono de carrito" formula="1 − (Compras ÷ ATCs) × 100" ok={{label: "Sano", val: "<70% (la media del sector ronda eso)"}} bad={{label: "Alarma", val: ">85%"}} desc="Es inevitable, pero los flujos de recuperación por email/WhatsApp rescatan típicamente un 8–15% de los carritos." tools={["Klaviyo", "Shopify"]} />
            <KpiCard title="Checkout → Purchase" sub="conversión final" formula="Compras ÷ Inicios de checkout × 100" ok={{label: "Sano", val: ">50%"}} bad={{label: "Alarma", val: "<30%"}} desc="Si esta tasa es baja no es marketing: es técnico. Métodos de pago insuficientes, errores de validación o formulario eterno." tools={["Shopify"]} />
          </div>
        </div>
      </section>

      <section id="k-s6" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">06 / Retención y LTV</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Vender una vez es marketing; la segunda, negocio</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Sin retención, el e-commerce es una rueda de hámster que solo gira mientras inyectes ads.</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-3">
            <KpiCard title="Repeat Purchase Rate" sub="recompra" formula="Clientes con 2+ compras ÷ Total clientes × 100" ok={{label: "Sano", val: ">27% a 12 meses"}} bad={{label: "Alarma", val: "<10%"}} desc="Si es bajo y el producto no es consumible, eres un negocio de adquisición pura: cada euro se gana en la primera venta." tools={["Shopify"]} />
            <KpiCard title="LTV 30/60/90 días" sub="valor temprano" formula="Ingresos del cohort en N días ÷ Clientes del cohort" ok={{label: "Sano", val: "LTV90 > 1,5 × AOV inicial"}} bad={{label: "Alarma", val: "LTV90 ≈ AOV — el cliente no vuelve"}} desc="No esperes 12 meses. Si el LTV60 ya supera el CAC, puedes escalar agresivamente." tools={["Shopify", "Klaviyo"]} />
            <KpiCard title="LTV / CAC" sub="la regla 3:1" formula="LTV (12m) ÷ CAC" ok={{label: "Sano", val: ">3"}} bad={{label: "Alarma", val: "<1"}} desc="La métrica reina del e-commerce maduro y la primera que mira un inversor." tools={["Excel"]} />
            <KpiCard title="Tiempo a 2ª compra" formula="Días medios entre compra #1 y #2" ok={{label: "Referencia", val: "consumible 30–60d · moda 90–120d"}} bad={{label: "Alarma", val: "el gap se alarga vs cohorts anteriores"}} desc="Define cuándo disparar el flujo de win-back automatizado antes de que el cliente se duerma." tools={["Klaviyo", "Shopify"]} />
            <KpiCard title="Cohort Retention" sub="por mes de alta" formula="% del cohort del mes X que sigue comprando en X+N" ok={{label: "Sano", val: "la curva aplana"}} bad={{label: "Alarma", val: "cada cohort retiene peor"}} desc="Cohorts horizontales = base fiel. Cohorts cayendo a cero = negocio puramente de adquisición." tools={["Shopify", "Triple Whale"]} />
            <KpiCard title="Dormant Rate" sub="clientes dormidos" formula="Clientes sin compra en 12m ÷ Total × 100" ok={{label: "Sano", val: "<40% consumibles · <60% moda"}} bad={{label: "Alarma", val: ">80%"}} desc="Antes de comprar más tráfico, despierta a los que ya tienes con campañas de win-back." tools={["Klaviyo", "Shopify"]} />
          </div>
        </div>
      </section>

      <section id="k-s7" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">07 / Financieros</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Sin estos números no hay negocio: hay un hobby caro</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-3 mt-3.5">
            <KpiCard title="Margen bruto por SKU" formula="(PVP − Coste producto) ÷ PVP × 100" ok={{label: "Sano", val: ">60% DTC con marca · >40% dropshipping"}} bad={{label: "Alarma", val: "<35% con paid ads"}} desc="Margen bajo no se compensa con volumen. Para Meta Ads en serio necesitas mínimo ~50%." tools={["Excel"]} />
            <KpiCard title="Contribution Margin" formula="Ingresos − COGS − envío − pasarela − devoluciones − CAC" ok={{label: "Sano", val: ">20% del revenue"}} bad={{label: "Alarma", val: "≤0"}} desc="El margen real tras pagar todo lo variable y la adquisición: lo que queda para fijos y para ti." tools={["Excel", "Triple Whale"]} />
            <KpiCard title="CAC Payback" sub="recuperación" formula="CAC ÷ Margen bruto medio por pedido" ok={{label: "Sano", val: "<1 pedido"}} bad={{label: "Alarma", val: ">3 pedidos"}} desc="Si tardas 2 pedidos en recuperar el CAC y la 2ª compra llega a 90 días, necesitas mucho cash adelantado para escalar." tools={["Excel"]} />
            <KpiCard title="% Revenue por canal" formula="Ingresos del canal ÷ Ingresos totales" ok={{label: "Sano", val: "ningún canal >60%"}} bad={{label: "Alarma", val: "Meta >80%"}} desc="Concentración alta en un canal es riesgo existencial: un cambio de algoritmo te tumba. Diversifica con email, SEO y orgánico." tools={["Shopify", "GA4"]} />
            <KpiCard title="% New vs Returning" formula="Ingresos de clientes 2+ ÷ Ingresos totales" ok={{label: "Sano", val: "30–50% returning desde el año 2"}} bad={{label: "Alarma", val: ">90% siempre nuevos"}} desc="El revenue de repetición es revenue barato (sin CAC). Email y WhatsApp son las palancas para hacerlo crecer." tools={["Shopify"]} />
          </div>
        </div>
      </section>

      <section id="k-s8" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">08 / Operativos</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Las métricas que matan negocios en silencio</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-3 mt-3.5">
            <KpiCard title="Tasa de devolución" formula="Pedidos devueltos ÷ Pedidos × 100" ok={{label: "Sano", val: "<8% consumibles · <20% moda"}} bad={{label: "Alarma", val: ">30% en moda"}} desc="Cada devolución se come envío de ida + vuelta + procesamiento. Margen del 50% con 20% de devoluciones = margen real del 30%." tools={["Shopify"]} />
            <KpiCard title="NPS" sub="Net Promoter Score" formula="% Promotores (9–10) − % Detractores (0–6)" ok={{label: "Sano", val: ">40"}} bad={{label: "Alarma", val: "<20"}} desc="Predice la repetición y el boca a boca. Pregúntalo por email ~14 días tras la entrega." tools={["Klaviyo", "Typeform"]} />
            <KpiCard title="Lead time de fulfillment" formula="Días entre confirmación y entrega" ok={{label: "Sano", val: "<3 días hábiles (España, stock propio)"}} bad={{label: "Alarma", val: ">7 días"}} desc="Predictor #1 de tickets de soporte y reviews negativas. Cada día extra sube la probabilidad de devolución." tools={["Shopify", "3PL"]} />
            <KpiCard title="Tasa de stockouts" formula="Días sin stock ÷ Días totales × 100 (por SKU)" ok={{label: "Sano", val: "<2% en core · 0% en best-sellers"}} bad={{label: "Alarma", val: ">5%"}} desc="Romper stock del best-seller cuesta ventas hoy y posicionamiento mañana. Mide por SKU, no en agregado." tools={["Shopify Inventory"]} />
          </div>
        </div>
      </section>

      <section id="k-s9" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">09 / Cadencia de revisión</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Qué mirar cada día, cada semana y cada mes</h2>
          <div className="overflow-x-auto mt-2">
            <table className="w-full border-collapse bg-brand-panel border border-brand-border rounded-xl overflow-hidden text-[0.8rem]">
              <thead>
                <tr>
                  <th className="bg-[#f2f4f9] text-[0.72rem] uppercase tracking-[0.08em] text-brand-muted p-2.5 border-b border-brand-border text-left">KPI</th>
                  <th className="bg-[#f2f4f9] text-[0.72rem] uppercase tracking-[0.08em] text-brand-muted p-2.5 border-b border-brand-border text-center">Diario</th>
                  <th className="bg-[#f2f4f9] text-[0.72rem] uppercase tracking-[0.08em] text-brand-muted p-2.5 border-b border-brand-border text-center">Semanal</th>
                  <th className="bg-[#f2f4f9] text-[0.72rem] uppercase tracking-[0.08em] text-brand-muted p-2.5 border-b border-brand-border text-center">Mensual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Inversión ads · CPM · CPC", "●", "—", "—"],
                  ["CTR · Hook Rate por creatividad", "●", "—", "—"],
                  ["Ventas · Revenue · AOV", "●", "●", "—"],
                  ["ROAS por campaña", "●", "●", "—"],
                  ["CR global · CR por device", "—", "●", "●"],
                  ["ATC Rate · Checkout Rate", "—", "●", "—"],
                  ["Cart Abandonment", "—", "●", "—"],
                  ["UPT · % returning revenue", "—", "—", "●"],
                  ["MER · CAC · LTV/CAC", "—", "—", "●"],
                  ["Cohort retention · Repeat Rate", "—", "—", "●"],
                  ["Contribution Margin · CAC Payback", "—", "—", "●"],
                  ["Return Rate · NPS · Lead Time", "—", "—", "●"]
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-2.5 border-b border-brand-border text-left">{row[0]}</td>
                    <td className="p-2.5 border-b border-brand-border text-center text-brand-accent-dark font-bold">{row[1]}</td>
                    <td className="p-2.5 border-b border-brand-border text-center text-brand-accent-dark font-bold">{row[2]}</td>
                    <td className="p-2.5 border-b border-brand-border text-center text-brand-accent-dark font-bold">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="k-s10" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">10 / Calculadora rápida</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Mete los datos de un periodo y ve los KPIs al instante</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Introduce los números de una semana o un mes. Los resultados se calculan en vivo.</p>
          <Calculator />
          <p className="text-brand-muted max-w-[780px] mt-3 text-[0.86rem]">
            <b className="text-brand-text">Cómo leerlo:</b> compara tu ROAS contra tu Breakeven ROAS. Por encima, ganas dinero por venta; por debajo, vendes a pérdida (puede valer la pena por LTV solo si retienes).
          </p>
        </div>
      </section>
    </div>
  );
};
