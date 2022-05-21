const HeadingBig = (props) => {
  return (
    <h3 className="text-big font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
      
    </h3>
  );
}
 
export default HeadingBig;