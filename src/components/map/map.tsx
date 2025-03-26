import { useRef, useEffect } from 'react';
import { OfferPreview } from '../../types/offer';
import { City } from '../../types/city';
import { Page } from '../../types/page';
import { getMapClasses } from './map-utils';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const URL_PIN_DEFAULT = '../../../public/img/pin.svg';
const URL_PIN_ACTIVE = '../../../public/img/pin-active.svg';

type MapProps = {
  pageType: Page;
  city: City;
  offerPreviews: OfferPreview[];
  hoveredOffer: OfferPreview | null;
};

function Map(props: MapProps): JSX.Element {
  const { pageType, city, offerPreviews, hoveredOffer } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const mapClasses = getMapClasses(pageType);

  useEffect(() => {
    const defaultCustomIcon = leaflet.icon({
      iconUrl: URL_PIN_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const activeCustomIcon = leaflet.icon({
      iconUrl: URL_PIN_ACTIVE,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    if (map) {
      offerPreviews.forEach((offerPreview) => {
        leaflet
          .marker(
            {
              lat: offerPreview.location.latitude,
              lng: offerPreview.location.longitude,
            },
            {
              icon:
                offerPreview.id === hoveredOffer?.id
                  ? activeCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, offerPreviews, hoveredOffer]);

  return <section className={mapClasses.sectionClass} ref={mapRef}></section>;
}

export default Map;
