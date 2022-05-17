import Swirly from './Swirly';
import HeadingBig from './HeadingBig';
import TextTiny from './TextTiny';

const WalkthroughOne = () => {
  return (
    <div>
      <div class='absolute small:w-[500px] medium:w-[600px] large:w-[700px] tablet:w-[1100px] small:ml-[-25%] medium:ml-[-20%] large:ml-[-5%] tablet:ml-[-20%] mt-[-10%] large:mt-[-30%] tablet:mt-[-20%] top-0'>
        <img src="/assets/Asset 3.png" class="large:w-[600px] large:h-[500px] tablet:w-[1100px] tablet:h-[500px] large:object-fill animate-[spin_120s_ease-in-out_infinite]" />
      </div>
      <div class='absolute small:w-[500px] medium:w-[600px] large:w-[700px] tablet:w-[1100px] small:ml-[-25%] medium:ml-[-20%] large:ml-[-5%] tablet:ml-[-20%] mt-[-10%] large:mt-[-30%] tablet:mt-[-20%] top-0 dark:hidden'>
        <img src="/assets/Asset -4.png" class="large:w-[600px] large:h-[500px] tablet:w-[1100px] tablet:h-[500px] large:object-fill animate-[spin_120s_ease-in-out_infinite]" />
      </div>
      <div class='text-black dark:text-white font-bold small:mt-[-0%] medium:mt-[15%] large:mt-[25%] tablet:mt-[55%]'>
        <HeadingBig text="Where Words Fail, Music Speaks"/>
      </div>
      <div class='text-black dark:text-white text-[42px] font-semiBold'>
        <TextTiny />
      </div>
    
    </div>
  );
};

export default WalkthroughOne;


