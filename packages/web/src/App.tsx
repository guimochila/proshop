import * as React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import GlobalLoader from './components/GlobalLoader';
import Header from './components/Header';
import { CartProvider } from './context/cart-context';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));

function App() {
  return (
    <Router>
      <div>
        <CartProvider>
          <Header />
          <main className="py-3">
            <Container>
              <React.Suspense fallback={<GlobalLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              </React.Suspense>
            </Container>
          </main>
        </CartProvider>
        <Footer />
        <GlobalLoader />
      </div>
    </Router>
  );
}

export default App;
