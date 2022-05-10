// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import NothingFound from '../pages/NothingFound';

const Walkthrough = () => {
  return (
    <div>
    Walkthrough - id:
      <Routes>
        <Route exact path="/1" element=" 1" />
        <Route exact path="/2" element=" 2" />
        <Route exact path="/3" element=" 3" />
        <Route path="*" element={<NothingFound/>} />
      </Routes>
    </div>
  );
}
 
export default Walkthrough;