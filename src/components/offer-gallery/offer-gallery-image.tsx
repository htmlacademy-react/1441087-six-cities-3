type OfferGalleryImageProps = {
  src: string;
};

export default function OfferGalleryImage({
  src
}: OfferGalleryImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt="Photo studio" />
    </div>
  );
}
