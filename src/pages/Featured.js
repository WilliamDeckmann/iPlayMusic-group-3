import React from 'react';
import TopNav from '../components/TopNav';
// import { lazy } from 'react';
import FeaturedCard from '../subComponents/FeaturedCard';
import HeadingGiant from '../subComponents/HeadingGiant';
import HeadingLarge from '../subComponents/HeadingLarge';
import TextSmall from '../subComponents/TextSmall';
import TextTiny from '../subComponents/TextTiny';

// const FeaturedCard = React.lazy(() => import('../subComponents/FeaturedCard'));

const Featured = () => {
  return (
    <div class='h-[1080px] w-full dark:bg-BleachedCedar bg-white overflow-hidden'>
      <TopNav/>
      <div class='ml-[8%]'>
        <HeadingGiant text='Featured' />
      </div>
      <div class='flex justify-center mt-[40px] relative overflow-scroll'>
        <div class='grid gap-9 '>
          <div>
            <FeaturedCard />
            <div class='absolute small:mt-[-60%] medium:mt-[-45%] large:mt-[-40%] tablet:mt-[-15%] ml-[3%]'>
              <HeadingLarge
                text='The Greatest Showman'
                color='white'
                weight='bold'
              />
              <div class='mt-[10px]'>
                <TextSmall text='Soundtrack' color='white' />
              </div>
            </div>
          </div>
          <div>
            <FeaturedCard />
            <div class='absolute small:mt-[-60%] medium:mt-[-45%] large:mt-[-40%] tablet:mt-[-15%] ml-[3%]'>
              <HeadingLarge
                text='The Evilest Snowman'
                color='white'
                weight='bold'
              />
              <div class='mt-[10px]'>
                <TextSmall text='Soundtrack' color='white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
