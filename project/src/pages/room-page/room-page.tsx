import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchСurrentOffer, fetchComments, fetchNearbyOffers } from '../../store/api-action';
import Map from '../../components/map/map';
import RoomGallery from '../../components/room-gallery/room-gallery';
import RoomInfo from '../../components/room-info/room-info';
import RoomNearPlaces from '../../components/room-near-places/room-near-places';

const RoomPage:FC = () => {
  const { id } = useParams();

  const offer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchСurrentOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [dispatch, id]);

  if (!offer) {
    return null;
  }

  const points = nearbyOffers.concat(offer).map((item) => {
    const { location } = item;
    return {
      id: item.id,
      ...location,
    };
  });

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <RoomGallery photos={offer.images} />
        <RoomInfo offer={offer} />
        <section className="property__map map">
          <Map
            cityLocation={offer.city.location}
            points={points}
            selectedPointsId={Number(id)}
          />
        </section>
      </section>
      <RoomNearPlaces />
    </main>

  );};

export default RoomPage;
