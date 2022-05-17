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
      style={{ gridTemplateColumns: 'auto 1fr pointer' }}
      onClick={ChangeState}
    >
      <div className={!state ? 'pr-4' : 'p-7'}>{props.content}</div>
      <article
        className={
          !state
            ? 'flex justify-between items-center'
            : 'flex justify-between items-center p-4 pr-3'
        }
      >
        <section className='flex flex-col gap-1'>
          <HeadingSmall text={props.title} color='#341931' weight='600' />
          <TextTiny text={props.artist} color='#341931' weight='200' />
        </section>
        <TextTiny text={props.info} color='#341931' weight='200' />
      </article>
    </div>
  );
};

export default MusicCard;
