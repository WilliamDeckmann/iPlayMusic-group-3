const TextSmall = (props) => {
  return (
    <p className="text-small font-Poppins text-BleachedCedar dark:text-white" style={{color: props.color, fontWeight: props.weight}}>
      {props.text}
    </p>
  );
}
 
export default TextSmall;