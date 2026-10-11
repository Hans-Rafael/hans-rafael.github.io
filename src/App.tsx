import { useEffect, useRef, useState } from 'react';
import Avatar from './components/Avatar';
import { content, EMAIL, vcard, type Lang } from './content';
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
  const [flipped, setFlipped] = useState(false);
  const [toast, setToast] = useState({ msg: '', show: false, error: false });
  const toastTimer = useRef<number | undefined>(undefined);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    safeSet('lang', lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    safeSet('theme', theme);
  }, [theme]);

  const notify = (msg: string, error = false) => {
    setToast({ msg, show: true, error });
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast((x) => ({ ...x, show: false })), 3200);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      notify(t.copied);
    } catch {
      notify(`${t.copyFail} ${EMAIL}`, true);
    }
  };

  const saveContact = () => {
    const url = URL.createObjectURL(new Blob([vcard(lang)], { type: 'text/vcard;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Hans-Garcia.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

  return (
    <>
      <a className="skip" href="#links">{t.skip}</a>

      <div className="toolbar" role="toolbar" aria-label="Preferences">
        <button type="button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t.langSwitchLabel} lang={lang === 'es' ? 'en' : 'es'}>
          {t.langSwitch}
        </button>
        <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.theme} aria-pressed={theme === 'dark'}>
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
            <path d="M16.5 12.2A7 7 0 0 1 7.8 3.5a7 7 0 1 0 8.7 8.7Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      <main className="page">
        <section className="stage" aria-label={t.name}>
          <div className="cardwrap">
            <div className={`card3d${flipped ? ' is-flipped' : ''}`}>
              <div className="face face--front" inert={flipped}>
                <button type="button" className="flip" onClick={() => setFlipped(true)} aria-label={`${t.name} — ${t.flip}`} />
                <Avatar alt="" />
                <span className="front-text">
                  <span className="name">{t.name}</span>
                  <span className="roles">
                    {t.roles.map((r) => (
                      <span key={r}>{r}</span>
                    ))}
                  </span>
                </span>
                <span className="status"><i aria-hidden="true" />{t.status}</span>
              </div>

              <div className="face face--back" inert={!flipped} onClick={() => setFlipped(false)}>
                <span className="back-label">{t.back}</span>
                <button
                  type="button"
                  className="back-email"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyEmail();
                  }}
                  aria-label={`${t.copyEmailAria}: ${EMAIL}`}
                >
                  {EMAIL}
                  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                    <rect x="7" y="7" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M13 4.5V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <span className="back-line">{t.location}</span>
                <span className="back-line">{t.languages}</span>
                <span className="mono" aria-hidden="true">HG</span>
                <button
                  type="button"
                  className="flip-back"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                >
                  ↺ {t.flipBack}
                </button>
              </div>
            </div>
          </div>
          <p className="hint">{flipped ? t.copyHint : t.flipHint}</p>
        </section>

        <section className="links" id="links">
          {t.groups.map((g) => (
            <div key={g.title} className="group">
              <h2>{g.title}</h2>
              <ul>
                {g.items.map((l) => {
                  const isMail = l.href.startsWith('mailto:');
                  return (
                    <li key={l.label}>
                      <a className={`link link--${l.tone}`} href={l.href} {...(isMail ? {} : ext)}>
                        <span className="link-main">
                          <strong>{l.label}</strong>
                          <small>{l.note}</small>
                        </span>
                        <Arrow />
                        {!isMail && <span className="sr">{t.external}</span>}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {g.chips && (
                <ul className="chips" aria-label={g.title}>
                  {g.chips.map((c) => (
                    <li key={c.label}>
                      <a href={c.href} {...ext}>{c.label}<span className="sr"> {t.external}</span></a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="actions">
            <button type="button" className="btn btn--primary" onClick={saveContact}>{t.save}</button>
            <button type="button" className="btn" onClick={copyEmail}>{t.copy}</button>
          </div>
        </section>

        <p className="foot">{t.footer}</p>
      </main>

      <div className={`toast${toast.show ? ' is-visible' : ''}${toast.error ? ' is-error' : ''}`} role="status" aria-live="polite">
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
          {toast.error ? (
            <path d="M10 5.5v5m0 3.2v.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="m5 10.5 3.2 3.2L15 6.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
        <span>{toast.msg}</span>
      </div>
    </>
  );
}
