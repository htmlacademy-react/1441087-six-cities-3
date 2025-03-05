import GalleryImage from '../gallery-image/gallery-image';

type OfferGalleryProps = {
  images: string[];
};

export default function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <GalleryImage key={image} src={image} />
        ))}
      </div>
    </div>
  );
}
