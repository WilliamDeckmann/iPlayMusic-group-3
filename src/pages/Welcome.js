import { motion } from 'framer-motion';
import querystring from "querystring"

const Welcome = () => {

  var queryParams = querystring.stringify({
    response_type: 'code',
    client_id: 'c0d11adcca17461385d8ec0224593625',
    scope: 'user-read-private user-read-email',
    redirect_uri: 'http://localhost:8888/callback',
    state: 'wgwrgwh6j63wregorejgowteowjgeo'
})
  return (
    <>
      <div class='h-[768px] w-full dark:bg-BleachedCedar bg-white overflow-hidden'>
        <a href={`https://accounts.spotify.com/authorize?${queryParams}`}>
          <motion.div animate={{ opacity: 1 }} transition={{ duration: 1.5 }} class='flex justify-center relative opacity-0'>
            <img
              src='/assets/dark.png'
              class='w-[160px] small:mt-[70%] large:mt-[50%] tablet:mt-[30%] laptopS:mt-[25%] laptopL:mt-[17%] 4K:mt-[10%] absolute'
            ></img>
            <img
              src='/assets/iplay.png'
              class='w-[160px] small:mt-[70%] large:mt-[50%] tablet:mt-[30%] laptopS:mt-[25%] laptopL:mt-[17%] 4K:mt-[10%] absolute dark:hidden'
            ></img>
            <h2 class='text-black text-[32px] dark:text-white font-Poppins font-bold small:mt-[130%] medium:mt-[120%] large:mt-[95%] tablet:mt-[55%] laptopS:mt-[42%] laptopL:mt-[30%] 4K:mt-[17%] absolute'>
              iPlayMusic
            </h2>
          </motion.div>
        </a>
      </div>
    </>
  );
};

export default Welcome;
