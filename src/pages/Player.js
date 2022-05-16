// Imports
import AudioPlayer from 'react-modular-audio-player';
//import AudioPlayer from 'react-h5-audio-player';
//import 'react-h5-audio-player/lib/styles.css';

// Styles
import '../styles/reactH5AudioPlayer.css';
import '../styles/audioPlayer.css';

// Audio
import NeverGonnaGiveYouUp from '../music/never_gonna_give_you_up.mp3';
import Africa from '../music/africa.mp3';

// Images
import Play from "../assets/play.png"
import Pause from "../assets/pause.png"
import RewindActive from "../assets/rewind_active.png"
import RewindInactive from "../assets/rewind_inactive.png"
import SkipActive from "../assets/skip_active.png"
import SkipInactive from "../assets/skip_inactive.png"
import Vinyl from "../assets/vinyl.png"
import SoundWave from "../assets/sound_wave.png"

// Icons
import {
  IoMdPlay,
  IoMdPause,
  IoIosSkipBackward,
  IoIosSkipForward,
  IoMdFastforward,
} from 'react-icons/io';

// Components
import HeadingMedium from "../subComponents/HeadingMedium"
import TextSmall from "../subComponents/TextSmall"

const Player = () => {
  const playlist = [
    { src: NeverGonnaGiveYouUp,
      title: "Never Gonna Give You Up",
      artist: "Rick Ashley" },
    { src: Africa,
      title: "Africa",
      artist: "Toto" }
  ];

  let rearrangedPlayer = [
    {
      className: "tier-top",
      style: {},
      innerComponents: [
        {
          type: "seek",
          style: {},
        },
      ]
    },
    {
      className: "tier-middle",
      style: {marginTop: "4px"},
      innerComponents: [
        {
          type: "time",
          style: {width: "fit-content"},
        },
      ]
    },
    {
      className: "tier-bottom",
      style: {display: "flex", gap: "25px", justifyContent: "center"},
      innerComponents: [
        {
          type: "rewind",
          style: {width: "fit-content"},
        },
        { 
          type: "play",
          style: {width: "fit-content", padding: "20px", borderRadius: "100%", background: 'linear-gradient(#EE0979, #FF6A00)'},
        },
        {
          type: "forward",
          style: {width: "fit-content"},
        },
      ]
    }
  ]

  return (
    <div className='w-full grid justify-center' style={{gridTemplateColumns: "1fr", gridTemplateRows: "1fr auto auto"}}>
      <section className='py-6 flex justify-center items-center bg-center bg-contain bg-repeat-x' style={{backgroundImage: `url(${SoundWave})`}}>
        <img src={Vinyl} alt="Vinyl" />
      </section>
      <article className='flex flex-col gap-3 items-center'>
        <HeadingMedium text="SongTitle" color="#341931" weight="600"/>
        <TextSmall text="Artist" color="#341931" weight="200"/>
      </article>
      <div className='w-full p-6'>
        <AudioPlayer
          // Setup
          audioFiles={playlist}
          playerWidth="100%"
          iconSize="auto"
          fontSize="15px"
          fontColor="#341931"
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
      </div>
      {/* <AudioPlayer
        autoPlay={true}
        autoPlayAfterSrcChange={true}
        src={Africa} //'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' //'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        progressJumpStep={1000}
        onError={() => console.log('onError')}
        onPlayError={() => console.log('onPlayError')}
        showSkipControls={true}
        showJumpControls={true}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        customIcons={{
          play: (
            <div
              className='p-5 rounded-full cursor-pointer'
              style={{ background: 'linear-gradient(#EE0979, #FF6A00)' }}
            >
              <IoMdPlay color='#FFFFFF' size='36px' />
            </div>
          ),
          pause: (
            <div
              className='p-5 rounded-full cursor-pointer'
              style={{ background: 'linear-gradient(#EE0979, #FF6A00)' }}
            >
              <IoMdPause color='#FFFFFF' size='36px' />
            </div>
          ),
          previous: (
            <IoIosSkipBackward size='26px' style={{ fill: 'url(#gradient)' }} />
          ),
          rewind: (
            <IoMdFastforward size='26px' style={{ fill: '#341931', transform: "rotate(180deg)" }} />
          ),
          forward: (
            <IoMdFastforward size='26px' style={{ fill: '#341931' }} />
          ),
          next: (
            <IoIosSkipForward size='26px' style={{ fill: 'url(#gradient)' }} />
          ),
        }}
      /> */}
    </div>
  );
};

export default Player;
