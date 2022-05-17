import HeadingMedium from './HeadingMedium';
import { IoEllipsisHorizontal } from "react-icons/io5";

const CategoryCard = (props) => {
  return (
    <div
      className='w-[95%] h-[60px] rounded-lg font-Poppins flex justify-between items-center px-[30px] hover:h-[90px] transition-[2s]'
      style={{
        color: props.color,
        background: props.background,
        fontWeight: props.weight,
      }}
    >
      {props.text}
      <div className='text-3xl'>
      <IoEllipsisHorizontal/>
      </div>
    </div>
  );
};

export default CategoryCard;
