const TextSmall = (props) => {
  return (
    <p className="text-small font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </p>
  );
}
 
export default TextSmall;