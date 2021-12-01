import { Schema, model } from 'mongoose';

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export const reviewSchema = new Schema<Review>(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Review = model('Review', reviewSchema);

export default Review;
