import { CartProvider, useCart } from 'react-use-cart';
import CartFlying from '@/components/Cart';
import '@/styles/globals.css';

import Header from '@/components/Header';
export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />;
      <CartFlying />
    </CartProvider>
  );
}
