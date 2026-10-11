import { useEffect, useRef, useState } from 'react';
import Avatar from './components/Avatar';
import { content, EMAIL, links, stack, type Lang } from './content';
import './assets/styles.css';

type Theme = 'light' | 'dark';

const safeGet = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const safeSet = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* almacenamiento no disponible */
  }
};

const initialLang = (): Lang => {
  const saved = safeGet('lang');
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
};

const initialTheme = (): Theme => {
  const saved = safeGet('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Arrow = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
    <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [toast, setToast] = useState('');
  const toastTimer = useRef<number | undefined>(undefined);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    safeSet('lang', lang);
  }, [lang, t.htmlLang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    safeSet('theme', theme);
  }, [theme]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast(t.copied);
      window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setToast(''), 2800);
    } catch {
      /* sin permiso de portapapeles: el enlace mailto sigue funcionando */
    }
  };

  const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

  return (
    <>
      <a className="skip" href="#carta">{t.skip}</a>

      <div className="toolbar" role="toolbar" aria-label="Preferences">
        <button type="button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t.langSwitchLabel} lang={lang === 'es' ? 'en' : 'es'}>
          {t.langSwitch}
        </button>
        <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.theme} aria-pressed={theme === 'dark'}>
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
            <path d="M16.5 12.2A7 7 0 0 1 7.8 3.5a7 7 0 1 0 8.7 8.7Z" fill="currentColor" />
          </svg>
        </button>
        <button type="button" onClick={() => window.print()}>{t.print}</button>
      </div>

      <main className="page">
        <article className="letter" id="carta" aria-labelledby="name">
          <header className="letterhead">
            <Avatar alt={t.name} />
            <div>
              <p className="eyebrow">{t.letterLabel}</p>
              <h1 id="name">{t.name}</h1>
              <p className="roles">{t.roles}</p>
            </div>
          </header>

          <p className="salutation">{t.salutation}</p>

          {t.intro.map((p) => (
            <p key={p} className="body">{p}</p>
          ))}

          <section aria-labelledby="areas">
            <h2 id="areas">{t.areasTitle}</h2>
            <ul className="areas">
              {t.areas.map((a) => (
                <li key={a.key} className={`area area--${a.key}`}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <div className="area-links">
                    <a href={a.href} {...ext}>
                      {a.cta} <Arrow /><span className="sr">{t.external}</span>
                    </a>
                    {'extra' in a && a.extra && (
                      <a href={a.extra.href} {...ext}>
                        {a.extra.label} <Arrow /><span className="sr">{t.external}</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="stack">
            <h2 id="stack">{t.stackTitle}</h2>
            <ul className="chips">
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          {t.closing.map((p) => (
            <p key={p} className="body closing">{p}</p>
          ))}

          <div className="cta">
            <a className="btn btn--primary" href={`mailto:${EMAIL}`}>{t.ctaEmail}</a>
            <a className="btn" href={links.linkedin} {...ext}>
              {t.ctaLinkedin} <Arrow /><span className="sr">{t.external}</span>
            </a>
            <button type="button" className="btn btn--ghost" onClick={copyEmail}>
              {t.copy}
            </button>
          </div>

          <footer className="signoff">
            <p>{t.regards}</p>
            <p className="signature" aria-hidden="true">Hans Garcia</p>
            <p className="email">{EMAIL}</p>
          </footer>
        </article>

        <p className="foot">{t.footer}</p>
      </main>

      <div className="toast" role="status" aria-live="polite">{toast}</div>
    </>
  );
}
