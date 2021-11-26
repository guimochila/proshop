import * as React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type Props = {
  value: number;
  numReviews: number;
};

function Rating({ value, numReviews }: Props) {
  return (
    <div className="d-flex p-2 align-items-center">
      {Array(5)
        .fill(1)
        .map((_, index) => {
          const realIndex = index + 1;
          const starIcon =
            value >= realIndex ? (
              <FaStar color="gold" />
            ) : value >= realIndex - 0.5 ? (
              <FaStarHalfAlt color="gold" />
            ) : (
              <FaRegStar color="gold" />
            );

          return (
            <React.Fragment key={`start-${index}`}>{starIcon}</React.Fragment>
          );
        })}
      <span className="px-2">{numReviews} reviews</span>
    </div>
  );
}

export default Rating;
