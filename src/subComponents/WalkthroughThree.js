import Swirly from '../subComponents/Swirly';
import HeadingBig from '../subComponents/HeadingBig';
import TextTiny from '../subComponents/TextTiny';

const WalkThree = () => {
  return (
    <div>
      <div class='absolute w-[500px] ml-[-30%] mt-[-20%]'>
        <Swirly />
      </div>
      <div class='text-white font-bold mt-[50%]'>
        <HeadingBig text="No Music No Life"/>
      </div>
      <div class='text-white text-[42px] font-semiBold'>
        <TextTiny />
      </div>
    </div>
  );
};

export default WalkThree;
