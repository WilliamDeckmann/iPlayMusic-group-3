import Swirly from './Swirly';
import HeadingBig from './HeadingBig';
import TextTiny from './TextTiny';

const WalkthroughOne = () => {
  return (
    <div>
      <div class='absolute w-[500px] ml-[-30%] mt-[-20%]'>
        <Swirly />
      </div>
      <div class='text-white font-bold mt-[50%]'>
        <HeadingBig text="Where Words Fail, Music Speaks"/>
      </div>
      <div class='text-white text-[42px] font-semiBold'>
        <TextTiny />
      </div>
    
    </div>
  );
};

export default WalkthroughOne;


