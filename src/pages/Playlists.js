// Components
import PlayerCard from "../components/PlayerCard";

const Playlists = () => {
  const array = [
    {
      id: "BillieJean",
      title: "Billie Jean",
      artist: "Micheal Jackson",
      link: "/player/billie-jean",
    },
    {
      id: "NeverGonnaGiveYouUp",
      title: "Never Gonna Give You Up",
      artist: "Rick Ashley",
      link: "/player/never-gonna-give-you-up",
    },
    {
      id: "Africa",
      title: "Africa",
      artist: "Toto",
      link: "/player/africa",
    },
    {
      id: "TakeOnMe",
      title: "Take On Me",
      artist: "A-ha",
      link: "/player/take-on-me",
    },
    {
      id: "MamaMia",
      title: "Mama Mia",
      artist: "ABBA",
      link: "/player/mamma-mia",
    },
  ];

  return (
    <div>
      <section>
        
      </section>
      <ul className="p-6 flex flex-col gap-4">
        {array.map(song => (
          <div>
            <PlayerCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              time="--"
              link={song.link}
            />
          </div>
        ))}
      </ul>
    </div>
    
  );
}
 
export default Playlists;