import { FC, useRef, useEffect } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { Location } from '../../types';

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
  cityLocation: Location;
  points: (Location & { id: number })[];
  selectedPointsId: number | null;
};

const Map:FC<MapProps> = ({ cityLocation, points, selectedPointsId }) => {
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
      map.flyTo({
        lat: cityLocation.latitude,
        lng: cityLocation.longitude,
      });
    }

    return () => {
      map?.removeLayer(newLayer);
    };
  }, [map, points, selectedPointsId, cityLocation]);


  return <div style={{height: '100%'}} ref={mapRef} ></div>;
};

export default Map;
