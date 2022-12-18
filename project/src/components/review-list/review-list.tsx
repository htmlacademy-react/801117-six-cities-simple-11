import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/review-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus, OfferParam } from '../../const';
import Review from '../review/review';
import AddReview from '../add-review/add-review';

const ReviewList:FC = () => {
  const reviews = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        {reviews.length === 1 ? 'Review' : 'Reviews'} &middot;
        <span className="reviews__amount">
          {reviews.length > OfferParam.MaxCountRenderReview
            ? OfferParam.MaxCountRenderReview
            : reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {reviews
          .slice()
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, OfferParam.MaxCountRenderReview)
          .map((review) => (
            <Review review={review} key={review.id} />
          ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <AddReview />}
    </section>
  );};

export default ReviewList;
