const HeadingSmall = (props) => {
  return (
    <h5 className="text-small font-Poppins font-medium dark:text-white text-BleachedCedar" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </h5>
  );
}
 
export default HeadingSmall;