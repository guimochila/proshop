import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

import styles from '../styles/Product.module.css';

type ProductItem = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};

type Props = {
  item: ProductItem;
};

function Product({ item }: Props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${item._id}`}>
        <Card.Img src={item.image} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <Link to={`/product/${item._id}`}>
            <strong className={styles.productTitle}>{item.name}</strong>
          </Link>
        </Card.Title>

        <Card.Text as="div">
          <Rating value={item.rating} numReviews={item.numReviews} />
        </Card.Text>
        <Card.Text as="h3">$ {item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
