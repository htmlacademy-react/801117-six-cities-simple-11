import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, MAX_COUNT_RENDER_REVIEW } from '../../const';
import Review from '../review/review';
import AddReview from '../add-review/add-review';

const ReviewList:FC = () => {
  const reviews = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        {reviews.length === 1 ? 'Review' : 'Reviews'} &middot;
        <span className="reviews__amount">
          {reviews.length > MAX_COUNT_RENDER_REVIEW ? MAX_COUNT_RENDER_REVIEW : reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {reviews
          .slice()
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10)
          .map((review) => (
            <Review review={review} key={review.id} />
          ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <AddReview />}
    </section>
  );};

export default ReviewList;
