const HeadingGiant = (props) => {
  return (
    <h1 className="text-giant font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </h1>
  );
}
 
export default HeadingGiant;