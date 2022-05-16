import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IoIosContrast } from 'react-icons/io';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='transition duration-500 ease-in-out rounded-full p-2'>
      {theme === 'dark' ? (
        <IoIosContrast
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          class='text-2xl cursor-pointer' style={{ fill: "url(#gradient)" }}
        />
      ) : (
        <IoIosContrast
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          class='text-2xl cursor-pointer' style={{ fill: "url(#gradient)" }}
        />
      )}
    </div>
  );
};

export default Toggle;
