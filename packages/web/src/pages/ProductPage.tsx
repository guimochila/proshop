import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useAppDispatch } from '../store';
import {
  fetchProductById,
  selectProductById,
  selectReqStatus,
} from '../store/reducers/product.reducer';
import { useSelector } from 'react-redux';

function ProductPage() {
  /* Params: id: string */
  const params = useParams();
  const [quantity, setQuantity] = React.useState(0);
  const product = useSelector(selectProductById(params.id as string));
  const status = useSelector(selectReqStatus);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (params.id) {
      dispatch(fetchProductById(params.id));
    }
  }, [dispatch, params.id]);

  if ((status === 'idle' || status === 'pending') && product === undefined)
    return null;

  if (status === 'rejected' && product === undefined) {
    return <h2>Product not found</h2>;
  }

  const addToCartHandler = () => {};

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
              {countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col> Quantity</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      >
                        {Array.from(Array(product.countInStock).keys()).map(
                          (item) => (
                            <option key={item + 1} value={item + 1}>
                              {item + 1}
                            </option>
                          ),
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={countInStock === 0}
                  onClick={addToCartHandler}
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
