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

// Text component imports: (only for testing)
import HeadingGiant from './subComponents/HeadingGiant';
import HeadingLarge from './subComponents/HeadingLarge';
import HeadingBig from './subComponents/HeadingBig';
import HeadingMedium from './subComponents/HeadingMedium';
import HeadingSmall from './subComponents/HeadingSmall';
import TextSmall from './subComponents/TextSmall';
import TextTiny from './subComponents/TextTiny';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Toggle from './context/ThemeToggle';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/walkthrough' element={<Walkthrough />}>
          <Route exact path='/walkthrough:id' element={<Walkthrough />} />
        </Route>
      </Routes>

      {/* <TopNav /> */}
      <Routes>
        <Route exact path='/player/:id' element={<Player />} />
        <Route exact path='/events-feed' element={<EventsFeed />} />
        <Route exact path='/latest-trends' element={<LatestTrends />} />
        <Route exact path='/playlists' element={<Playlists />} />
        <Route exact path='/featured' element={<Featured />} />
        <Route exact path='/categories' element={<Categories />} />
        <Route exact path='/all-songs' element={<AllSongs />} />
        <Route exact path='/all-artists' element={<AllArtists />} />
        <Route exact path='/all-albums' element={<AllAlbums />} />
        <Route exact path='/album-details/:id' element={<AlbumDetails />} />
        <Route path='*' element={<NothingFound />} />
      </Routes>
      <BottomNav />

      {/* Text component examples: (only for testing) */}
      {/* <HeadingGiant text='HeadingGiant: 36px' color='red' weight='600' />
      <HeadingLarge text='HeadingGiant: 32px' color='red' weight='600' />
      <HeadingBig text='HeadingBig: 24px' color='red' weight='600' />
      <HeadingMedium text='HeadingMedium: 20px' color='red' weight='600' />
      <HeadingSmall text='HeadingSmall: 15px' color='red' weight='600' />
      <TextSmall text='TextSmall: 15px' color='red' weight='600' />
      <TextTiny text='TextSmall: 12px' color='red' weight='600' /> */}
      {/* <Toggle /> */}
    </div>
  );
}

export default App;
