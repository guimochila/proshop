import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { getProductById } from '../utils/products';

function ProductPage() {
  const [product, setProduct] = React.useState();
  /* Params: id: string */
  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      getProductById(params.id).then((data) => setProduct(data));
    }
  }, [params.id]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const { image, name, rating, numReviews, price, description, countInStock } =
    product;

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col md={6} sm={6}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3} sm={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} numReviews={numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Price: ${price}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Description: {description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} sm={6}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{countInStock > 0 ? 'In stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductPage;
