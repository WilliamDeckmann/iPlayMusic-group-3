import { filterProps } from "framer-motion";

const ListAnchor = (props) => {
  return (
    <a className="p-1 text-micro text-BleachedCedar uppercase" href={props.link}>
      {props.text}
    </a>
  );
}
 
export default ListAnchor;