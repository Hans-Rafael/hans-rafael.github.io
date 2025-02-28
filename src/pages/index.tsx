import {GetStaticPropsContext} from 'next';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import MainLayout from '@/layouts/MainLayout';
import ProjectsPage from '@/layouts/Projects';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <MainLayout title={t('title')}>
      <p>{t('description')}</p>
      <LocaleSwitcher />
      <ProjectsPage/>
    </MainLayout>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
