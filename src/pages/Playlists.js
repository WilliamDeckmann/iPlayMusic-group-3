// Components
import PlayerCard from "../components/PlayerCard";

const Playlists = () => {
  const array = [0, 1, 2]

  return (
    <ul className="p-6 flex flex-col gap-4">
      {array.map(card => (
        <div>
          <PlayerCard
            key={card.index}
            title="title"
            artist="artist"
            time="time"
          />
        </div>
      ))}
    </ul>
    
  );
}
 
export default Playlists;