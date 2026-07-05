// ─────────────────────────────────────────────────────────────
//  SITE COPY
//  Content that rarely changes (about, contact, hero copy).
//  Editable here for now; in phase 2 it can be promoted to the
//  Keystatic panel if the owners want to edit it themselves.
//  The product catalog is NOT here: it lives in
//  src/content/products/ and is managed from the panel.
//  NOTE: identifiers/keys are in English; visible copy is Spanish.
// ─────────────────────────────────────────────────────────────

export const site = {
  company: 'Ossinova Surgical Group S.L.',
  brand: 'Ossinova',

  hero: {
    // The title is split so the last word can be accented in brand color.
    title: 'Soluciones quirúrgicas para el cirujano',
    titleAccent: 'veterinario',
    subtitle:
      'Implantes, tornillos, instrumental y motores en titanio Ti-6Al-4V ELI, diseñados desde el quirófano para traumatología y neurocirugía de pequeños animales.',
    primaryCta: { label: 'Ver catálogo', anchor: '/catalogo' },
    secondaryCta: { label: 'Solicitar información', anchor: '#contact' },
  },

  about: {
    title: '¿Quiénes somos?',
    paragraphs: [
      'Ossinova Surgical Group es una empresa fundada en Elche (Alicante) por Jesús Agulló y Raquel Fernández, veterinarios clínicos en activo, dedicados a la medicina interna, cirugía, traumatología y neurocirugía de pequeños animales en un hospital veterinario.',
      'Ossinova nace directamente del quirófano, de la experiencia diaria, con el objetivo de desarrollar y ofrecer soluciones que respondan a las necesidades prácticas del cirujano veterinario. Cada producto que ofrecemos está pensado desde la perspectiva clínica, priorizando la funcionalidad, la fiabilidad y la facilidad de uso en el trabajo diario.',
      'Ofrecemos una gama completa de implantes y tornillos fabricados en titanio Ti-6Al-4V ELI (grado 23), desarrollados para proporcionar resistencia, ligereza y biocompatibilidad. Nuestro catálogo incluye todo tipo de instrumental quirúrgico y motores autoclavables tanto para traumatología como para neurocirugía.',
    ],
    goal: {
      title: 'Nuestro objetivo',
      text: 'Cubrir las necesidades de los veterinarios con diferentes opciones, orientado a todo tipo de cirujanos veterinarios de clínica, hospital o ambulantes, independientemente de su volumen de actividad.',
    },
  },

  // Trust bar shown right after the hero.
  trust: [
    {
      title: 'Titanio Ti-6Al-4V ELI',
      text: 'Implantes y tornillos en titanio grado 23: resistencia, ligereza y biocompatibilidad.',
    },
    {
      title: 'Diseñado desde el quirófano',
      text: 'Producto pensado por cirujanos veterinarios en activo, con criterio clínico real.',
    },
    {
      title: 'Renting flexible o venta',
      text: 'Larga duración, corta duración o compra: la opción que encaje con tu actividad.',
    },
  ],

  // Commercial modes section (renting long / short / sale).
  modes: {
    title: 'Modalidades',
    subtitle: 'Elige cómo quieres acceder al material según tu volumen de actividad.',
    items: [
      {
        key: 'rental-long',
        title: 'Renting larga duración',
        text: 'Dispón del material de forma continuada con una cuota periódica, sin necesidad de inversión inicial. Ideal para clínicas y hospitales con actividad quirúrgica regular.',
      },
      {
        key: 'rental-short',
        title: 'Renting corta duración',
        text: 'Alquila el instrumental o los motores solo para una cirugía o un periodo concreto. Perfecto para cirujanos ambulantes o intervenciones puntuales.',
      },
      {
        key: 'sale',
        title: 'Venta del material',
        text: 'Compra directa de implantes, tornillos e instrumental para incorporarlos a tu propio stock quirúrgico.',
      },
    ],
  },

  // Frequently asked questions (accordion).
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Resolvemos las dudas más habituales sobre renting, venta y material.',
    items: [
      {
        q: '¿Cómo funciona el renting de material quirúrgico?',
        a: 'Ponemos a tu disposición el material (implantes, tornillos, instrumental o motores) mediante una cuota, en modalidad de larga o corta duración. Nos encargamos del suministro para que puedas operar sin inmovilizar una gran inversión.',
      },
      {
        q: '¿Qué diferencia hay entre renting de larga y de corta duración?',
        a: 'El renting de larga duración es para actividad quirúrgica continuada, con una cuota periódica. El de corta duración cubre una cirugía o un periodo puntual, ideal para cirujanos ambulantes o intervenciones concretas.',
      },
      {
        q: '¿Puedo comprar el material en lugar de alquilarlo?',
        a: 'Sí. Ofrecemos la venta directa de todo el catálogo para que lo incorpores a tu propio stock. Cuéntanos qué necesitas y te preparamos un presupuesto a medida.',
      },
      {
        q: '¿De qué material están fabricados los implantes y tornillos?',
        a: 'Nuestros implantes y tornillos se fabrican en titanio Ti-6Al-4V ELI (grado 23), que aporta resistencia, ligereza y biocompatibilidad. El instrumental y los motores son autoclavables.',
      },
      {
        q: '¿A qué tipo de clientes os dirigís?',
        a: 'A todo tipo de cirujanos veterinarios, ya sean de clínica, hospital o ambulantes, independientemente de su volumen de actividad.',
      },
    ],
  },

  contact: {
    title: 'Contacto',
    text: 'Cuéntanos qué necesitas y te preparamos una propuesta a medida (renting o venta).',
    email: 'info@ossinova.com',
    // International format, no symbols, for the WhatsApp link.
    whatsapp: '34600000000',
    phone: '+34 600 00 00 00',
    city: 'Elche, Alicante (España)',
    instagram: 'https://www.instagram.com/ossinovasurgical',
    instagramHandle: '@ossinovasurgical',
    // Google Apps Script URL (ends in /exec) that stores form submissions in
    // a Google Sheet. While empty, the form shows a notice and is disabled.
    // See google-apps-script/README.md for the setup steps.
    formUrl: '',
  },
} as const;

