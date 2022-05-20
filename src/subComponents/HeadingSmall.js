const HeadingSmall = (props) => {
  return (
    <h5 className="text-small font-Poppins font-medium" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </h5>
  );
}
 
export default HeadingSmall;