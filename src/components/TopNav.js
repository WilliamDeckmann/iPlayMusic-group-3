import { useNavigate , useLocation } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/ioios';
import { IoIosSearch } from 'react-icons/ioios';
import HeadingSmall from "../subComponents/HeadingSmall";

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace('/', '').replace('-', ' ').toUpperCase();

  return (
    <header>
      <nav className="w-full px-4 py-6 flex justify-between items-center">
        <button className="w-4 p-2 box-content" onClick={() => navigate(-1)}>
          <IoIosArrowBack/>
        </button>
        <HeadingSmall text={path} weight="200"/>
        <button className="w-4 p-2 box-content justify-self-end">
          <IoIosSearch/>
        </button>
      </nav>
    </header>
  );
}
 
export default TopNav;