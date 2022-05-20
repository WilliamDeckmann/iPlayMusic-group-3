// Conponents
import { useState } from 'react';
import HeadingSmall from '../subComponents/HeadingSmall';
import TextTiny from '../subComponents/TextTiny';

const MusicCard = (props) => {
  const [state, settState] = useState(false);

  const ChangeState = () => {
    settState(!state);
  };

  return (
    <div
      key={props.key}
      className='grid items-center overflow-hidden rounded-lg cursor-pointer'
      style={{ gridTemplateColumns: 'auto 1fr' }}
      onClick={ChangeState}
    >
      <div className={!state ? 'pr-4' : 'p-7 bg-black'}>{props.content}</div>
      <article
        className={
          !state
            ? 'h-full flex justify-between items-center'
            : 'h-full flex justify-between items-center p-4 pr-3 bg-gradient-to-r from-GradientRedOne to-GradientRedTwo text-white'
        }
      >
        <section className='flex flex-col gap-1 font-bold'>
          <HeadingSmall
            text={props.title}
            color={!state ? '#341931' : '#FFFFFF'}
            weight='600'
          />
          <TextTiny
            text={props.artist}
            color={!state ? '#EE0979' : '#FFFFFF'}
            weight='200'
          />
        </section>
        <TextTiny
          text={props.info}
          color={!state ? '#EE0979' : '#FFFFFF'}
          weight='200'
        />
      </article>
    </div>
  );
};

export default MusicCard;
