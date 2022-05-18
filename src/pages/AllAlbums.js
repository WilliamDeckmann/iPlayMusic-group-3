// Components
import HeadingGiant from '../subComponents/HeadingGiant';
import SectionHeader from '../components/SectionHeader';

// Templates
import AlbumList from "../templates/AlbumList";

// image-resolution
import AbbeyRoad from "../assets/abbey_road.jpg"

const AllAlbums = () => {
  const array = [
    {
      id: "BillieJean",
      title: "Billie Jean",
      artist: "Micheal Jackson",
      count: "0",
      link: "/player/billie-jean",
      image: AbbeyRoad,
    },
    {
      id: "NeverGonnaGiveYouUp",
      title: "Never Gonna Give You Up",
      artist: "Rick Ashley",
      count: "0",
      link: "/player/never-gonna-give-you-up",
      image: AbbeyRoad,
    },
    {
      id: "Africa",
      title: "Africa",
      artist: "Toto",
      count: "0",
      link: "/player/africa",
      image: AbbeyRoad,
    },
    {
      id: "TakeOnMe",
      title: "Take On Me",
      artist: "A-ha",
      count: "0",
      link: "/player/take-on-me",
      image: AbbeyRoad,
    },
    {
      id: "MamaMia",
      title: "Mama Mia",
      artist: "ABBA",
      count: "0",
      link: "/player/mamma-mia",
      image: AbbeyRoad,
    },
  ];

  return (
    <div>
      <section className="p-6">
        <HeadingGiant text='All Songs' />
      </section>
      <section className="pb-9">
        "image slider goes her..."
      </section>
      <section className="px-6">
        <SectionHeader text="Featured Releases" link="/all-albums" />
      </section>
      <section className="p-6 pr-4 flex gap-4">
        <AlbumList array={array} />
      </section>
    </div>
  );
}
 
export default AllAlbums;