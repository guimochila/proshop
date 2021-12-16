import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import useProduct from '../hooks/useProduct'
import PriceDetails from '../components/PriceDetails'

function ProductPage() {
  /* Params: id: string */
  const params = useParams()
  const { data: product, isLoading } = useProduct(params.id || '')

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!product) {
    return <span>Product not found</span>
  }

  const { image, name, rating, numReviews, price, description } = product

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
          <PriceDetails product={product} />
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
