// Components
import HeadingGiant from '../subComponents/HeadingGiant';

// Templates
import PlayerList from "../templates/PlayerList";

const Playlists = () => {
  const array = [
    {
      id: "BillieJean",
      title: "Billie Jean",
      artist: "Micheal Jackson",
      time: "--",
      link: "/player/billie-jean",
    },
    {
      id: "NeverGonnaGiveYouUp",
      title: "Never Gonna Give You Up",
      artist: "Rick Ashley",
      time: "--",
      link: "/player/never-gonna-give-you-up",
    },
    {
      id: "Africa",
      title: "Africa",
      artist: "Toto",
      time: "--",
      link: "/player/africa",
    },
    {
      id: "TakeOnMe",
      title: "Take On Me",
      artist: "A-ha",
      time: "--",
      link: "/player/take-on-me",
    },
    {
      id: "MamaMia",
      title: "Mama Mia",
      artist: "ABBA",
      time: "--",
      link: "/player/mamma-mia",
    },
  ];

  return (
    <div>
      <section className="px-6 pt-6">
        <HeadingGiant text='Playlists' />
      </section>
      <section className="p-6">
        <PlayerList array={array} />
      </section>
    </div>
    
  );
}
 
export default Playlists;