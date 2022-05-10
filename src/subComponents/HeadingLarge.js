const HeadingLarge = (props) => {
  return (
    <h2 className="text-large font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </h2>
  );
}
 
export default HeadingLarge;