// Components
import AlbumCard from "../components/AlbumCard";
import { AlbumsContext } from '../context/AlbumsContext';
import { useContext } from "react";

const AlbumList = () => {
  const {albumData} = useContext(AlbumsContext)
  return (
    <ul className="w-full flex flex-col gap-4">
      {albumData.map(album => (
        <div>
          <AlbumCard
            key={album.id}
            title={album.name}
            artist={album.artists[0].name}
            count={album.total_tracks}
            // link={album.link}
            image={album.images[2]}
          />
        </div>
      ))}
    </ul>
  );
}
 
export default AlbumList;