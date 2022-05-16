const HeadingGiant = (props) => {
  return (
    <h1 className="text-giant font-Poppins text-transparent bg-clip-text bg-gradient-to-r from-GradientRedOne to-GradientRedTwo text-BleachedCedar font-bold" >
      {props.text}
    </h1>
  );
}
 
export default HeadingGiant;