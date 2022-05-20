// Components
import PlayerCard from "../components/PlayerCard";

const PlayerList = (props) => {
  return (
    <ul className="w-full flex flex-col gap-4">
      {props.array.map(song => (
        <div>
          <PlayerCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            time={song.time}
            link={song.link}
          />
        </div>
      ))}
    </ul>
  );
}
 
export default PlayerList;