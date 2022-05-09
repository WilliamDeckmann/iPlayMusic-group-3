import { Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Walkthrough from './pages/Walkthrough';
import Player from './pages/Player';
import EventsFeed from './pages/EventsFeed';
import LatestTrends from './pages/LatestTrends';
import Playlists from './pages/Playlists';
import Featured from './pages/Featured';
import Categories from './pages/Categories';
import AllSongs from './pages/AllSongs';
import AllArtists from './pages/AllArtists';
import AllAlbums from './pages/AllAlbums';


function App() {
  return (
    <div>
      App
      <Routes>
        <Route path="/" element={<div>Welcome</div>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/walkthrough" element={<Walkthrough/>} />
        <Route path="/player" element={<Player/>} />
        <Route path="/events-feed" element={<EventsFeed/>} />
        <Route path="/latest-trends" element={<LatestTrends/>} />
        <Route path="/playlists" element={<Playlists/>} />
        <Route path="/featured" element={<Featured/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/all-songs" element={<AllSongs/>} />
        <Route path="/all-artists" element={<AllArtists/>} />
        <Route path="/all-albums" element={<AllAlbums/>} />
      </Routes>
    </div>
  );
}

export default App;
