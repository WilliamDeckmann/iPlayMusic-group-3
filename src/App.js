// Imports
import { Routes, Route } from 'react-router-dom';

// Pages
import Welcome from './pages/Welcome';
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
import AlbumDetails from './pages/AlbumDetails';
import NothingFound from './pages/NothingFound';
import Callback from './api/callback';

// Components
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import TokenProvider from './context/TokenContext';
import AlbumsProvider from './context/AlbumsContext';

function App() {
  return (
    <div>
      <TokenProvider>
        <AlbumsProvider>
          <Routes>
            <Route exact path='/' element={<Welcome />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/walkthrough' element={<Walkthrough />}>
              <Route exact path='/walkthrough:id' element={<Walkthrough />} />
            </Route>
            <Route path='/callback' element={<Callback/>}/>
          </Routes>

          <TopNav />
          <Routes>
            <Route exact path='/player/:id' element={<Player />} />
            <Route exact path='/events-feed' element={<EventsFeed />} />
            <Route exact path='/latest-trends' element={<LatestTrends />} />
            <Route exact path='/playlists' element={<Playlists />} />
            <Route exact path='/featured' element={<Featured />} />
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path='/all-songs' element={<AllSongs />} />
            <Route exact path='/all-artists' element={<AllArtists />} />
            <Route path='/all-albums' element={<AllAlbums />} />
            <Route exact path='/album-details/:id' element={<AlbumDetails />} />
            <Route path='*' element={<NothingFound />} />
          </Routes>
          <BottomNav />
        </AlbumsProvider>
      </TokenProvider>
    </div>
  );
}

export default App;
