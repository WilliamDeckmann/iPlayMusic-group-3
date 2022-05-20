import TextSmall from "./TextSmall";

const HashtagButton = (props) => {
  const text = props.text.toLowerCase();

  return (
    <button className="p-3 bg-Awesome rounded-full">
      <TextSmall text={"#" + text} color="#FFFFFF" weight="600" />
    </button>
  );
}
 
export default HashtagButton;