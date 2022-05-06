import { Routes, Route } from "react-router-dom";
import Player from './pages/Player';

function App() {
  return (
    <div className="App">
      App
      <Routes>
        <Route path="/" element={<Player/>} />
      </Routes>
    </div>
  );
}

export default App;
