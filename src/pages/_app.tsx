import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Providers } from '../contexts/Providers';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <AnimatePresence exitBeforeEnter>
        <Header />
          <Component {...pageProps} />
          <Toaster />
        <Footer />
      </AnimatePresence>
    </Providers>
  );
}

export default MyApp
