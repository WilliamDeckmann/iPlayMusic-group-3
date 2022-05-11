import MusicCard from './MusicCard';
import { IoMdPlay } from 'react-icons/io';
import { Component } from 'react'
import ReactHowler from 'react-howler'
import { useState } from 'react';
import NeverGonnaGiveYouUp from "../music/never_gonna_give_you_up.mp3";

const PlayerCard = (props) => {
  const { isPlaying, setIsPlaying } = useState(true)

  return (
    <MusicCard
      key={props.key}
      title={props.title}
      artist={props.artist}
      info={props.time}
      content={
        <button
          className="p-2 rounded-full cursor-pointer"
          style={{ background: 'linear-gradient(#EE0979, #FF6A00)' }}
          onClick={() => setIsPlaying(true)}
        >
          <IoMdPlay color='#FFFFFF' size='10px' />
          <ReactHowler
            src={NeverGonnaGiveYouUp}
            playing={isPlaying}
          />
        </button>
      }
    />
  );
};

export default PlayerCard;
