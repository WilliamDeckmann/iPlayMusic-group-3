const LongBtn = (props) => {
    return (
      <>
        <input
          type='submit'
          value={props.text}
          className='rounded-full border-DarkHotPink border-2 uppercase text-DarkHotPink p-4 w-[90%] my-16 text-sm font-bold tracking-widest '
        />
      </>
    );
  };
  
  export default LongBtn;
  