import React from 'react';

interface Review {
  reviewerName?: string;
  rating: number;
  comments: string;
}

interface MovieReviewsProps {
  reviews: Review[];
  averageRating: number;
}

const MovieReviews: React.FC<MovieReviewsProps> = ({ reviews, averageRating }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <p>Average Rating: {averageRating}</p>
      {reviews?.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border-b py-2">
            <p><strong>{review.reviewerName || 'Anonymous'}</strong>: {review.comments}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default MovieReviews;
