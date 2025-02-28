import Link from 'next/link';
import LocaleSwitcher from './LocaleSwitcher';
import {useTranslations} from 'next-intl';

const Header = () => {
  const t = useTranslations('Index');

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">{t('title')}</Link>
        </li>
        <li>
          <Link href="/about">{t('description')}</Link>
        </li>
        <li>
          <Link href="/projects">{t('projects')}</Link>
        </li>
        <li>
          <Link href="/contact">{t('contact')}</Link>
        </li>
      </ul>
      <LocaleSwitcher />
    </nav>
  );
};

export default Header;
