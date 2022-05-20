import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <>
      <div className='h-[768px] w-full dark:bg-BleachedCedar bg-white overflow-hidden'>
        <Link to='/walkthrough'>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex justify-center relative opacity-0'
          >
            <img
              src='/assets/dark.png'
              className='w-[160px] small:mt-[70%] large:mt-[50%] tablet:mt-[30%] laptopS:mt-[25%] laptopL:mt-[17%] 4K:mt-[10%] absolute'
            ></img>
            <img
              src='/assets/iplay.png'
              className='w-[160px] small:mt-[70%] large:mt-[50%] tablet:mt-[30%] laptopS:mt-[25%] laptopL:mt-[17%] 4K:mt-[10%] absolute dark:hidden'
            ></img>
            <h2 className='text-black text-[32px] dark:text-white font-Poppins font-bold small:mt-[130%] medium:mt-[120%] large:mt-[95%] tablet:mt-[55%] laptopS:mt-[42%] laptopL:mt-[30%] 4K:mt-[17%] absolute'>
              iPlayMusic
            </h2>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
