// Templates
import MusicPlayer from '../templates/MusicPlayer';

// Audio
import BillieJean from '../music/billie_jean.mp3';
import NeverGonnaGiveYouUp from '../music/never_gonna_give_you_up.mp3';
import Africa from '../music/africa.mp3';
import TakeOnMe from '../music/take_on_me.mp3';
import MamaMia from '../music/mamma_mia.mp3';

import { motion } from 'framer-motion';

const Player = () => {
  const playlist = [
    {
      src: BillieJean,
      title: 'Billie Jean',
      artist: 'Micheal Jackson',
    },
    {
      src: NeverGonnaGiveYouUp,
      title: 'Never Gonna Give You Up',
      artist: 'Rick Ashley',
    },
    {
      src: Africa,
      title: 'Africa',
      artist: 'Toto',
    },
    {
      src: TakeOnMe,
      title: 'Take On Me',
      artist: 'A-ha',
    },
    {
      src: MamaMia,
      title: 'Mama Mia',
      artist: 'ABBA',
    },
  ];

  return (
    <div>
      <MusicPlayer array={playlist} />
    </div>
  );
};

export default Player;
