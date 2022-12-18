import { FC } from 'react';
import { OfferParam } from '../../const';

type RoomGalleryProps = {
  photos: string[];
}

const RoomGallery:FC<RoomGalleryProps> = ({ photos }) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {photos.slice(0, OfferParam.MaxCountPhotos).map((photo) => (
        <div className="property__image-wrapper" key={photo}>
          <img className="property__image" src={photo} alt="studio" />
        </div>))}
    </div>
  </div>
);

export default RoomGallery;
