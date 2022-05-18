// Imports
import AudioPlayer from 'react-modular-audio-player';

// Styles
import '../styles/audioPlayer.css';

// Images
import Play from "../assets/play.png"
import Pause from "../assets/pause.png"
import RewindActive from "../assets/rewind_active.png"
import RewindInactive from "../assets/rewind_inactive.png"
import SkipActive from "../assets/skip_active.png"
import SkipInactive from "../assets/skip_inactive.png"
import Vinyl from "../assets/vinyl.png"
import SoundWave from "../assets/sound_wave.png"

// Components
import HeadingMedium from "../subComponents/HeadingMedium"
import TextSmall from "../subComponents/TextSmall"

const MusicPlayer = (props) => {
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
      style: {marginTop: "12px"},
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
    <div className='w-full grid justify-center' style={{gridTemplateColumns: "1fr", gridTemplateRows: "1fr auto auto", backgroundColor: "#FFFFFF"}}>
      <section className='py-6 flex justify-center items-center bg-center bg-contain bg-repeat-x' style={{backgroundImage: `url(${SoundWave})`}}>
        <img src={Vinyl} alt="Vinyl"  />
      </section>
      <article className='flex flex-col gap-3 items-center'>
        <HeadingMedium text="SongTitle" color="#341931" weight="600"/>
        <TextSmall text="Artist" color="#341931" weight="200"/>
      </article>
      <div className='w-full p-6'>
        <AudioPlayer
          // Setup
          audioFiles={props.array}
          playerWidth="100%"
          iconSize="auto"
          fontSize="15px"
          fontColor="#341931"
          fontFamily="Poppins"
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
    </div>
  );
};

export default MusicPlayer;
