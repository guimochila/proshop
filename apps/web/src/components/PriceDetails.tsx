import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap'
import { useCart } from '../context/cart-context'

import { ProductItem } from './Product'
import QuantitySelector from './QuantitySelector'

type PriceDetailsProps = {
  product: ProductItem
}

function PriceDetails({ product }: PriceDetailsProps) {
  const { state, actions } = useCart()
  const { price, countInStock } = product

  console.log(state)
  return (
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
        {countInStock > 0 ? (
          <QuantitySelector initialQuantity={countInStock} />
        ) : null}
        <ListGroup.Item>
          <Button
            className="btn-block"
            type="button"
            disabled={countInStock === 0}
            onClick={() => actions.addItemToCart('123123', 2)}
          >
            Add to cart
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default PriceDetails
