import LoginInput from '../components/LoginInput';
import OneTouchLogin from '../components/OneTouchLogin';
import HeadingGiant from '../subComponents/HeadingGiant';
import KeyIcon from '../subComponents/KeyIcon';
import LongBtn from '../subComponents/LongBtn';
import UserIcon from '../subComponents/UserIcon';

const Login = () => {
  return (
    <>
      <div class='w-[100%] dark:text-black dark:bg-Awesome p-5 h-full flex flex-col justify-evenly content-center'>
        <HeadingGiant text='Log In' color='white' weight='600' />

        <form
          action='submit'
          className='flex flex-col justify-between gap-5 pt-36'
        >
          <LoginInput
            label='Username'
            placeholder='Enter your username'
            icon={<UserIcon />}
          />
          <LoginInput
            label='Password'
            placeholder='Enter your password'
            icon={<KeyIcon />}
          />
        </form>

        <LongBtn className='dark:bg-Awesome' text='Log In' />

        <OneTouchLogin />
      </div>
    </>
  );
};

export default Login;