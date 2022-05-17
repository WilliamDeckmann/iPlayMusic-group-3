import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { formContext } from '../context/FormProvider';
// import LoginInput from '../components/LoginInput';
import KeyIcon from '../subComponents/KeyIcon';
import UserIcon from '../subComponents/UserIcon';
import LongBtn from '../subComponents/LongBtn';

let schema = yup.object().shape({
  username: yup
    .string()
    .required()
    .matches(/^[A-Za-zÀ-ÿ -]+$/, ''),
  password: yup
    .string()
    .required('Please provide a valid password')
    .oneOf([yup.ref('password'), null])
    .min(8, 'Password needs to be a minimum of 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&=+_-])[A-Za-z\d@$!%*?&=+_-]{8,}$/,
      'At least one big & one small letter, one special character and a number'
    ),

  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

const LoginForm = () => {
  const [formCompleted, setFormCompleted] = useState(false);
  const { setFormdata } = useContext(formContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    setFormCompleted(true);
    setFormdata(data);
  };

  return (
    <>
      {formCompleted && console.log('Form completed')}

      <form
        action='submit'
        className='flex flex-col justify-between gap-5 pt-36'
        onSubmit={handleSubmit(handleData)}
      >
        {/* <LoginInput
          label='Username'
          placeholder='Enter your username'
          icon={<UserIcon />}
            registerName='username'
        //   {...register('username')}
          type='text'
        /> */}

        <div className='relative flex flex-col gap-5'>
          <label className='text-White text-xs pl-2 font-bold'>Username</label>
          <input
            className='dark:bg-Awesome text-xs placeholder-White font-light border-b-2 border-White pb-3'
            type='text'
            placeholder='Enter your username'
            {...register('username')}
          />
          <div className='absolute right-0 top-7 text-base'>
            <UserIcon />
          </div>
        </div>

        {errors.username && <p>{errors.username.message}</p>}

        {/* <LoginInput
          label='Password'
          placeholder='Enter your password'
          icon={<KeyIcon />}
            registerName='password'
        //   {...register('password')}
          type='password'
        /> */}

        <div className='relative flex flex-col gap-5'>
          <label className='text-White text-xs pl-2 font-bold'>Password</label>
          <input
            className='dark:bg-Awesome text-xs placeholder-White font-light border-b-2 border-White pb-3'
            type='password'
            placeholder='Enter your password'
            {...register('password')}
          />
          <div className='absolute right-0 top-7 text-base'>
            <KeyIcon />
          </div>
        </div>

        {errors.password && <p>{errors.password.message}</p>}

        <LongBtn className='dark:bg-Awesome' text='Log In' />
      </form>
    </>
  );
};

export default LoginForm;
