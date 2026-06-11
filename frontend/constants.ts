export type Tool = {
  name: string;
  url: string;
  desc: string;
  pill?: string;
};

export type ToolGroup = {
  title: string;
  tools: Tool[];
};

export const KIT_DATA: { day: string; title: string; lead: string; groups: ToolGroup[] }[] = [
  {
    day: "Día 1",
    title: "Producto, proveedores y tu tienda",
    lead: "La base. Antes de gastar un euro en anuncios: un producto que aguante el filtro, un proveedor fiable detrás y una tienda montada que convierta.",
    groups: [
      {
        title: "Tendencias & investigación de producto",
        tools: [
          { name: "Exploding Topics", url: "https://explodingtopics.com/", desc: "Detecta tendencias emergentes antes de que exploten. Plan gratuito útil; busca crecimientos de +200–500%." },
          { name: "Google Trends", url: "https://trends.google.es/trends/", desc: "Valida interés y estacionalidad de un término antes de apostar por él. Compara países y palabras clave." },
          { name: "Claude", url: "https://claude.ai/new", desc: "Chat de IA para buscar y validar productos en tendencia aplicando los 4 criterios del método." },
          { name: "Asesor de Producto (GPT)", url: "https://chatgpt.com/g/g-677cf83ee66c81919fe7401c63b267ca-asesor-de-producto", desc: "GPT que guía la elección y el análisis de producto: demanda, cliente ideal, objeciones y ángulo de marketing." }
        ]
      },
      {
        title: "Proveedores & sourcing",
        tools: [
          { name: "Alibaba", url: "https://www.alibaba.com/", desc: "Fabricantes y compra al por mayor. Filtra por proveedor verificado, MOQ y valoraciones. Pide muestras SIEMPRE antes de un pedido grande." },
          { name: "AutoDS", url: "https://www.autods.com/", desc: "Automatiza el dropshipping conectado a Shopify. Úsalo para validar, no como modelo final." },
          { name: "Global Sources", url: "https://www.globalsources.com/", desc: "Directorio de proveedores verificados, fuerte en electrónica y fabricantes grandes." },
          { name: "Made-in-China", url: "https://www.made-in-china.com/", desc: "Alternativa a Alibaba para comparar precios y pedidos mínimos." },
          { name: "1688", url: "https://www.1688.com/", desc: "Mercado mayorista interno de China, precios por debajo de Alibaba. Todo en chino: usa el traductor del navegador." },
          { name: "Ankorstore", url: "https://www.ankorstore.com/", desc: "Mayorista europeo de marcas. Ideal si buscas producto de marca en Europa." },
          { name: "Faire", url: "https://www.faire.com/", desc: "Marketplace mayorista de marcas independientes para reabastecer la tienda." },
          { name: "ImportYeti", url: "https://www.importyeti.com/", desc: "Descubre los proveedores reales de las grandes marcas a partir de registros de importación." }
        ]
      },
      {
        title: "Branding, packaging & importación",
        tools: [
          { name: "Plantilla Branding y Packaging · Magnific", url: "https://www.magnific.com/app/spaces/a10a4d72-c2ef-43d3-a711-b3d8a48dce7c/invite?payload=eyJpdiI6ImF3UGE5QU1zSGpXTUpZUnhUSk5qSkE9PSIsInZhbHVlIjoieVFnNFJ3M3hPbm16dEtzMGdvYjdvZXhtZjNCQUIwZFUrUnJkTVJDb3g2VzBOSGdhVGE1SnFVVi9UdFdzc1Nja0hrN1RPSFNlMnhvWVFwWjJ5b1RUK016QTJtMzVNUU9qR21YL3dQakJUWDMzS05ONnlFOHhyU1VPdHdoRGxQZFIiLCJtYWMiOiJkNDhkOWJmMzllOTU4Njk0ODU1NzE1NDBhNjU1MjI3ZDkzNWM4YTVkNzM5OWVhMmJkNjliZjg2NzI1MzY4OGJmIiwidGFnIjoiIn0%3D", desc: "Espacio compartido para generar identidad de marca, logo y packaging con IA. Duplica la plantilla a tu plan antes de usarla." },
          { name: "Freightos", url: "https://ship.freightos.com/", desc: "Cotiza y gestiona el flete internacional (marítimo/aéreo) de fábrica a tu almacén, como quien reserva un vuelo." },
          { name: "Skymetrics", url: "https://skymetrics.co/", desc: "Métricas y seguimiento para la operación." }
        ]
      },
      {
        title: "Tu tienda · Shopify",
        tools: [
          { name: "Shopify · enlace Partner", url: "https://shopify.pxf.io/3Je0vB", desc: "Monta la tienda con el enlace de Shopify Partner del directo: 3 meses por 1 €.", pill: "3 meses · 1€" },
          { name: "Shopify AI Store Builder", url: "https://www.shopify.com/tools/ai-store-builder", desc: "Describe el negocio y genera el esqueleto de la tienda con IA en minutos (3 plantillas gratuitas por petición)." },
          { name: "Shopify Sidekick", url: "https://www.shopify.com/es-es/sidekick", desc: "Asistente de IA dentro de Shopify: edita diseño, mejora fotos, redacta descripciones y analiza métricas." }
        ]
      }
    ]
  },
  {
    day: "Día 2",
    title: "Tráfico, creatividades y marketing",
    lead: "Ya hay tienda y producto. Ahora: traer clientes y exprimir cada uno — estrategia, research, creatividades que venden y el stack para fidelizar.",
    groups: [
      {
        title: "Estrategia & ejercicios",
        tools: [
          { name: "Miro · board del ejercicio", url: "https://miro.com/app/board/uXjVK6kjNyc=/?share_link_id=139876630586", desc: "El tablero colaborativo del ejercicio de la clase 2." },
          { name: "GPT · Plan de Marketing", url: "https://chatgpt.com/g/g-69d3faf089788191b8d3f94626640651-plan-de-marketing-efectivo", desc: "Construye el plan de marketing de 9 pasos: avatar, mensaje, canales, leads, conversión, fidelización, embajadores." }
        ]
      },
      {
        title: "Research & analítica",
        tools: [
          { name: "Semrush", url: "https://semrush.com", desc: "Investigación de keywords, competencia y SEO." },
          { name: "Metricool", url: "https://metricool.com", desc: "Planifica, programa y analiza redes sociales desde un único calendario. Plan gratuito muy completo." },
          { name: "Microsoft Clarity", url: "https://clarity.microsoft.com/", desc: "Gratuita. Mapas de calor y grabaciones de sesión para optimizar la conversión de tu Shopify." }
        ]
      },
      {
        title: "Creatividades & Ads",
        tools: [
          { name: "100 Ads del TOP 1% · Figma", url: "https://www.figma.com/design/AK8LoxKgdKsbnWFHFItpWA/100-ADS-DEL-TOP-1%25-(Copy)?node-id=0-1&t=piX1lO3g6sUN79EN-1", desc: "Biblioteca de los mejores anuncios del e-commerce para inspirar creatividades." },
          { name: "Ads · Freepik Pikaso", url: "https://www.freepik.com/pikaso/spaces/a10a4ef3-08f5-417e-be9c-16775f120e14/invite?payload=eyJpdiI6Ikk1YlNTOHMzek5YcVQxN1U3NC9TNGc9PSIsInZhbHVlIjoiRWVrZWpYc2xjUXlwMC92cVlJa1hHaEpXZFJzMFBMRzBMcVhqb2l2L3NoNExWVWhCQWlSeTJyeE94dHFUOGNmZkxOamtpdGdIYWI1Y2xaU2U4eWhhYmpmQUprVWlhOTErWnB3UkJLTkJVS3dQVENNT2owaTVQTGNJYmVvM3RtSXUiLCJtYWMiOiI5MjA2NWE4ODliYTQ5ODJjNDhmNWUwZTQyMDE3MWNkZDllYjJhMjc3YmIxZTQzYjM0ZjU3NTYzMWJmODJkZDU3IiwidGFnIjoiIn0%3D", desc: "Espacio compartido para generar creatividades de anuncios (estáticas, banners, formatos RRSS)." },
          { name: "Vídeo UGC · Freepik Pikaso", url: "https://www.freepik.com/pikaso/spaces/a17b2bfa-330e-4c1e-979f-b3e12f83f42e/invite?payload=eyJpdiI6Ilk3U1BWNzlFbVhFTVUyM25JVVMxL1E9PSIsInZhbHVlIjoiMTNxSXBNK2M0ZVcrTzNhT29CZmVoWmxnSG5RbStJRHRUNWRNVE5DM1BiTzlHaXk2d2RqTjVFL1dCVVlRclZHVkJIUzJFKzVhLzNHRWpUbWFncW12Q040L2w0bXlvQmxZcEhoMVNnQXRjZmpKQlhOdlV6N05CMjNsZDNzUjNUdDgiLCJtYWMiOiI2NDRmZDE3Y2U2N2E0OTYxODQ4NGMwOTYyZTMxYTcyNTJhNTYyZTg5YzE5YWJiMDgwZjgxNzU2MTY5YjU5NGEyIiwidGFnIjoiIn0%3D", desc: "Espacio para generar vídeos UGC con personajes 100% IA para campañas." },
          { name: "Social Media · Freepik Pikaso", url: "https://www.freepik.com/pikaso/spaces/a10a58b9-c5f7-4b69-9432-65f68668b022/invite?payload=eyJpdiI6Im85cFQvZ3RTalhFdnNhUTh5dzJpVlE9PSIsInZhbHVlIjoiSXFCTTVDcmh6OGRFSzFMcXNPZWNiVWh6ejE4T2swTm5GbHFVZnl2T1FlWFBWMnlMeTI2OUNQM1p6cHZBam5LY1hCQllhc3JQckdZRFBnM0hKSGExZzBoWUtOQkFXYnlCdWh3bGlKWUppQVRjbytrQ1VmbXJZb0tjV0VQZUUxTysiLCJtYWMiOiJlYjBjM2NhMzMyYzZiYjNkNGFjMGQ1MmNlZDlmMmQ1YzYxNzAzMzYzNmU1Mzg3MjI4YWRmN2JjODVmMGM0ZDVhIiwidGFnIjoiIn0%3D", desc: "Espacio de creatividades para redes sociales (posts, captions, campañas de imagen)." }
        ]
      },
      {
        title: "Ejemplos del webinar (Figma)",
        tools: [
          { name: "Nude Project · funnel completo", url: "https://www.figma.com/design/dt70ktMz3agpuob9CnB5QY/NUDEPROJECT-WEBINAR?node-id=0-1&t=IrafW3Wy873qKMds-1", desc: "Caso analizado en el webinar: tráfico pagado + orgánico, tienda, carrito abandonado, newsletter y lanzamientos." },
          { name: "Twojeys · funnel completo", url: "https://www.figma.com/design/GwDUf3WCzVkb1RpcKZPXFT/TWOJEYS-WEBINAR?t=xfzwTlaWMLyj4DYY-1", desc: "Segundo caso: misma estructura de captación → conversión → retención aplicada a joyería." }
        ]
      },
      {
        title: "Encuestas, reseñas & social proof",
        tools: [
          { name: "Trustpilot", url: "https://www.trustpilot.com/", desc: "Reseñas verificadas y reputación. Automatiza la solicitud post-compra." },
          { name: "Yotpo", url: "https://www.yotpo.com/", desc: "Solicitud de reseñas automatizada, fotos y UGC de clientes para la tienda." },
          { name: "Okendo", url: "https://www.okendo.com/", desc: "Reseñas, encuestas y perfiles de cliente para generar social proof y fidelizar." }
        ]
      },
      {
        title: "Experiencia: segmentación, flows & fidelización",
        tools: [
          { name: "Klaviyo", url: "https://www.klaviyo.com/", desc: "Email & SMS: bienvenida, carrito abandonado, post-compra. El email es el canal más rentable del e-commerce." },
          { name: "Duel", url: "https://www.duel.tech/", desc: "Programa de advocacy y fidelización a escala — la herramienta de Tropicfeel y Scalpers." }
        ]
      },
      {
        title: "Atención al cliente (IA)",
        tools: [
          { name: "Gorgias", url: "https://www.gorgias.com/", desc: "Helpdesk para e-commerce: respuestas automáticas con IA que resuelven dudas y venden, 24/7." },
          { name: "Tidio", url: "https://www.tidio.com/", desc: "Chat y agente IA (Lyro) que automatiza la mayor parte del soporte." }
        ]
      },
      {
        title: "Email marketing · inspiración",
        tools: [
          { name: "Milled", url: "https://milled.com/", desc: "El mayor buscador de emails de e-commerce. Mira qué envían las marcas top." },
          { name: "Really Good Emails", url: "https://reallygoodemails.com/", desc: "Biblioteca con miles de emails reales para inspirar campañas y plantillas." }
        ]
      }
    ]
  }
];
