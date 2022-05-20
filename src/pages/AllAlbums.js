// Imports
import ScrollContainer from 'react-indiana-drag-scroll'

// Components
import HeadingGiant from '../subComponents/HeadingGiant';
import SectionHeader from '../components/SectionHeader';

// Templates
import AlbumList from '../templates/AlbumList';

// Images
import AbbeyRoad from '../assets/abbey_road.jpg';

// Styles
import '../styles/aliceCarousel.css';

const AllAlbums = () => {
  const array = [
    {
      id: 'BillieJean',
      title: 'Billie Jean',
      artist: 'Micheal Jackson',
      count: '0',
      link: '/album-details/billie-jean',
      image: AbbeyRoad,
    },
    {
      id: 'NeverGonnaGiveYouUp',
      title: 'Never Gonna Give You Up',
      artist: 'Rick Ashley',
      count: '0',
      link: '/album-details/never-gonna-give-you-up',
      image: AbbeyRoad,
    },
    {
      id: 'Africa',
      title: 'Africa',
      artist: 'Toto',
      count: '0',
      link: '/album-details/africa',
      image: AbbeyRoad,
    },
    {
      id: 'TakeOnMe',
      title: 'Take On Me',
      artist: 'A-ha',
      count: '0',
      link: '/album-details/take-on-me',
      image: AbbeyRoad,
    },
    {
      id: 'MamaMia',
      title: 'Mama Mia',
      artist: 'ABBA',
      count: '0',
      link: '/album-details/mamma-mia',
      image: AbbeyRoad,
    },
  ];

  return (
    <div className='bg-white dark:bg-BleachedCedar h-[100%]'>
      <section className='p-6'>
        <HeadingGiant text='All Albums' />
      </section>
      <section className='pb-9'>
        <ScrollContainer className="flex overflow-hidden">
          <img src={AbbeyRoad} alt="Album Cover" className=' w-[130px] ml-6 box-content rounded-lg' />
          <img src={AbbeyRoad} alt="Album Cover" className='w-[130px] ml-4 box-content rounded-lg' />
          <img src={AbbeyRoad} alt="Album Cover" className='w-[130px] ml-4 box-content rounded-lg' />
          <img src={AbbeyRoad} alt="Album Cover" className='w-[130px] ml-4 box-content rounded-lg' />
          <img src={AbbeyRoad} alt="Album Cover" className='w-[130px] ml-4 mr-6 box-content rounded-lg' />
        </ScrollContainer>
      </section>
      <section className='px-6'>
        <SectionHeader text='Featured Releases' link='/all-albums' />
      </section>
      <section className='p-6 pr-4 flex gap-4'>
        <AlbumList array={array} />
      </section>
    </div>
  );
};

export default AllAlbums;
