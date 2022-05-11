const TextTiny = (props) => {
  return (
    <p className="text-tiny font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </p>
  );
}
 
export default TextTiny;