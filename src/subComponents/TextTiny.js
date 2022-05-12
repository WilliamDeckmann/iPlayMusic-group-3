const TextTiny = (props) => {
  return (
    <p className="text-tiny font-Poppins" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
      <br />Vivamus auctor dui dignissim, sollicitudin <br/> nunc ac, aliquam justo. Vestibulum<br/> pellentesque lacinia eleifend.
    </p>
  );
}
 
export default TextTiny;