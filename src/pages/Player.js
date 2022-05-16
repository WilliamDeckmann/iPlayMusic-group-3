// Imports
import { useLocation } from 'react-router-dom'

const Player = () => {
  const location = useLocation();

  return (
    <div>
      Player - pathname: {location.pathname}
    </div>
  );
}
 
export default Player;