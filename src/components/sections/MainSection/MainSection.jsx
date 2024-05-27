// styles
import "./MainSection.css";

import PropTypes from "prop-types";

import Card from "../Card/Card";
import { useState } from "react";

const MainSection = (props) => {
  const [cardCount, setCardCount] = useState(20);
  let data = props.data;

  const nextPage = () => {
    setCardCount(cardCount + 20);
    console.log("basıldı");
  };
  return (
    <main>
      {console.log(data)}
      {data.slice(0, `${cardCount}`).map((item) => {
        return <Card cardData={item} key={item.id} />;
      })}
      {console.log(data)}
      <button onClick={nextPage}>See More</button>
    </main>
  );
};

export default MainSection;

MainSection.propTypes = {
  data: PropTypes.array,
};
