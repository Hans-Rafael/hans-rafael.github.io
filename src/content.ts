export type Lang = 'es' | 'en';

export const EMAIL = 'contact@hans-rafael.dev';

export const links = {
  github: 'https://github.com/Hans-Rafael',
  gist: 'https://gist.github.com/Hans-Rafael',
  behance: 'https://www.behance.net/hans-rafael',
  qa: 'https://github.com/Hans-Rafael/QA-Projects',
  linkedin: 'https://www.linkedin.com/in/hans-developer',
};

export const projects = [
  {
    key: 'ecommerce',
    repo: 'https://github.com/Hans-Rafael/Henry-Final-project',
    demo: 'https://www.youtube.com/watch?v=eQ-MdQsoIGs',
    tech: ['TypeScript', 'React', 'Redux', 'Node.js', 'Sequelize', 'Stripe', 'PostgreSQL'],
  },
  {
    key: 'defi',
    repo: 'https://github.com/Hans-Rafael/Simple-DeFi-Yield-Farming',
    tech: ['Solidity', 'Hardhat', 'Ethereum'],
  },
  {
    key: 'micro',
    repo: 'https://github.com/Hans-Rafael/Microservicios',
    tech: ['Docker', 'MongoDB Atlas', 'Google Cloud'],
  },
  {
    key: 'dogs',
    repo: 'https://github.com/Hans-Rafael/PI-Dogs',
    tech: ['React', 'Redux', 'Express', 'PostgreSQL'],
  },
] as const;

export const stack = [
  'React',
  'React Native',
  'TypeScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Solidity',
  'Hardhat',
  'Docker',
  'Figma',
  'Jira',
  'Postman',
];

