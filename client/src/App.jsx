import { useState } from "react";
import Header from "./components/Header.jsx";
import ItemList from "./components/ItemList.jsx";
import { items } from "./data.js";
import "./App.css";

const teams = [...new Set(items.map((item) => item.team))];

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState(() => {
    return localStorage.getItem("selectedTeam") || "all";
  });

  const [favoriteIds, setFavoriteIds] = useState(() => {
    const saved = localStorage.getItem("favoriteItemIds");
    return saved ? JSON.parse(saved) : [];
  });

  function handleTeamChange(event) {
    const team = event.target.value;
    setSelectedTeam(team);
    localStorage.setItem("selectedTeam", team);
  }

  function handleToggleFavorite(itemId) {
    const updated = favoriteIds.includes(itemId)
      ? favoriteIds.filter((id) => id !== itemId)
      : [...favoriteIds, itemId];

    setFavoriteIds(updated);
    localStorage.setItem("favoriteItemIds", JSON.stringify(updated));
  }

  const filteredItems =
    selectedTeam === "all"
      ? items
      : items.filter((item) => item.team === selectedTeam);

  return (
    <>
      <Header />

      <main className="content-width">
        <h1>Top NFL 2026 Quarterbacks Tracker</h1>

        <section>
          <h2>Current Top Quarterbacks</h2>
          <p>
            A running list of the NFL's top-performing quarterbacks this
            season, with career <strong>per-game</strong> averages tracked
            here for quick reference and comparison.
          </p>

          <div className="form-row">
            <label htmlFor="team-filter">Filter by Team</label>
            <select
              id="team-filter"
              value={selectedTeam}
              onChange={handleTeamChange}
            >
              <option value="all">All Teams</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          <ItemList
            items={filteredItems}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
          />
        </section>

        <section>
          <img
            className="featured-img"
            src="/images/footballinfield.jpg"
            alt="Football laying in field"
          />
          <p>
            References:
            <br />
            <a href="https://www.pro-football-reference.com/" target="_blank" rel="noreferrer">
              Pro Football Reference Website.
            </a>
          </p>
        </section>
      </main>

      <footer>
        <div className="content-width">
          <p>&copy; 2026 NFL QB Tracker</p>
        </div>
      </footer>
    </>
  );
}
