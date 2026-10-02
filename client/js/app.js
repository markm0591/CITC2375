const projectTitle = "Top NFL Quarterbacks Tracker";
const sampleItemCount = 3;
const topRating = 102.2;
const hasEliteRating = topRating >= 100;

const averageRating = (100.8 + 94.4 + 102.2) / 3;

const summary = `${projectTitle} is tracking ${sampleItemCount} quarterbacks with an average passer rating of ${averageRating.toFixed(1)}.`;

console.log(summary);
console.log(`Average passer rating: ${averageRating.toFixed(1)}`);
console.log(`Is the top rating elite (100+)? ${hasEliteRating}`);

if (sampleItemCount >= 3) {
  console.log(`There are ${sampleItemCount} quarterbacks tracked.`);
} else {
  console.log(`Only ${sampleItemCount} quarterback(s) tracked. Add more to start comparing.`);
}
