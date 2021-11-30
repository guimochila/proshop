import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product, { ProductItem } from '../components/Product';
import { getProducts } from '../utils/products';

function HomePage() {
  const [products, setProducts] = React.useState<ProductItem[]>([]);

  React.useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={6} md={6} lg={4} xl={3}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;
