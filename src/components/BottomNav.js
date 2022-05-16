import { useNavigate, useLocation, Link } from 'react-router-dom';
import { IoIosPulse } from 'react-icons/io';
import { IoIosMicrophone } from 'react-icons/io';
import { IoMdWifi } from 'react-icons/io';
import { IoIosContrast } from 'react-icons/io';
import { IoMdSettings } from 'react-icons/io';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname
    .replace('/', '')
    .replace('-', ' ')
    .toUpperCase();

  return (
    <footer style={{background: "#FFFFFF"}}>
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#FF6A00" offset="0%" />
          <stop stopColor="#EE0979" offset="100%" />
        </linearGradient>
      </svg>
      <nav className='w-full px-6 py-3 flex justify-between items-center'>

        <Link to='/all-albums' className='p-2' >
          <IoIosPulse size="20px" style={{ fill: "url(#gradient)" }}/>
        </Link>
        <Link to='/playlists' className='p-2'>
          <IoIosMicrophone size="20px" style={{ fill: "url(#gradient)" }}/>
        </Link>
        <Link to='/featured'>
          <div className='h-6 w-6 p-2 box-content rounded-full' style={{background: "linear-gradient(#EE0979, #FF6A00)"}}>
            <IoMdWifi size="24px" color="#FFFFFF" />
          </div>
        </Link>
        <button className='p-2'>
          <IoIosContrast size="20px" style={{ fill: "url(#gradient)" }}/>
        </button>
        <Link to='/categories' className='p-2'>
          <IoMdSettings size="20px" style={{ fill: "url(#gradient)" }}/>
        </Link>
      </nav>
    </footer>
  );
};

export default BottomNav;
