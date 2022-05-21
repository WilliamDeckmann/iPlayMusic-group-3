import HeadingSmall from '../subComponents/HeadingSmall';
import ViewAll from './ViewAll';

const SectionHeader = (props) => {
  return (
    <section className='flex justify-between'>
      <HeadingSmall text={props.text} color='#341931'/>
      <ViewAll link={props.link} />
    </section>
  );
};

export default SectionHeader;
