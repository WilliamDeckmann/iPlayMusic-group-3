const Welcome = () => {
  return (
    <>
      <div class='h-[768px] w-full bg-BleachedCedar'>
        <div class='flex justify-center relative'>
          <img
            src='dark.png'
            class='w-[150px] small:mt-[70%] large:mt-[50%] tablet:mt-[30%] laptopS:mt-[25%] laptopL:mt-[17%] 4K:mt-[10%] absolute'
          ></img>
          <h2 class='text-white text-[32px] font-Poppins font-bold small:mt-[130%] medium:mt-[120%] large:mt-[95%] tablet:mt-[55%] laptopS:mt-[42%] laptopL:mt-[30%] 4K:mt-[17%] absolute'>
            iPlayMusic
          </h2>
        </div>
      </div>
    </>
  );
};

export default Welcome;