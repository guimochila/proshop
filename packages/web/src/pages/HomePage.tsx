import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';

function HomePage() {
  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return <span> Loading...</span>;
  }

  if (!products) {
    return <span>No products found</span>;
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {Object.keys(products).map((item) => (
          <Col key={products[item]._id} sm={6} md={6} lg={4} xl={3}>
            <Product item={products[item]} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;
