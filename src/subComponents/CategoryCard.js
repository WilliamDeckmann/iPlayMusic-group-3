import HeadingMedium from './HeadingMedium';

const CategoryCard = (props) => {
  return (
    <div
      className='w-[95%] h-[60px] rounded-lg font-Poppins'
      style={{
        color: props.color,
        background: props.background,
        fontWeight: props.weight,
      }}
    >
      {props.text}
      <div></div>
    </div>
  );
};

export default CategoryCard;
