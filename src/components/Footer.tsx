import { useTranslations } from 'next-intl';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <p>{t('copyright')}</p>
    </footer>
  );
}
