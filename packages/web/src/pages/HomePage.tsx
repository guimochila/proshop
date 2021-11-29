import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

function HomePage() {
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
