// Components
import HeadingGiant from '../subComponents/HeadingGiant';
import AnchorList from "../components/AnchorList";

// Templates
import PlayerList from "../templates/PlayerList";

const AllSongs = () => {
  const array = [
    {
      id: "BillieJean",
      title: "Billie Jean",
      artist: "Micheal Jackson",
      time: "--",
      link: "/album-details/billie-jean",
    },
    {
      id: "NeverGonnaGiveYouUp",
      title: "Never Gonna Give You Up",
      artist: "Rick Ashley",
      time: "--",
      link: "/album-details/never-gonna-give-you-up",
    },
    {
      id: "Africa",
      title: "Africa",
      artist: "Toto",
      time: "--",
      link: "/album-details/africa",
    },
    {
      id: "TakeOnMe",
      title: "Take On Me",
      artist: "A-ha",
      time: "--",
      link: "/album-details/take-on-me",
    },
    {
      id: "MamaMia",
      title: "Mama Mia",
      artist: "ABBA",
      time: "--",
      link: "/album-details/mamma-mia",
    },
  ];

  return (
    <div>
      <section className="px-6 pt-6">
        <HeadingGiant text='All Songs' />
      </section>
      <section className="p-6 pr-4 flex gap-4">
        <PlayerList array={array} />
        <AnchorList/>
      </section>
    </div>
  );
}
 
export default AllSongs;