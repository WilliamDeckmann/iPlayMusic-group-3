// Imports
import { Routes, Route, Link } from 'react-router-dom';

import ButtonWalk from '../subComponents/ButtonWalkthrough';
import WalkthroughOne from '../subComponents/WalkthroughLayouts';
import WalkTwo from '../subComponents/WalkthroughTwo';
import WalkThree from '../subComponents/WalkthroughThree';
import Skip from '../subComponents/Skip';
import { motion } from 'framer-motion';

// Pages
import NothingFound from '../pages/NothingFound';

const Walkthrough = () => {
  return (
    <motion.div animate={{opacity: 1}} transition={{duration: 1}} class='relative overflow-hidden opacity-0'>
      <div class='dark:bg-gradient-to-b from-GradientRedOne to-GradientRedTwo h-[768px]'>
        <div class='grid content-center text-center h-[768px]'>
          {/* <WalkthroughOne /> */}
          <div class='absolute flex justify-center text-center h-full w-full small:mt-[-30%] medium:mt-[-30%] large:mt-[-25%] tablet:mt-[-20%] laptopS:mt-[-10%] laptopL:mt-[-10%] 4K:mt-[-5%]'>
            <ButtonWalk />
          </div>
          <Link to="/featured">
            <div class='small:mt-[205%] medium:mt-[170%] large:mt-[155%] tablet:mt-[80%]'>
              <Skip />
            </div>
          </Link>
        </div>
        <div class='text-center mt-[-105%]'>
          <Routes>
            <Route exact path='/' element={<WalkthroughOne />} />
            <Route path='/2' element={<WalkTwo />} />
            <Route path='/3' element={<WalkThree />} />
            <Route path='*' element={<NothingFound />} />
          </Routes>
        </div>
      </div>
    </motion.div>
  );
};

export default Walkthrough;
