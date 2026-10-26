const projectTitle = "Top NFL Quarterbacks Tracker";

const featuredItem = getItemById(2);
console.log(`Featured quarterback: ${featuredItem.name} (${featuredItem.team}).`);

const teamMatches = getItemsByCategory("Baltimore Ravens");
console.log(`Found ${teamMatches.length} quarterback(s) for Baltimore Ravens.`);

const averageRating = getAverageRating();
const summary = `${projectTitle} is tracking ${items.length} quarterbacks with an average passer rating of ${averageRating.toFixed(1)}.`;
console.log(summary);

const hasEliteRating = featuredItem.passerRating >= 100;
console.log(`Is ${featuredItem.name}'s rating elite (100+)? ${hasEliteRating}`);

if (items.length >= 3) {
  console.log(`There are ${items.length} quarterbacks tracked.`);
} else {
  console.log(`Only ${items.length} quarterback(s) tracked. Add more to start comparing.`);
}
