const LongBtn = (props) => {
  return (
    <>
      <input
        type='submit'
        value={props.text}
        className='rounded-full border-White border-2 uppercase text-White p-4 w-full my-16 text-sm font-bold tracking-widest'
      />
    </>
  );
};

export default LongBtn;
