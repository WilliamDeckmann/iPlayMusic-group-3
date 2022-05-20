import React from 'react';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Suspense } from 'react';
// import { lazy } from 'react';
// import FeaturedCard from '../subComponents/FeaturedCard';
import HeadingGiant from '../subComponents/HeadingGiant';
import HeadingLarge from '../subComponents/HeadingLarge';
import TextSmall from '../subComponents/TextSmall';
import TextTiny from '../subComponents/TextTiny';
import { motion } from 'framer-motion';

const FeaturedCard = React.lazy(() => import('../subComponents/FeaturedCard'));

const Featured = () => {
  return (
    <div class='h-[100%] w-full dark:bg-BleachedCedar bg-white overflow-hidden'>
      <TopNav />
      <div class='ml-[8%]'>
        <HeadingGiant text='Featured' />
      </div>
      <div class='flex justify-center mt-[20px] relative overflow-scroll'>
        <div class='grid gap-9 '>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            class='opacity-0'
          >
            <Suspense fallback={<div>Loading</div>}>
              <FeaturedCard image="../assets/night.webp"/>
            </Suspense>
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
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            class='opacity-0'
          >
            <Suspense fallback={<div>Loading</div>}>
              <FeaturedCard image="../assets/music1.jpg"/>
            </Suspense>
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
          </motion.div>
        </div>
      </div>
      <div className='mt-[5%]'>
        <BottomNav />
      </div>
    </div>
  );
};

export default Featured;
