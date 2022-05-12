import { IoRadioOutline } from 'react-icons/io5';
import { IoHeart } from 'react-icons/io5';
import { IoMusicalNote } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ButtonWalk = () => {
  return (
    <>
      <div class='grid grid-cols-3 gap-4 content-end'>
        <div class='text-giant border-2 rounded-full w-[55px] h-[55px] pt-2 pl-2  border-black hover:bg-DarkHotPink hover:border-DarkHotPink hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-orange-600'>
          <Link to='/walkthrough'>
            <IoRadioOutline />
          </Link>
        </div>
        <div class='text-giant border-2 rounded-full w-[55px] h-[55px] pt-2.5 pl-2 dark:border-white border-black hover:bg-DarkHotPink hover:border-DarkHotPink hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-orange-600'>
          <Link to='/walkthrough/2'>
            <IoHeart />
          </Link>
        </div>
        <div class='text-giant border-2 rounded-full w-[55px] h-[55px] pt-2 pl-2 dark:border-white border-black hover:bg-DarkHotPink hover:border-DarkHotPink hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-orange-600'>
          <Link to='/walkthrough/3'>
            <IoMusicalNote />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ButtonWalk;
