// Components
import PlayerCard from '../components/PlayerCard';
import TopNav from '../components/TopNav';
import HeadingGiant from '../subComponents/HeadingGiant';

const Playlists = () => {
  const array = [
    {
      id: 'BillieJean',
      title: 'Billie Jean',
      artist: 'Micheal Jackson',
      time: '4:55',
      link: '/player/billie-jean',
      
    },
    {
      id: 'NeverGonnaGiveYouUp',
      title: 'Never Gonna Give You Up',
      artist: 'Rick Ashley',
      time: '4:55',
      link: '/player/never-gonna-give-you-up',
    },
    {
      id: 'Africa',
      title: 'Africa',
      artist: 'Toto',
      time: '4:55',
      link: '/player/africa',
    },
    {
      id: 'TakeOnMe',
      title: 'Take On Me',
      artist: 'A-ha',
      time: '4:55',
      link: '/player/take-on-me',
    },
    {
      id: 'MamaMia',
      title: 'Mama Mia',
      artist: 'ABBA',
      time: '4:55',
      link: '/player/mamma-mia',
    },
  ];

  return (
    <div className='w-full h-[100%] dark:bg-BleachedCedar'>
      <div className='relative overflow-hidden'>
        <TopNav />
        {/* <img
          src='/assets/sound-wave.png'
          class='absolute mt-[-40px] large:w-[600px] large:h-[500px] tablet:w-[1100px] tablet:h-[500px] large:object-fill'
        /> */}
        <div className='p-6 z-20'>
          <HeadingGiant text='Playlists' />
        </div>
      </div>
      <div className='absolute  top-0 w-110% ml-[-30px] z-0 overflow-hidden'></div>
      <ul className='p-6 flex flex-col gap-4 '>
        {array.map((song) => (
          <div className=''>
            <PlayerCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              time={song.time}
              link={song.link}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
