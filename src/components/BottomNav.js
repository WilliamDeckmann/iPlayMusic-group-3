import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoIosPulse } from 'react-icons/ioios';
import { IoIosMicrophone } from 'react-icons/ioios';
import { IoIosWifi } from 'react-icons/ioios';
import { IoIosContrast } from 'react-icons/ioios';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname
    .replace('/', '')
    .replace('-', ' ')
    .toUpperCase();

  return (
    <footer>
      <nav className='w-full px-8 py-3 flex justify-between items-center'>
        <Link to='/'>
          <button className='h-5'>
            <IoIosPulse />
          </button>
        </Link>
        <Link to='/'>
          <button className='h-5'>
            <IoIosMicrophone />
          </button>
        </Link>
        <Link to='/'>
          <button className='h-6 p-2 rounded-full bg-gray-500'>
            <IoIosWifi />
          </button>
        </Link>
        <button className='h-5'>
          <IoIosContrast />
        </button>
        <Link to='/'>
          <button className='h-5'>
            <IoIosContrast />
          </button>
        </Link>
      </nav>
    </footer>
  );
};

export default BottomNav;
