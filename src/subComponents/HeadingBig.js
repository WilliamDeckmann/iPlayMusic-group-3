const HeadingBig = (props) => {
  return (
    <h3 className="text-big font-Poppins dark:text-white text-BleachedCedar" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
      
    </h3>
  );
}
 
export default HeadingBig;