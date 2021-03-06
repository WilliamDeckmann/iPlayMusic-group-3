import { useNavigate , useLocation } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosSearch } from 'react-icons/io';
import HeadingSmall from "../subComponents/HeadingSmall";

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.replace('/', '').replace('-', ' ').toUpperCase();

  return (
    <header class="bg-white dark:bg-BleachedCedar">
      <nav className="w-full px-4 py-6 flex justify-between items-center">
        <button className="w-4 p-2 box-content" onClick={() => navigate(-1)}>
          <IoIosArrowBack size="16px" class="dark:text-white text-BleachedCedar"/>
        </button>
        <HeadingSmall text={path} class="dark:text-white text-BleachedCedar" />
        <button className="w-4 p-2 box-content justify-self-end">
          <IoIosSearch size="16px" class="dark:text-white text-BleachedCedar"/>
        </button>
      </nav>
    </header>
  );
}
 
export default TopNav;