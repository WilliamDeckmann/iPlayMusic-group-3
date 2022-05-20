import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowBack, IoIosSearch } from 'react-icons/io';
import HeadingSmall from '../subComponents/HeadingSmall';

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname
    .replace('/', '')
    .replace('-', ' ')
    .toUpperCase();

  return (
    <header className='bg-transparent dark:bg-transparent '>
      <nav className='w-full px-4 py-6 flex justify-between items-center font-medium'>
        <button className='w-4 p-2 box-content' onClick={() => navigate(-1)}>
          <IoIosArrowBack
            size='16px'
            className='dark:text-white text-BleachedCedar'
          />
        </button>
        <HeadingSmall
          text={path}
          className='dark:text-white text-BleachedCedar'
        />
        <button className='w-4 p-2 box-content justify-self-end'>
          <IoIosSearch
            size='16px'
            className='dark:text-white text-BleachedCedar'
          />
        </button>
      </nav>
    </header>
  );
};

export default TopNav;
