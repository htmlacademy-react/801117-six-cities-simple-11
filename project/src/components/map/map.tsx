/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useRef, useEffect } from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { TOfferLocation } from '../../mooks/offers';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: TOfferLocation;
  points: (TOfferLocation & { id: number })[];
  selectedPointsId: number | null;
};

const Map:FC<MapProps> = ({ city, points, selectedPointsId }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPointsId && point.id === selectedPointsId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPointsId]);

  return <div style={{height: '800px'}} ref={mapRef} ></div>;
};

export default Map;
