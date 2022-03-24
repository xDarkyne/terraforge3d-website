import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { MainLayout } from 'components/layouts';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2765308, 6);
  }, []);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
