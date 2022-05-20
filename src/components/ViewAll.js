// Imports
import { Link } from 'react-router-dom';

// Components
import TextSmall from '../subComponents/TextSmall';

const ViewAll = (props) => {
  return (
    <Link to={props.link}>
      <TextSmall text="View All" color="#FF1168" />
    </Link>
  );
}
 
export default ViewAll;