const LoginInput = (props) => {
  return (
    <>
      <div className='relative flex flex-col gap-5'>
        <label className='text-White text-xs pl-2 font-bold'>
          {props.label}
        </label>
        <input
          className='dark:bg-Awesome text-xs placeholder-White font-light border-b-2 border-White pb-3'
          type={props.type}
          name='name'
          placeholder={props.placeholder}
        />
        <div className='absolute right-0 top-7 text-base'>{props.icon}</div>
      </div>
    </>
  );
};

export default LoginInput;
