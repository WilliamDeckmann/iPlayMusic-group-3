const RectangleImg = (Size, Src, Alt) => {
    // skal kunne have to størrelser mellem, stor (til brug ift. slider animation eventuelt)
  return (
    <>
      <img src={Src} alt={Alt} />
    </>
  );
};

export default RectangleImg;