// Human-readable labels for the commercial modes (Spanish, user-facing).
export const MODE_LABEL: Record<string, string> = {
  'rental-long': 'Renting larga duración',
  'rental-short': 'Renting corta duración',
  sale: 'Venta',
};

// Human-readable labels for the catalog categories (Spanish, user-facing).
export const CATEGORY_LABEL: Record<string, string> = {
  implants: 'Implantes',
  screws: 'Tornillos',
  neurosurgery: 'Neurocirugía',
  motors: 'Motores',
  accessories: 'Accesorios',
};

// Short description shown under each category card.
export const CATEGORY_DESC: Record<string, string> = {
  implants: 'Placas de osteosíntesis y sistemas de fijación en titanio.',
  screws: 'Tornillos corticales, de bloqueo y esponjosos.',
  neurosurgery: 'Instrumental específico para procedimientos de neurocirugía.',
  motors: 'Motores quirúrgicos autoclavables de alta precisión.',
  accessories: 'Instrumental y accesorios complementarios de quirófano.',
};

// URL slug (Spanish) for each category. Used for the catalog routes.
export const CATEGORY_SLUG: Record<string, string> = {
  implants: 'implantes',
  screws: 'tornillos',
  neurosurgery: 'neurocirugia',
  motors: 'motores',
  accessories: 'accesorios',
};

// Resolve a category key from its Spanish URL slug (reverse of CATEGORY_SLUG).
export function categoryFromSlug(slug: string): string | undefined {
  return Object.keys(CATEGORY_SLUG).find((key) => CATEGORY_SLUG[key] === slug);
}

// Order in which categories are shown in the catalog.
export const CATEGORY_ORDER = [
  'implants',
  'screws',
  'neurosurgery',
  'motors',
  'accessories',
] as const;
