const HeadingSmall = (props) => {
  return (
    <h5 className="text-small font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </h5>
  );
}
 
export default HeadingSmall;