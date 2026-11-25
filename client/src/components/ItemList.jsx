import ItemCard from "./ItemCard.jsx";

export default function ItemList({ items, favoriteIds, onToggleFavorite }) {
  if (items.length === 0) {
    return <p>No quarterbacks match that team.</p>;
  }

  return (
    <div id="item-list" className="player-grid">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavorite={favoriteIds.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
