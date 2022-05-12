import Swirly from '../subComponents/Swirly';
import HeadingBig from '../subComponents/HeadingBig';
import TextTiny from '../subComponents/TextTiny';

const WalkTwo = () => {
  return (
    <div>
        test
      <div class='absolute w-[500px] ml-[-30%] mt-[-20%]'>
        <Swirly />
      </div>
      <div class='text-white font-bold mt-[50%]'>
        <HeadingBig />
      </div>
      <div class='text-white text-[42px] font-semiBold'>
        <TextTiny />
      </div>
    </div>
  );
};

export default WalkTwo;