export const content = {
  es: {
    htmlLang: 'es',
    skip: 'Saltar al contenido',
    name: 'Hans Garcia',
    roles: 'Full Stack · UX/UI · QA',
    letterLabel: 'Carta de presentación',
    salutation: 'Hola, bienvenido/a:',
    intro: [
      'Soy Hans, un profesional híbrido que construye, diseña y prueba software de extremo a extremo. Mi base está en el stack PERN (PostgreSQL, Express, React, Node), con experiencia sólida en MERN y en arquitecturas blockchain sobre Ethereum.',
      'Esa mezcla me permite hacer un QA más profundo: no me quedo en el síntoma del error, busco la causa raíz en el código y en la arquitectura, y lo hago pensando en una experiencia de uso clara. Hoy aplico ese enfoque como QA Tester, con formación Full Stack (Henry) y de Quality Assurance (Talento Tech).',
    ],
    facts: ['Buenos Aires, Argentina', 'Remoto · LATAM', 'ES · EN · PT'],
    now: 'QA Tester en Talento Tech (2025–presente)',
    projectsTitle: 'Proyectos destacados',
    projectsIntro: 'Algo de lo que he construido de punta a punta:',
    projectItems: {
      ecommerce: {
        title: 'E-commerce de ropa deportiva',
        text: 'Tienda con catálogo, carrito de compras y pagos con Stripe. Trabajo en equipo con flujo de Git y Scrum. Front en Vercel y back en Heroku.',
      },
      defi: {
        title: 'Simple DeFi Yield Farming',
        text: 'DApp para hacer staking de tokens LP y ganar recompensas en DAppTokens, según monto y tiempo de permanencia.',
      },
      micro: {
        title: 'Microservicios con Docker',
        text: 'Arquitectura de microservicios con MongoDB Atlas, contenedores Docker orquestados con Compose y despliegue en una VM de Google Cloud.',
      },
      dogs: {
        title: 'PI-Dogs',
        text: 'App de razas de perros con búsqueda, filtros, orden y alta de nuevas razas, consumiendo la API externa The Dog API.',
      },
    },
    repoLabel: 'Código',
    demoLabel: 'Ver demo',
    resultsTitle: 'En números (QA)',
    results: [
      { n: '50+', l: 'casos de prueba diseñados y ejecutados' },
      { n: '30+', l: 'defectos reportados con pasos claros' },
      { n: '20+', l: 'endpoints REST validados con Postman' },
    ],
    areasTitle: 'En qué puedo ayudarte',
    areas: [
      {
        key: 'dev',
        title: 'Desarrollo Full Stack & Web3',
        text: 'Aplicaciones web y móviles con React y Node, microservicios con Docker y DApps en Ethereum (Solidity).',
        cta: 'Ver proyectos en GitHub',
        href: links.github,
        extra: { label: 'Gists', href: links.gist },
      },
      {
        key: 'ux',
        title: 'Diseño UX/UI',
        text: 'Wireframes y prototipos en Figma para web y mobile, con foco en que lo funcional también sea agradable de usar.',
        cta: 'Ver portafolio en Behance',
        href: links.behance,
      },
      {
        key: 'qa',
        title: 'QA & Testing',
        text: 'Pruebas funcionales y de API, gestión de defectos y casos en Jira y Zephyr, trabajo en equipos Scrum.',
        cta: 'Ver proyectos de QA',
        href: links.qa,
      },
    ],
    stackTitle: 'Herramientas con las que trabajo',
    closing: [
      'Si tienes un proyecto, una vacante o simplemente quieres conversar, me encantará leerte.',
    ],
    regards: 'Un cordial saludo,',
    ctaEmail: 'Escríbeme',
    ctaLinkedin: 'LinkedIn',
    copy: 'Copiar email',
    copied: 'Email copiado al portapapeles',
    print: 'Descargar PDF',
    theme: 'Cambiar tema',
    langSwitch: 'English',
    langSwitchLabel: 'Switch to English',
    external: '(se abre en una pestaña nueva)',
    footer: 'Hecho con React y mucho café.',
  },
  en: {
    htmlLang: 'en',
    skip: 'Skip to content',
    name: 'Hans Garcia',
    roles: 'Full Stack · UX/UI · QA',
    letterLabel: 'Cover letter',
    salutation: 'Hello, and welcome:',
    intro: [
      "I'm Hans, a hybrid professional who builds, designs and tests software end to end. My foundation is the PERN stack (PostgreSQL, Express, React, Node), with solid experience in MERN and in Ethereum-based blockchain architectures.",
      "That mix lets me do deeper QA: I don't stop at the symptom, I look for the root cause in the code and the architecture, always with a clear user experience in mind. Today I apply that approach as a QA Tester, with Full Stack (Henry) and Quality Assurance (Talento Tech) training.",
    ],
    facts: ['Buenos Aires, Argentina', 'Remote · LATAM', 'ES · EN · PT'],
    now: 'QA Tester at Talento Tech (2025–present)',
    projectsTitle: 'Featured projects',
    projectsIntro: "A few things I've built end to end:",
    projectItems: {
      ecommerce: {
        title: 'Sportswear e-commerce',
        text: 'Store with catalog, shopping cart and Stripe payments. Built as a team with Git workflow and Scrum. Front on Vercel, back on Heroku.',
      },
      defi: {
        title: 'Simple DeFi Yield Farming',
        text: 'DApp to stake LP tokens and earn DAppToken rewards based on the amount staked and how long they are held.',
      },
      micro: {
        title: 'Microservices with Docker',
        text: 'Microservices architecture on MongoDB Atlas, Docker containers orchestrated with Compose, deployed on a Google Cloud VM.',
      },
      dogs: {
        title: 'PI-Dogs',
        text: 'Dog breeds app with search, filtering, sorting and adding new breeds, using the external The Dog API.',
      },
    },
    repoLabel: 'Code',
    demoLabel: 'Watch demo',
    resultsTitle: 'By the numbers (QA)',
    results: [
      { n: '50+', l: 'test cases designed and executed' },
      { n: '30+', l: 'defects reported with clear repro steps' },
      { n: '20+', l: 'REST endpoints validated with Postman' },
    ],
    areasTitle: 'How I can help',
    areas: [
      {
        key: 'dev',
        title: 'Full Stack & Web3 development',
        text: 'Web and mobile apps with React and Node, Docker-based microservices and Ethereum DApps (Solidity).',
        cta: 'See projects on GitHub',
        href: links.github,
        extra: { label: 'Gists', href: links.gist },
      },
      {
        key: 'ux',
        title: 'UX/UI design',
        text: 'Wireframes and prototypes in Figma for web and mobile, making sure what works is also pleasant to use.',
        cta: 'See portfolio on Behance',
        href: links.behance,
      },
      {
        key: 'qa',
        title: 'QA & Testing',
        text: 'Functional and API testing, defect and test-case management with Jira and Zephyr, Scrum team workflow.',
        cta: 'See QA projects',
        href: links.qa,
      },
    ],
    stackTitle: 'Tools I work with',
    closing: [
      "If you have a project, an opening, or just want to chat, I'd love to hear from you.",
    ],
    regards: 'Kind regards,',
    ctaEmail: 'Write to me',
    ctaLinkedin: 'LinkedIn',
    copy: 'Copy email',
    copied: 'Email copied to clipboard',
    print: 'Download PDF',
    theme: 'Toggle theme',
    langSwitch: 'Español',
    langSwitchLabel: 'Cambiar a español',
    external: '(opens in a new tab)',
    footer: 'Built with React and lots of coffee.',
  },
} as const;
