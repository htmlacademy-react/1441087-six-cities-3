type GalleryImageProps = {
  src: string;
};

export default function GalleryImage({
  src
}: GalleryImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt="Photo studio" />
    </div>
  );
}
