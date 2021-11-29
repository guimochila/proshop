import * as React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="py-3">
          <Container>
            <React.Suspense fallback={<p>Loading...</p>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
              </Routes>
            </React.Suspense>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
