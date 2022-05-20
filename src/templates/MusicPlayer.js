// Imports
import AudioPlayer from 'react-modular-audio-player';

// Styles
import '../styles/audioPlayer.css';

// Images
import Play from '../assets/play.png';
import Pause from '../assets/pause.png';
import RewindActive from '../assets/rewind_active.png';
import RewindInactive from '../assets/rewind_inactive.png';
import SkipActive from '../assets/skip_active.png';
import SkipInactive from '../assets/skip_inactive.png';
import Vinyl from '../assets/vinyl.png';
import SoundWave from '../assets/sound_wave_pink.png';

// Components
import HeadingMedium from '../subComponents/HeadingMedium';
import TextSmall from '../subComponents/TextSmall';
import TopNav from '../components/TopNav';
import Playlists from '../pages/Playlists';

import { motion } from 'framer-motion';

const MusicPlayer = (props) => {
  let rearrangedPlayer = [
    {
      className: 'tier-top',
      style: {},
      innerComponents: [
        {
          type: 'seek',
          style: {},
        },
      ],
    },
    {
      className: 'tier-middle',
      style: { marginTop: '12px' },
      innerComponents: [
        {
          type: 'time',
          style: { width: 'fit-content', color: '#EE0979' },
        },
      ],
    },
    {
      className: 'tier-bottom',
      style: { display: 'flex', gap: '25px', justifyContent: 'center' },
      innerComponents: [
        {
          type: 'rewind',
          style: { width: 'fit-content' },
        },
        {
          type: 'play',
          style: {
            width: 'fit-content',
            padding: '20px',
            borderRadius: '100%',
            background: 'linear-gradient(#EE0979, #FF6A00)',
          },
        },
        {
          type: 'forward',
          style: { width: 'fit-content' },
        },
      ],
    },
  ];

  return (
    <div
      className='w-full grid justify-center h-[100%] bg-white dark:bg-BleachedCedar'
      style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr auto auto' }}
    >
      <motion.section
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='py-6 flex justify-center items-center bg-center bg-contain bg-repeat-x opacity-0'
        style={{ backgroundImage: `url(${SoundWave})` }}
      >
        <div className='absolute h-[115px] w-[115px] rounded-full animate-ping bg-DarkHotPink opacity-[70%] ml-[0px] mt-[0px]' />
        <img src={Vinyl} alt='Vinyl' className='w-[200px]' />
      </motion.section>
      <article className='flex flex-col gap-3 items-center'>
        <HeadingMedium text='Title' color='' weight='600' />
        <TextSmall text='Artist' color='' weight='200' />
      </article>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='opacity-0 w-full p-6'
      >
        <AudioPlayer
          // Setup
          audioFiles={props.array}
          playerWidth='100%'
          iconSize='auto'
          fontSize='15px'
          fontColor=''
          fontFamily='Poppins'
          hideLoop
          hideName
          // Icons
          playIcon={Play}
          playHoverIcon={Play}
          pauseIcon={Pause}
          pauseHoverIcon={Pause}
          rewindIcon={RewindActive}
          rewindHoverIcon={RewindInactive}
          forwardIcon={SkipActive}
          forwardHoverIcon={SkipInactive}
          // Layout
          rearrange={rearrangedPlayer}
        />
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
