const itemList = document.querySelector("#item-list");
const teamFilter = document.querySelector("#team-filter");

let favoriteIds = JSON.parse(localStorage.getItem("favoriteItemIds")) || [];

function renderItems(itemsToRender) {
  itemList.innerHTML = "";
  itemsToRender.forEach((item) => {
    const card = document.createElement("article");
    const isFavorite = favoriteIds.includes(item.id);
    card.className = "item-card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="team">${item.team}</p>
      <p class="season-line">${item.description}</p>
        <ul class="stat-list">
          <li>${item.passingYards} Pass Yds</li>
          <li>${item.touchdowns} TD</li>
          <li>${item.interceptions} Int</li>
        </ul>
      <p class="rating">Rating: ${item.passerRating}</p>
      <button class="favorite-btn${isFavorite ? " is-favorite" : ""}" data-id="${item.id}">${isFavorite ? "★ Favorited" : "☆ Favorite"}</button>
    `;
    itemList.appendChild(card);
  });
}

renderItems(items);

teamFilter.addEventListener("change", () => {
  const team = teamFilter.value;
  renderItems(team === "all" ? items : getItemsByCategory(team));
});

itemList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("favorite-btn")) {
    return;
  }
  const id = Number(event.target.dataset.id);
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter((favId) => favId !== id);
  } else {
    favoriteIds.push(id);
  }
  localStorage.setItem("favoriteItemIds", JSON.stringify(favoriteIds));
  event.target.classList.toggle("is-favorite");
  event.target.textContent = favoriteIds.includes(id) ? "★ Favorited" : "☆ Favorite";
});