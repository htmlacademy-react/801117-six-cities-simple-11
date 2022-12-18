import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchСurrentOffer, fetchComments, fetchNearbyOffers } from '../../store/api-action';
import { getCurrentOffer, getNearbyOffers, getErrorStatus } from '../../store/offers-process/selectors';
import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import RoomGallery from '../../components/room-gallery/room-gallery';
import RoomInfo from '../../components/room-info/room-info';
import RoomNearPlaces from '../../components/room-near-places/room-near-places';


const RoomPage:FC = () => {
  const { id } = useParams();

  const hasError = useAppSelector(getErrorStatus);
  const offer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchСurrentOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if(hasError) {
      navigate(AppRoute.NotFound);
    }
  }, [navigate, hasError]);

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
        <Map
          cityLocation={offer.city.location}
          points={points}
          selectedPointsId={Number(id)}
          mapClassName='property__map'
        />
      </section>
      <RoomNearPlaces nearbyOffers={nearbyOffers} />
    </main>

  );};

export default RoomPage;
