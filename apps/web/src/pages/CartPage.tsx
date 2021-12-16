import { Col, Row, ListGroup, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CartPage() {
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        <p>Your cart is empty</p>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col md={2}>
                <p>Image</p>
              </Col>
              <Col md={3}>
                <Link to={`/product}`}>item name</Link>
              </Col>
              <Col md={2}>item price</Col>
              <Col md={2}>FormControl Quantity</Col>
              <Col md={2}>
                <Button type="button" variant="light">
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Subtotal 3 items </h3>
              <span>$ 10.00</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn-block">Proceed to Checkout</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartPage
