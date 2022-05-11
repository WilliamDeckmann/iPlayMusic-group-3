import HeadingSmall from "../subComponents/HeadingSmall";
import TextTiny from "../subComponents/TextTiny";

const MusicCard = (props) => {
  return (
    <div key={props.key} className="grid items-center overflow-hidden rounded-lg" style={{gridTemplateColumns: "auto 1fr"}}>
      <div className="pr-4">
        {props.content}
      </div>
      <article className="flex justify-between items-center">
        <section className="flex flex-col gap-1">
          <HeadingSmall text={props.title} color="#341931" weight="600"/>
          <TextTiny text={props.artist} color="#341931" weight="200"/>
        </section>
        <TextTiny text={props.info} color="#341931" weight="200"/>
      </article>
    </div>
  );
}
 
export default MusicCard;