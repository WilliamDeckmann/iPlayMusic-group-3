import FingerprintIcon from '../subComponents/FingerprintIcon';
import HeadingSmall from '../subComponents/HeadingSmall';

const OneTouchLogin = () => {
  return (
    <div className='flex flex-col justify-evenly w-full items-center mb-10'>
      <button className='my-5 rounded-full bg-White bg-opacity-60 p-4 w-min animate-pulse'>
        <FingerprintIcon />
      </button>
      <HeadingSmall text='One-Touch Login' weight='lighter' color='white' />
    </div>
  );
};

export default OneTouchLogin;
