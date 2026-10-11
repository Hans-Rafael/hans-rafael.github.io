export type Lang = 'es' | 'en';

export const EMAIL = 'contact@hans-rafael.dev';
export const SITE = 'https://hans-rafael.dev/';

export type LinkItem = { label: string; note?: string; href: string; tone: string };
export type Group = { title: string; items: LinkItem[]; chips?: { label: string; href: string }[] };

const gh = 'https://github.com/Hans-Rafael';

export const content = {
  es: {
    skip: 'Saltar al contenido',
    name: 'Hans Garcia',
    roles: ['Full Stack Developer', 'UX/UI Designer', 'QA Tester'],
    status: 'Disponible · Remoto y LATAM',
    location: 'Buenos Aires, Argentina',
    languages: 'Español · English · Português',
    flip: 'Dar vuelta la tarjeta',
    flipHint: 'Toca la tarjeta para darla vuelta',
    copyHint: 'Toca el correo para copiarlo',
    back: 'Contacto',
    save: 'Guardar contacto',
    copy: 'Copiar email',
    copied: 'Email copiado al portapapeles',
    copyFail: 'No se pudo copiar. Escríbeme a',
    copyEmailAria: 'Copiar email al portapapeles',
    flipBack: 'Volver al frente',
    theme: 'Cambiar tema',
    langSwitch: 'English',
    langSwitchLabel: 'Switch to English',
    external: '(se abre en una pestaña nueva)',
    footer: 'Hecho con React y mucho café.',
    groups: [
      {
        title: 'Proyectos',
        items: [
          { label: 'GitHub', note: 'Todos mis repositorios', href: `${gh}?tab=repositories`, tone: 'gh' },
          { label: 'Gists', note: 'Snippets y pruebas', href: 'https://gist.github.com/Hans-Rafael', tone: 'gist' },
        ],
        chips: [
          { label: 'E-commerce deportivo', href: `${gh}/Henry-Final-project` },
          { label: 'DeFi Yield Farming', href: `${gh}/Simple-DeFi-Yield-Farming` },
          { label: 'Microservicios', href: `${gh}/Microservicios` },
          { label: 'PI-Dogs', href: `${gh}/PI-Dogs` },
        ],
      },
      {
        title: 'Diseño y calidad',
        items: [
          { label: 'Behance', note: 'Portafolio UX/UI web y mobile', href: 'https://www.behance.net/hans-rafael', tone: 'be' },
          { label: 'QA Projects', note: 'Casos de prueba, bugs y API', href: `${gh}/QA-Projects`, tone: 'qa' },
        ],
      },
      {
        title: 'Hablemos',
        items: [
          { label: 'LinkedIn', note: 'Experiencia y recomendaciones', href: 'https://www.linkedin.com/in/hans-developer', tone: 'in' },
          { label: 'Email', note: EMAIL, href: `mailto:${EMAIL}`, tone: 'mail' },
        ],
      },
    ] as Group[],
  },
  en: {
    skip: 'Skip to content',
    name: 'Hans Garcia',
    roles: ['Full Stack Developer', 'UX/UI Designer', 'QA Tester'],
    status: 'Available · Remote & LATAM',
    location: 'Buenos Aires, Argentina',
    languages: 'Español · English · Português',
    flip: 'Flip the card',
    flipHint: 'Tap the card to flip it',
    copyHint: 'Tap the email to copy it',
    back: 'Contact',
    save: 'Save contact',
    copy: 'Copy email',
    copied: 'Email copied to clipboard',
    copyFail: "Couldn't copy. Write me at",
    copyEmailAria: 'Copy email to clipboard',
    flipBack: 'Back to front',
    theme: 'Toggle theme',
    langSwitch: 'Español',
    langSwitchLabel: 'Cambiar a español',
    external: '(opens in a new tab)',
    footer: 'Built with React and lots of coffee.',
    groups: [
      {
        title: 'Projects',
        items: [
          { label: 'GitHub', note: 'All my repositories', href: `${gh}?tab=repositories`, tone: 'gh' },
          { label: 'Gists', note: 'Snippets and experiments', href: 'https://gist.github.com/Hans-Rafael', tone: 'gist' },
        ],
        chips: [
          { label: 'Sportswear e-commerce', href: `${gh}/Henry-Final-project` },
          { label: 'DeFi Yield Farming', href: `${gh}/Simple-DeFi-Yield-Farming` },
          { label: 'Microservices', href: `${gh}/Microservicios` },
          { label: 'PI-Dogs', href: `${gh}/PI-Dogs` },
        ],
      },
      {
        title: 'Design & quality',
        items: [
          { label: 'Behance', note: 'UX/UI web and mobile portfolio', href: 'https://www.behance.net/hans-rafael', tone: 'be' },
          { label: 'QA Projects', note: 'Test cases, bugs and API', href: `${gh}/QA-Projects`, tone: 'qa' },
        ],
      },
      {
        title: "Let's talk",
        items: [
          { label: 'LinkedIn', note: 'Experience and recommendations', href: 'https://www.linkedin.com/in/hans-developer', tone: 'in' },
          { label: 'Email', note: EMAIL, href: `mailto:${EMAIL}`, tone: 'mail' },
        ],
      },
    ] as Group[],
  },
} as const;

export const vcard = (lang: Lang) =>
  [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Garcia;Hans;;;',
    'FN:Hans Garcia',
    `TITLE:${content[lang].roles.join(' / ')}`,
    `EMAIL;TYPE=INTERNET:${EMAIL}`,
    `URL:${SITE}`,
    'URL:https://www.linkedin.com/in/hans-developer',
    'ADR;TYPE=WORK:;;;Buenos Aires;;;Argentina',
    'END:VCARD',
  ].join('\r\n');
