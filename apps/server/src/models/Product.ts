import { Schema, model, ObjectId, SchemaTypes } from 'mongoose'
import { Review, reviewSchema } from './Review'

interface Product {
  user: ObjectId
  image: string
  brand: string
  category: string
  description: string
  rating: number
  numReviews: number
  price: number
  countInStock: number
  reviews: [Review]
}

const productSchema = new Schema<Product>(
  {
    user: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: 'User',
    },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  },
)

const Product = model('Product', productSchema)

export default Product
