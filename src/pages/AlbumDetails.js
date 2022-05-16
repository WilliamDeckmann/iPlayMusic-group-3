// Imports
import { useLocation } from 'react-router-dom'

const AlbumDetails = () => {
  const location = useLocation();

  return (
    <div>
      AlbumDetails - pathname: {location.pathname}
    </div>
  );
}
 
export default AlbumDetails;