import { MoodBoardItem } from './MoodBoardItem';

export const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="#d9c9a3"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="A quiet trail winding through golden hills"
        />
        <MoodBoardItem
          color="#a9c6c2"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Waves rolling in slow and unhurried"
        />
        <MoodBoardItem
          color="#8c9e6c"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Wide open fields with nowhere to be"
        />
        <MoodBoardItem
          color="#5b6b7c"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="A vessel pointed somewhere new"
        />
        <MoodBoardItem
          color="#d98a6b"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Whitewashed rooftops against a deep blue sky"
        />
        <MoodBoardItem
          color="#c9b6cf"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="A local resident, unbothered by tourists"
        />
      </div>
    </div>
  );
};

export default MoodBoard;
