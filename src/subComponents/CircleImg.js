const CircleImg = (Size, Src, Alt) => {
  // skal kunne have to størrelser: lille (bruges til Trending card om hvor mange der taler om noget), stor bruges i all artists, featured artist.
  return (
    <>
      <img src={Src} alt={Alt} />
    </>
  );
};

export default CircleImg;
