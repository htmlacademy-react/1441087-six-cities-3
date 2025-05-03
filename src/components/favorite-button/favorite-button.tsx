type FavoriteButtonProps = {
  isFavorite: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { isFavorite, onClick } = props;
  const addClass = isFavorite ? ' place-card__bookmark-button--active' : '';
  const label = isFavorite ? 'In bookmarks' : 'To bookmarks';

  return (
    <button
      className={`place-card__bookmark-button button${addClass}`}
      type="button"
      onClick={onClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {label}
      </span>
    </button>
  );
}

export default FavoriteButton;
