// Imports
import { Routes, Route } from 'react-router-dom';

import ButtonWalk from '../subComponents/ButtonWalkthrough';
import WalkthroughOne from '../subComponents/WalkthroughLayouts';
import WalkTwo from '../subComponents/WalkthroughTwo';
import WalkThree from '../subComponents/WalkthroughThree';

// Pages
import NothingFound from '../pages/NothingFound';

const Walkthrough = () => {
  return (
    <div class='relative overflow-hidden'>
      <div class='dark:bg-gradient-to-b from-GradientRedOne to-GradientRedTwo h-[768px]'>
        <div class='grid content-center text-center h-[768px]'>
          {/* <WalkthroughOne /> */}
          <div class='absolute flex justify-center text-center h-full w-full mt-[-40%]'>
            <ButtonWalk />
          </div>
        </div>
        <div>
          <Routes>
            <Route exact path='/1' element={<WalkthroughOne />} />
            <Route path='/2' element={<WalkTwo />} />
            <Route path='/3' element={<WalkThree />} />
            <Route path='*' element={<NothingFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
