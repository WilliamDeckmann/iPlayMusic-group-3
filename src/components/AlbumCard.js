// Imports
import { Link } from 'react-router-dom';

// Components
import MusicCard from './MusicCard';

const AlbumCard = (props) => {
  return (
    <MusicCard
      key={props.key}
      title={props.title}
      artist={props.artist}
      info={props.count}
      clickable={false}
      content={
        <Link
          to={props.link}>
          <img
            className="w-12 h-12 object-cover rounded-lg"
            src={props.image}
            alt={props.title}
          />
        </Link>
      }
    />
  );
};

export default AlbumCard;
