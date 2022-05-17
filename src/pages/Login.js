import LoginForm from '../components/LoginForm';
import OneTouchLogin from '../components/OneTouchLogin';
import HeadingGiant from '../subComponents/HeadingGiant';

const Login = () => {
  return (
    <>
      <div class='w-[100%] dark:text-black dark:bg-Awesome p-5 h-full flex flex-col justify-evenly content-center'>
        <HeadingGiant text='Log In' color='white' weight='600' />

        <LoginForm />



        <OneTouchLogin />
      </div>
    </>
  );
};

export default Login;