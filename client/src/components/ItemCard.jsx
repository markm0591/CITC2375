export default function ItemCard({ item, isFavorite, onToggleFavorite }) {
  return (
    <article className="item-card">
      <h3>{item.name}</h3>
      <p className="team">{item.team}</p>
      <p className="season-line">{item.description}</p>
      <ul className="stat-list">
        <li>{item.passingYards} Pass Yds</li>
        <li>{item.touchdowns} TD</li>
        <li>{item.interceptions} Int</li>
      </ul>
      <p className="rating">Rating: {item.passerRating}</p>
      <button
        type="button"
        className={`favorite-btn${isFavorite ? " is-favorite" : ""}`}
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(item.id)}
      >
        {isFavorite ? "★ Favorited" : "☆ Favorite"}
      </button>
    </article>
  );
}
