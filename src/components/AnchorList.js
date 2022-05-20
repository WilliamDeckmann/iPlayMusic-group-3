import ListAnchor from '../subComponents/ListAnchor';

const AnchorList = () => {
  const array = [
    {
      text: "a",
      link: "",
    },
    {
      text: "b",
      link: "",
    },
    {
      text: "c",
      link: "",
    },
    {
      text: "d",
      link: "",
    },
    {
      text: "e",
      link: "",
    },
    {
      text: "f",
      link: "",
    },
    {
      text: "g",
      link: "",
    },
    {
      text: "h",
      link: "",
    },
    {
      text: "i",
      link: "",
    },
    {
      text: "j",
      link: "",
    },
    {
      text: "k",
      link: "",
    },
    {
      text: "l",
      link: "",
    },
    {
      text: "m",
      link: "",
    },
    {
      text: "n",
      link: "",
    },
    {
      text: "o",
      link: "",
    },
    {
      text: "p",
      link: "",
    },
    {
      text: "q",
      link: "",
    },
    {
      text: "r",
      link: "",
    },
    {
      text: "s",
      link: "",
    },
    {
      text: "t",
      link: "",
    },
    {
      text: "u",
      link: "",
    },
    {
      text: "v",
      link: "",
    },
    {
      text: "w",
      link: "",
    },
    {
      text: "x",
      link: "",
    },
    {
      text: "y",
      link: "",
    },
    {
      text: "z",
      link: "",
    },
    {
      text: "1",
      link: "",
    },
    {
      text: "2",
      link: "",
    },
    {
      text: "3",
      link: "",
    },
    {
      text: "4",
      link: "",
    },
    {
      text: "5",
      link: "",
    },
    {
      text: "6",
      link: "",
    },
    {
      text: "7",
      link: "",
    },
    {
      text: "8",
      link: "",
    },
    {
      text: "9",
      link: "",
    },
    {
      text: "0",
      link: "",
    },
  ];

  return (
    <ul>
      {array.map((anchor) => (
        <div>
          <ListAnchor
            text={anchor.text}
            link={anchor.link}
          />
        </div>
      ))}
    </ul>
  );
};

export default AnchorList;
