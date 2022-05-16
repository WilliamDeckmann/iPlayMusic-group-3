import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <>
      <div class='h-[768px] w-full dark:bg-BleachedCedar bg-white overflow-hidden'>
        <Link to='/walkthrough'>
          <motion.div animate={{scale: 1.1}} transition={{duration: 1}} class='flex justify-center relative'>
            <img
              src='/assets/dark.png'
              class='w-[160px] small:mt-[70%] large:mt-[50%] tablet:mt-[30%] laptopS:mt-[25%] laptopL:mt-[17%] 4K:mt-[10%] absolute animate-[pulse_2s_ease-in-out_infinite]'
            ></img>
            <img
              src='/assets/iplay.png'
              class='w-[160px] small:mt-[70%] large:mt-[50%] tablet:mt-[30%] laptopS:mt-[25%] laptopL:mt-[17%] 4K:mt-[10%] absolute dark:hidden'
            ></img>
            <h2 class='text-black text-[32px] dark:text-white font-Poppins font-bold small:mt-[130%] medium:mt-[120%] large:mt-[95%] tablet:mt-[55%] laptopS:mt-[42%] laptopL:mt-[30%] 4K:mt-[17%] absolute'>
              iPlayMusic
            </h2>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
