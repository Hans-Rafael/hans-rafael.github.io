import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslations} from 'next-intl';
import styles from '../styles/LocaleSwitcher.module.css'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');

  const {locale, locales, route} = useRouter();
  // Encontrar el otro idioma disponible (diferente al actual
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Link href={route} locale={otherLocale} className={styles.button}>
      {t('switchLocale', {locale: otherLocale})}{' '}
      {/* //switchLocale palabra clave en .json */}
    </Link>
  );
}
