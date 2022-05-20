// Components
import PlayerCard from '../components/PlayerCard';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import HeadingGiant from '../subComponents/HeadingGiant';
import { motion } from 'framer-motion';
import LongBtn from '../subComponents/LongBtnPlay';

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
      time: '2:20',
      link: '/player/never-gonna-give-you-up',
    },
    {
      id: 'Africa',
      title: 'Africa',
      artist: 'Toto',
      time: '4:31',
      link: '/player/africa',
    },
    {
      id: 'TakeOnMe',
      title: 'Take On Me',
      artist: 'A-ha',
      time: '4:04',
      link: '/player/take-on-me',
    },
    {
      id: 'MamaMia',
      title: 'Mama Mia',
      artist: 'ABBA',
      time: '3:30',
      link: '/player/mamma-mia',
    },
  ];

  return (
    <div className='w-full h-[100%] dark:bg-BleachedCedar relative'>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='opacity-0'
      >
        <div className='absolute top-0 left-0 w-[100%]'>
          <TopNav />
        </div>
        <div className='mt-[80px] absolute'>
          <div className='p-6 mt-[-30px]'>
            <HeadingGiant text='Playlists' color='white' />
          </div>
        </div>
        <img
          src='/assets/sound-wave.png'
          class='mt-[-0px] large:w-[600px] large:h-[250px] tablet:w-[1100px] tablet:h-[300px] large:object-fill'
        />
      </motion.div>

      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className='opacity-0'
      >
        <ul className='p-6 flex flex-col gap-4 mt-[30px]'>
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
        <div className='flex justify-center mt-[-40px]'>
          <LongBtn text='Listen All' />
        </div>
      </motion.div>
      <div className='mt-[-5%]'>
        <BottomNav />
      </div>
    </div>
  );
};

export default Playlists;
