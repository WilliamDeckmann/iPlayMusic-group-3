const HeadingMedium = (props) => {
  return (
    <h4 className="text-medium font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </h4>
  );
}
 
export default HeadingMedium;