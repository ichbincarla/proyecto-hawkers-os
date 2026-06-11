import React from 'react';
import { Scorecard } from './Scorecard';

interface ValidationPageProps {
  onNavigate: (tab: string, hash?: string) => void;
}

export const ValidationPage: React.FC<ValidationPageProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <button onClick={() => scrollTo(to)} className="text-[0.72rem] font-semibold text-brand-accent-dark no-underline bg-brand-tag-bg border border-brand-tag-border rounded-full py-0.5 px-2.5 hover:bg-[#d8f0e2] transition-colors">
      {children}
    </button>
  );

  const CritCard = ({ num, title, sub, q, pass, fail, note }: any) => (
    <div className="bg-brand-panel border border-brand-border rounded-xl p-4 mb-3">
      <h4 className="text-[1rem] flex gap-2.5 items-baseline flex-wrap font-bold">
        <span className="bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark rounded-md px-2 text-[0.85rem] font-mono">{num}</span>
        {title} <small className="text-brand-muted font-normal text-[0.76rem]">{sub}</small>
      </h4>
      <div className="text-[0.84rem] text-brand-text my-1.5 italic">{q}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
        <div className="bg-brand-tag-bg border border-brand-tag-border rounded-lg py-2 px-3 text-[0.78rem]">
          <b className="text-brand-accent-dark">PASA:</b> {pass}
        </div>
        <div className="bg-brand-warn-bg border border-brand-warn-border rounded-lg py-2 px-3 text-[0.78rem]">
          <b className="text-brand-warn">FALLA:</b> {fail}
        </div>
      </div>
      <p className="text-brand-muted text-[0.78rem] mt-1">{note}</p>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-300">
      <header className="pt-8 pb-5 border-b border-brand-border bg-gradient-to-b from-[#f0faf4] to-brand-bg">
        <div className="max-w-[1020px] mx-auto px-5">
          <div className="font-mono text-[0.7rem] tracking-[0.18em] text-brand-accent-dark uppercase font-bold">
            PROYECTO HAWKERS / RECURSO
          </div>
          <h1 className="text-[1.9rem] my-1.5 tracking-tight font-bold">Validación de producto</h1>
          <p className="text-brand-muted max-w-[780px] text-[0.92rem]">
            La mayoría de e-commerce que fracasan no mueren por la tienda, los anuncios o el precio: mueren porque el producto nunca tuvo demanda real y nadie lo comprobó a tiempo. Esta guía es el filtro <b className="text-brand-text">estricto</b> que separa un producto que vende de uno que quema presupuesto. Si tu idea no lo pasa, mejor saberlo hoy que con 2.000 € ya invertidos.
          </p>
          <div className="flex gap-1.5 flex-wrap pt-3 font-mono">
            <NavLink to="v-s1">01 Por qué</NavLink>
            <NavLink to="v-s2">02 Los 5 criterios</NavLink>
            <NavLink to="v-s3">03 Ganador vs trampa</NavLink>
            <NavLink to="v-s4">04 Proceso 7 pasos</NavLink>
            <NavLink to="v-s5">05 Descartes</NavLink>
            <NavLink to="v-s6">06 Scorecard</NavLink>
            <NavLink to="v-s7">07 Errores</NavLink>
          </div>
        </div>
      </header>

      <section id="v-s1" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">01 / Por qué validar antes de lanzar</span>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem] mt-2.5">
            Validar no es pedir opiniones: es buscar <b className="text-brand-text">pruebas</b> de que hay gente dispuesta a pagar antes de poner dinero, tiempo y ego encima de la mesa. El objetivo no es confirmar que tu idea es buena — es intentar tumbarla. Si aguanta, tienes algo; si cae, te ahorraste meses.
          </p>
          <div className="bg-gradient-to-br from-[#eefaf3] to-white border border-brand-tag-border rounded-xl p-4 my-3.5">
            <p className="text-[0.88rem] text-brand-text">
              <b className="text-brand-accent-dark font-semibold">La regla de oro:</b> no te cases con el producto. <b className="font-semibold">Cásate con el problema.</b> El producto es solo la hipótesis actual de cómo resolverlo, y las hipótesis se ponen a prueba, no se defienden.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2.5 mt-1.5">
            {[
              { t: "Datos, no opiniones", d: "Tu familia, tus amigos y tú no sois el mercado. Cuentan las búsquedas reales, los competidores vendiendo y la gente que paga o deja su email." },
              { t: "Barato y rápido", d: "Validar debería costar decenas de euros y días, no miles y meses. 'Monto toda la tienda y veo qué pasa' no es validar: es apostar." },
              { t: "El filtro 5-50", d: "Cada prueba debe entenderse en 5 segundos y ejecutarse en unos 50 minutos. Si te lleva una semana, divídela." },
              { t: "Decisión binaria", d: "La validación termina con una decisión: doblar, pivotar o matar. El 'quizás' mantiene vivos productos muertos." }
            ].map((p, i) => (
              <div key={i} className="bg-brand-panel border border-brand-border rounded-xl p-3.5">
                <b className="block text-[0.88rem] mb-1">{p.t}</b>
                <span className="text-brand-muted text-[0.79rem]">{p.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="v-s2" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">02 / Los 5 criterios no negociables</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Una puerta, no un promedio</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">El producto tiene que pasar los cinco. No vale "buena nota de media": un solo fallo grave en cualquiera es motivo de descarte. Sé honesta — el autoengaño aquí se paga caro después.</p>
          
          <CritCard num="1" title="Demanda demostrable" sub="¿ya lo busca o lo compra la gente?" q="¿Existe un mercado que YA quiere esto, o tendrías que educarlo desde cero?" pass="hay volumen de búsqueda, competidores vendiendo y demanda estable o creciente." fail="nadie lo busca y tu argumento es 'es que aún no existe'. Crear demanda cuesta millones." note="Que haya competencia es buena señal: significa que hay dinero. El mercado validado es más seguro que el 'océano azul', que casi siempre está vacío porque no hay demanda." />
          <CritCard num="2" title="Margen sano" sub="¿aguanta pagar publicidad?" q="Precio de venta ≥ 3× coste landed (producto + envío + aduana)." pass="markup ≥ 3x. Queda margen para CAC, devoluciones, comisiones y aún ganar." fail="markup < 2,5x. Los ads se comen el margen y trabajas para Meta, no para ti." note="Calcula el coste landed REAL: el producto puesto en tu almacén, no el precio del proveedor. Crúzalo con tu Breakeven ROAS (página de KPIs)." />
          <CritCard num="3" title="Problema o deseo intenso" sub="¿'lo necesito' o 'qué mono'?" q="¿Resuelve un dolor real o enciende un deseo fuerte e inmediato?" pass="produce un 'lo necesito' o un 'wow' de impulso. Hay urgencia o emoción." fail="es un 'estaría bien' tibio. Lo verán, asentirán y seguirán haciendo scroll." note="El tráfico frío de Meta o TikTok compra por impulso o por dolor agudo. Un producto 'agradable' sin intensidad emocional no para el pulgar." />
          <CritCard num="4" title="Ángulo diferenciador" sub="¿por qué a ti y no al de al lado?" q="¿Compites solo por precio, o tienes un ángulo defendible?" pass="mecanismo único, marca, bundle o una audiencia específica que nadie sirve bien." fail="idéntico a 40 tiendas y tu única arma es bajar el precio. Esa guerra la pierde el novato." note="No necesitas un producto único: necesitas un ÁNGULO único. El mismo producto con un público concreto, un mensaje afilado y una oferta mejor gana al genérico barato." />
          <CritCard num="5" title="Logística viable" sub="¿se puede entregar sin morir?" q="Peso, tamaño, fragilidad, legalidad y proveedor — ¿todo razonable?" pass="ligero, robusto, envío asequible, sin trabas legales y con proveedor fiable (y plan B)." fail="frágil, voluminoso, restringido por Meta o atado a un único proveedor sin alternativa." note="Lo frágil dispara devoluciones; lo voluminoso dispara el envío y mata el margen. Y si no puedes anunciarlo, da igual lo bueno que sea." />

          <div className="bg-gradient-to-br from-[#eefaf3] to-white border border-brand-tag-border rounded-xl p-4 my-3.5">
            <p className="text-[0.88rem] text-brand-text">
              <b className="text-brand-accent-dark font-semibold">Cómo se puntúa esta puerta:</b> cada criterio se responde con un sí rotundo, un "a medias" o un no. <b className="font-semibold">5 síes</b> → pasa a validar la oferta con dinero real (paso 5 del proceso). <b className="font-semibold">1-2 "a medias"</b> → viable, pero con deberes antes de invertir fuerte. <b className="font-semibold">Cualquier "no" en margen, demanda o legalidad</b> → descarte: son límites estructurales, no se arreglan con esfuerzo.
            </p>
          </div>
        </div>
      </section>

      <section id="v-s3" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">03 / Producto ganador vs producto trampa</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Aprende a leer las señales</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Dos productos pueden parecer igual de atractivos en la foto y ser negocios opuestos. El producto trampa es seductor porque esconde el problema donde no miras: margen, logística o saturación.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="rounded-xl p-4 bg-brand-panel border border-brand-tag-border">
              <h4 className="text-[0.95rem] mb-2 font-bold text-brand-accent-dark">Señales de producto ganador</h4>
              <ul className="list-none">
                {[
                  "<b>Resuelve algo concreto</b> que se explica en una frase y se entiende en la primera imagen.",
                  "<b>Markup de 3x o más</b> con un precio que el mercado ya acepta sin pestañear.",
                  "<b>Efecto 'demo'</b>: se ve funcionar en vídeo y el resultado es visible al instante.",
                  "<b>Competidores anunciando desde hace semanas</b> — si llevan tiempo gastando, es que vende.",
                  "<b>Permite recompra o gama</b>: consumibles, accesorios, versiones — hay LTV detrás.",
                  "<b>Ligero y robusto</b>: barato de enviar, difícil de romper, pocas devoluciones."
                ].map((item, i) => (
                  <li key={i} className="text-[0.81rem] text-brand-muted py-1.5 pl-4 relative border-b border-dashed border-brand-border last:border-0 before:content-['✓'] before:absolute before:left-0 before:text-brand-accent-dark before:font-bold" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-4 bg-brand-panel border border-brand-warn-border">
              <h4 className="text-[0.95rem] mb-2 font-bold text-brand-warn">Señales de producto trampa</h4>
              <ul className="list-none">
                {[
                  "<b>'Es que no hay competencia'</b> — casi siempre significa que no hay demanda.",
                  "<b>Margen apretado</b> que solo cuadra si todo sale perfecto y nadie devuelve.",
                  "<b>Necesita explicación larga</b> para entender por qué lo querrías. El tráfico frío no lee párrafos.",
                  "<b>Saturado e idéntico</b> a decenas de tiendas, sin más ángulo que el precio.",
                  "<b>Compra única sin recorrido</b>: lo vendes una vez y se acabó la relación.",
                  "<b>Frágil, voluminoso o restringido</b> por las normas de publicidad de Meta/TikTok."
                ].map((item, i) => (
                  <li key={i} className="text-[0.81rem] text-brand-muted py-1.5 pl-4 relative border-b border-dashed border-brand-border last:border-0 before:content-['✕'] before:absolute before:left-0 before:text-brand-warn before:font-bold" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="v-s4" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">04 / El proceso de validación en 7 pasos</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Cada paso es una barrera barata que protege al siguiente</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Este es el orden. No montes la tienda en el paso 1 — la tienda es de las últimas cosas, no de las primeras.</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-2.5">
            {[
              { n: "01", t: "Investiga la demanda", d: "Comprueba que ya existe interés real", h: "<b>Cómo:</b> Google Trends, volumen de búsqueda, Amazon, TikTok. ¿Sube, baja o es estable?" },
              { n: "02", t: "Analiza la competencia", d: "Quién vende y desde hace cuánto", h: "<b>Cómo:</b> Meta Ad Library + TikTok Creative Center. Un anuncio activo semanas = está vendiendo." },
              { n: "03", t: "Calcula la economía unitaria", d: "¿Hay negocio en los números?", h: "<b>Cómo:</b> coste landed, precio, margen, Breakeven ROAS. Si no cuadra aquí, no cuadra nunca." },
              { n: "04", t: "Define tu ángulo", d: "El mensaje, el público, la oferta", h: "<b>Cómo:</b> ¿a quién, con qué promesa y por qué a ti? Una frase que pare el scroll." },
              { n: "05", t: "Test de oferta con dinero real", d: "La prueba que de verdad cuenta", h: "<b>Cómo:</b> landing simple + 50-100 € de ads, o pre-venta / lista de espera. Que pongan email o tarjeta." },
              { n: "06", t: "Lee las señales", d: "Que hablen los datos, no tu ilusión", h: "<b>Cómo:</b> CTR, ATC, CR y CPA frente a tu Breakeven. ¿Avanzan, o solo miran?" },
              { n: "07", t: "Decide: dobla, pivota o mata", d: "Cierra con una decisión, no con un 'quizás'", h: "<b>Cómo:</b> señales buenas → escala. Mediocres → cambia el ángulo y repite 4-6. Malas → mata y libera." }
            ].map((s, i) => (
              <div key={i} className="bg-brand-panel border border-brand-border border-l-4 border-l-brand-accent rounded-lg p-3">
                <span className="text-[0.68rem] text-brand-accent-dark font-bold font-mono">{s.n}</span>
                <b className="block text-[0.9rem]">{s.t}</b>
                <i className="block text-brand-muted text-[0.77rem] not-italic my-0.5">{s.d}</i>
                <span className="text-[0.76rem] text-brand-text" dangerouslySetInnerHTML={{__html: s.h.replace('<b>', '<b class="text-brand-accent2 text-[0.76rem]">')}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="v-s5" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">05 / Criterios de descarte inmediato</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Banderas rojas que no se compensan con ganas</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">Si tu producto cae en alguna de estas, descártalo sin pena. Matar rápido una mala idea es una habilidad, no un fracaso.</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-2.5">
            {[
              { t: "✕ Margen por debajo de 2,5x", d: "No hay colchón para publicidad, devoluciones y comisiones. Trabajarás muchísimo para no ganar nada." },
              { t: "✕ Saturado y sin ángulo", d: "Lo venden decenas de tiendas igual y tu único movimiento es bajar el precio. Guerra perdida." },
              { t: "✕ Restricciones de publicidad", d: "Suplementos con claims de salud, CBD, contenido sensible… Si Meta/TikTok no te dejan anunciarlo, no hay tráfico." },
              { t: "✕ Frágil o muy voluminoso", d: "Roturas, devoluciones y envíos que se comen el margen. La logística lo mata antes de empezar." },
              { t: "✕ Sin urgencia ni deseo", d: "Nadie pierde el sueño por no tenerlo. El tráfico frío no compra 'estaría bien'; compra 'lo necesito ya'." },
              { t: "✕ Un solo proveedor sin plan B", d: "Si sube precios, rompe stock o desaparece, tu negocio entero depende de su buen día." },
              { t: "✕ Estacional puro sin plan anual", d: "Si solo se vende 6 semanas al año y no tienes qué hacer el resto, no es un negocio: es un pico." },
              { t: "✕ Caduca, regula o necesita licencia", d: "Alimentación, cosmética con normativa, certificaciones obligatorias. Verifica la legalidad ANTES, no después." }
            ].map((r, i) => (
              <div key={i} className="bg-brand-panel border border-brand-warn-border rounded-xl p-3">
                <b className="block text-[0.86rem] text-brand-warn mb-1">{r.t}</b>
                <span className="text-brand-muted text-[0.78rem]">{r.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="v-s6" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">06 / Scorecard de validación</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">Puntúa tu producto ahora — es interactivo</h2>
          <p className="text-brand-muted max-w-[780px] mb-3.5 text-[0.86rem]">0 = no · 1 = a medias · 2 = sí rotundo. Recuerda: no es una media, es una puerta. Un <b className="text-brand-text">0 en demanda, margen o logística/legalidad</b> es descarte directo aunque el total sea alto.</p>
          <Scorecard />
        </div>
      </section>

      <section id="v-s7" className="py-7">
        <div className="max-w-[1020px] mx-auto px-5">
          <span className="inline-block bg-brand-tag-bg border border-brand-tag-border text-brand-accent-dark text-[0.66rem] tracking-[0.2em] py-0.5 px-2.5 rounded uppercase font-bold font-mono">07 / Errores que arruinan la validación</span>
          <h2 className="text-[1.3rem] mt-2 mb-1 font-bold">La mayoría de validaciones no fallan por el producto, sino por cómo se validó</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-2.5">
            {[
              { t: "Enamorarte antes de validar", d: "Decides que es bueno y luego buscas datos que te den la razón. Eso no es validar, es justificar. Entra con la intención de tumbarlo." },
              { t: "Validar con amigos y familia", d: "'A mi círculo le encanta' no significa nada: te quieren y no van a pagar. Cuenta el desconocido que pone dinero o email." },
              { t: "Confundir 'me gusta' con 'lo compro'", d: "Los likes son gratis. La intención de compra se demuestra con una acción que cueste algo: pagar o dejar el contacto." },
              { t: "No calcular el margen REAL", d: "Olvidar envío, aduanas, devoluciones y pasarela. El margen de servilleta miente; manda el coste landed completo." },
              { t: "Matar el producto por una mala creatividad", d: "A veces lo que falló fue el ángulo o el anuncio. Antes de enterrarlo, prueba 2-3 ángulos distintos." },
              { t: "Validar eternamente sin lanzar", d: "El extremo opuesto: analizar sin parar para no arriesgar nunca. Llega un punto en que la única prueba que falta es vender de verdad." }
            ].map((e, i) => (
              <div key={i} className="bg-brand-panel border border-brand-border rounded-xl p-3">
                <b className="block text-[0.86rem] mb-1">{e.t}</b>
                <span className="text-brand-muted text-[0.78rem]">{e.d}</span>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#eefaf3] to-white border border-brand-tag-border rounded-xl p-4 mt-4.5">
            <p className="text-[0.88rem] text-brand-text">
              <b className="text-brand-accent-dark font-semibold">Siguiente paso:</b> no archives esta guía. Elige el producto que tienes en mente y pásalo por el scorecard de arriba. En 50 minutos sabrás más sobre su viabilidad que en semanas dándole vueltas. Cuando pase la puerta, mídelo con la <button onClick={() => onNavigate('kpis')} className="text-brand-accent2 hover:underline bg-transparent border-none cursor-pointer p-0 font-inherit text-[0.88rem]">página de KPIs</button>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
