const items = [
  {
    id: 1,
    name: "Patrick Mahomes",
    team: "Kansas City Chiefs",
    description: "9th season as starter, 9th season with Chiefs.",
    passingYards: 4015,
    touchdowns: 29,
    interceptions: 9,
    passerRating: 100.8
  },
  {
    id: 2,
    name: "Josh Allen",
    team: "Buffalo Bills",
    description: "9th season as starter and with Bills.",
    passingYards: 3721,
    touchdowns: 26,
    interceptions: 10,
    passerRating: 94.4
  },
  {
    id: 3,
    name: "Lamar Jackson",
    team: "Baltimore Ravens",
    description: "8th season as starter, 9th season with Ravens.",
    passingYards: 3258,
    touchdowns: 25,
    interceptions: 7,
    passerRating: 102.2
  },
  {
    id: 4,
    name: "Joe Burrow",
    team: "Cincinnati Bengals",
    description: "7th season as starter and with Bengals.",
    passingYards: 4298,
    touchdowns: 31,
    interceptions: 11,
    passerRating: 98.6
  },
  {
    id: 5,
    name: "Jordan Love",
    team: "Green Bay Packers",
    description: "4th season as starter, 7th season with Packers.",
    passingYards: 3542,
    touchdowns: 24,
    interceptions: 13,
    passerRating: 89.7
  },
  {
    id: 6,
    name: "Jayden Daniels",
    team: "Washington Commanders",
    description: "3rd season as starter and with Commanders.",
    passingYards: 3389,
    touchdowns: 22,
    interceptions: 6,
    passerRating: 103.5
  }
];

function getItemById(id) {
  return items.find((item) => item.id === id);
}

function getItemsByCategory(team) {
  return items.filter((item) => item.team === team);
}

function getAverageRating() {
  const total = items.reduce((sum, item) => sum + item.passerRating, 0);
  return total / items.length;
}

const itemsJson = JSON.stringify(items);
const parsedItems = JSON.parse(itemsJson);
console.log(`JSON round trip check - first item name: ${parsedItems[0].name}`);
