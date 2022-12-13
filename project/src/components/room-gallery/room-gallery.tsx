import { FC } from 'react';

type RoomGalleryProps = {
  photos: string[];
}

const RoomGallery:FC<RoomGalleryProps> = ({ photos }) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {photos.slice(0, 6).map((photo) => (
        <div className="property__image-wrapper" key={photo}>
          <img className="property__image" src={photo} alt="studio" />
        </div>))}
    </div>
  </div>
);

export default RoomGallery;
