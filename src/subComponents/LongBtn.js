const LongBtn = (props) => {
  return (
    <>
      <button className='rounded-full border-White border-2 uppercase text-White p-4 w-full my-16 text-sm font-bold tracking-widest'>
        {props.text}
      </button>
    </>
  );
};

export default LongBtn;
