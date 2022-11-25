import { FC } from 'react';
import { TReview } from '../../mooks/reviews';
import Review from '../review/review';
import AddReview from '../add-review/add-review';

type ReviewListProps = {
  reviews: TReview[];
}

const ReviewList:FC<ReviewListProps> = ({ reviews }) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
    <AddReview />
  </section>
);

export default ReviewList;
