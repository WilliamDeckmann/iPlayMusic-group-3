import Swirly from '../subComponents/Swirly';
import HeadingBig from '../subComponents/HeadingBig';
import TextTiny from '../subComponents/TextTiny';

const WalkThree = () => {
  return (
    <div>
      <div class='absolute small:w-[500px] medium:w-[550px] large:w-[600px] tablet:w-[1100px] small:ml-[-25%] medium:ml-[-20%] large:ml-[-20%] tablet:ml-[-20%] mt-[-2%] tablet:mt-[-10%] top-0 '>
        <img src="/assets/Asset 4.png" class="tablet:w-[1000px] tablet:h-[450px]"/>
      </div>
      <div class='absolute small:w-[500px] medium:w-[550px] large:w-[600px] tablet:w-[1100px] small:ml-[-25%] medium:ml-[-20%] large:ml-[-20%] tablet:ml-[-20%] mt-[-2%] tablet:mt-[-10%] top-0 dark:hidden'>
        <img src="/assets/Asset -3.png" class="tablet:w-[1000px] tablet:h-[450px]" />
      </div>
      <div class='text-black dark:text-white font-bold small:mt-[-0%] medium:mt-[15%] large:mt-[25%] tablet:mt-[55%]'>
        <HeadingBig text="Peace Love Music"/>
      </div>
      <div class='text-black dark:text-white text-[42px] font-semiBold'>
        <TextTiny />
      </div>
    </div>
  );
};

export default WalkThree;
