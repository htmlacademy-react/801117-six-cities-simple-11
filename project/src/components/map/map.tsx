import { FC, useRef, useEffect, memo } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map';
import { Location } from '../../types';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

type MapProps = {
  cityLocation: Location;
  points: (Location & { id: number })[];
  selectedPointsId: number | null;
  mapClassName: string;
};

const Map:FC<MapProps> = ({ cityLocation, points, selectedPointsId, mapClassName }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    const newLayer: LayerGroup = new LayerGroup();

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
          .addTo(newLayer);
      });

      newLayer.addTo(map);
    }

    return () => {
      map?.removeLayer(newLayer);
    };
  }, [map, points, selectedPointsId]);

  useEffect(() => {
    if (map) {
      map.flyTo({
        lat: cityLocation.latitude,
        lng: cityLocation.longitude,
      });
    }
  }, [map, cityLocation]);

  return <section className={`${mapClassName} map`} ref={mapRef} ></section>;
};

export default memo(Map);
