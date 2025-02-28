import Head from 'next/head';
import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title: string;
};

const MainLayout = ({children, title}: Props) => {
  const t = useTranslations('MainLayout');
  // title se lo paso desde index o desde donde llame la main
  return (
    <>
      <Head>
        <title>{[title, t('pageTitle')].join(' - ')}</title>
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
