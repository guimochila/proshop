import * as React from 'react';
import { Col, Form, ListGroupItem, Row } from 'react-bootstrap';

type Props = {
  initialQuantity: number;
  onChangeHandler: (value: string) => any;
};

function QuantitySelector({ initialQuantity, onChangeHandler }: Props) {
  const [quantity, setQuantity] = React.useState(initialQuantity);
  console.log(initialQuantity);
  const options = Array.from(Array(quantity).keys()).map((qty) => (
    <option key={qty} value={qty}>
      {qty}
    </option>
  ));

  const quantityHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuantity(quantity);

    if (typeof onChangeHandler === 'function') {
      onChangeHandler(e.target.value);
    }
  };

  return (
    <ListGroupItem>
      <Row>
        <Col>Quantity</Col>
        <Col>
          <Form.Control as="select" value={quantity} onChange={quantityHandler}>
            {options}
          </Form.Control>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

export default QuantitySelector;
