import React, { FC, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendComment } from '../../store/api-action';
import { CommentParam, ratingStars } from '../../const';
import { getDataLoadingReviewStatus, getComments } from '../../store/review-process/selectors';

const AddReview: FC = () => {
  const comments = useAppSelector(getComments);

  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');

  const isLoading = useAppSelector(getDataLoadingReviewStatus);
  const dispatch = useAppDispatch();

  const { id: offerId } = useParams();

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setReview(event.currentTarget.value);
  };

  const handleRatingInputClick = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (offerId) {
      dispatch(sendComment({
        offerId,
        rating,
        comment: review,
      }));
    }
  };

  useEffect(() => {
    setRating(0);
    setReview('');
  }, [comments]);

  const isSumitButtonDisabled =
    isLoading ||
    rating === 0 ||
    (review.length < CommentParam.MinLength || review.length > CommentParam.MaxLength);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((item) => (
          <React.Fragment key={item.stars}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.stars}
              id={`${item.stars}-stars`}
              type="radio"
              onChange={handleRatingInputClick}
              checked={item.stars === rating}
              disabled={isLoading}
            />
            <label
              key={item.stars}
              htmlFor={`${item.stars}-stars`}
              className="reviews__rating-label form__rating-label" title={item.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={CommentParam.MinLength}
        maxLength={CommentParam.MaxLength}
        onChange={handleTextareaChange}
        value={review}
        disabled={isLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSumitButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>

  );
};

export default AddReview;
