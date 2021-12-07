import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useAppDispatch, useAppSelector } from '../store';
import {
  fetchProducts,
  selectProducts,
} from '../store/reducers/product.reducer';

function HomePage() {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
