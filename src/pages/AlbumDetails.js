// Imports
import { useLocation } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll'

// Components
import HeadingGiant from '../subComponents/HeadingGiant';
import HeadingSmall from '../subComponents/HeadingSmall';
import TextSmall from '../subComponents/TextSmall';

// Templates
import PlayerList from '../templates/PlayerList';

// Images
import AbbeyRoad from '../assets/abbey_road.jpg';
import HashtagButton from '../subComponents/HashtagButton';

const AlbumDetails = () => {
  const location = useLocation();
  const path = location.pathname
    .replace('/', '')
    .replace('-', ' ')
    .replace('album', ' ')
    .replace('details', ' ')
    .replace('/', '')
    .toUpperCase();
  console.log(path);

  const array = [
    {
      id: 'BillieJean',
      title: 'Billie Jean',
      artist: 'Micheal Jackson',
      time: '--',
      link: '/player/billie-jean',
    },
    {
      id: 'NeverGonnaGiveYouUp',
      title: 'Never Gonna Give You Up',
      artist: 'Rick Ashley',
      time: '--',
      link: '/player/never-gonna-give-you-up',
    },
    {
      id: 'Africa',
      title: 'Africa',
      artist: 'Toto',
      time: '--',
      link: '/player/africa',
    },
    {
      id: 'TakeOnMe',
      title: 'Take On Me',
      artist: 'A-ha',
      time: '--',
      link: '/player/take-on-me',
    },
    {
      id: 'MamaMia',
      title: 'Mama Mia',
      artist: 'ABBA',
      time: '--',
      link: '/player/mamma-mia',
    },
  ];

  return (
    <div className='bg-white dark:bg-BleachedCedar'>
      <section
        className='h-[334px] pb-8 pt-2 flex flex-col justify-between bg-cover'
        style={{ backgroundImage: `url(${AbbeyRoad})` }}
      >
        <header className='px-6 flex flex-col gap-4'>
          <HeadingGiant text={path} color='#FFFFFF' />
          <HeadingSmall text={'0' + ' Songs'} color='#FFFFFF' />
        </header>
        <footer className='flex flex-col gap-4'>
          <div className='px-6'>
            <TextSmall text='Genre hashtags' color='#FFFFFF' />
          </div>
          <section>
            <ScrollContainer className="flex gap-2 whitespace-nowrap">
              <div className='ml-6'>
              <HashtagButton text="jazz" />
              </div>
              <div className='ml-2'>
              <HashtagButton text="hip-hop" />
              </div>
              <div className='ml-2 mr-6'>
              <HashtagButton text="funk" />
              </div>
            </ScrollContainer>
          </section>
        </footer>
      </section>
      <section className='px-6 pt-8'>
        <HeadingSmall text='All Songs' />
      </section>
      <section className='p-6'>
        <PlayerList array={array} />
      </section>
    </div>
  );
};

export default AlbumDetails;
