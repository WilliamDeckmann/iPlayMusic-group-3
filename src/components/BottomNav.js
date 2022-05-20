import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoIosPulse } from 'react-icons/io';
import { IoIosMicrophone } from 'react-icons/io';
import { IoMdWifi } from 'react-icons/io';
import { IoIosContrast } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';
import Toggle from '../context/ThemeToggle';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname
    .replace('/', '')
    .replace('-', ' ')
    .toUpperCase();

  return (
    <footer className='bottom-0 sticky bg-white dark:bg-Mirage drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]'>
      <svg width='0' height='0'>
        <linearGradient id='gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#FF6A00' offset='0%' />
          <stop stopColor='#EE0979' offset='100%' />
        </linearGradient>
      </svg>
      <nav className='w-full px-6 py-3 flex justify-between items-center '>
        <Link to='/all-albums' className='p-2'>
          <IoIosPulse size='20px' style={{ fill: 'url(#gradient)' }} />
        </Link>
        <Link to='/playlists' className='p-2'>
          <IoIosMicrophone size='20px' style={{ fill: 'url(#gradient)' }} />
        </Link>
        <Link to='/featured'>
          <div className='absolute h-[30px] w-[30px] rounded-full animate-ping bg-GradientRedOne ml-[5px] mt-[5px]'></div>
          <div
            className='h-6 w-6 p-2 box-content rounded-full relative'
            style={{ background: 'linear-gradient(#EE0979, #FF6A00)' }}
          >
            <IoMdWifi size='24px' className='text-white dark:text-black' />
          </div>
        </Link>
        <Toggle size='20px' style={{ fill: 'url(#gradient)' }} />
        <Link to='/categories' className='p-2'>
          <IoMdSettings size='20px' style={{ fill: 'url(#gradient)' }} />
        </Link>
      </nav>
    </footer>
  );
};

export default BottomNav;
