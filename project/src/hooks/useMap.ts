import { useRef, useState, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types';
import { TILE_LAYER_URL_TEMPLATE, TILE_LAYER_ATTRIBUTION } from '../const';

export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, city: Location) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(
        TILE_LAYER_URL_TEMPLATE,
        {
          attribution: TILE_LAYER_ATTRIBUTION
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
};
