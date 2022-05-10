// Imports
import { Routes, Route } from 'react-router-dom';
import Swirly from '../subComponents/Swirly';

// Pages
import NothingFound from '../pages/NothingFound';

const Walkthrough = () => {
  return (
    <div class='dark:bg-gradient-to-b from-GradientRedOne to-GradientRedTwo h-[768px]'>
      <Swirly />
      <div>
        <Routes>
          <Route exact path='/1' element=' 1' />
          <Route exact path='/2' element=' 2' />
          <Route exact path='/3' element=' 3' />
          <Route path='*' element={<NothingFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Walkthrough;
