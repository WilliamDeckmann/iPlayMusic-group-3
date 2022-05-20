// Components
import AlbumCard from "../components/AlbumCard";

const AlbumList = (props) => {
  return (
    <ul className="w-full flex flex-col gap-4">
      {props.array.map(album => (
        <div>
          <AlbumCard
            key={album.id}
            title={album.title}
            artist={album.artist}
            count={album.count}
            link={album.link}
            image={album.image}
          />
        </div>
      ))}
    </ul>
  );
}
 
export default AlbumList;