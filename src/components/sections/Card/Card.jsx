import "./card.css";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Status from "../../items/status/Status";
import Species from "../../items/species/Species";

const Card = (props) => {
  const { id, name, status, species, image } = props.cardData;
  return (
    <Link to={`character/${id}`}>
      <article>
        <div className="image-container">
          <img className="card-image" src={image} alt="" />
          <Status status={status} />
        </div>
        <section>
          <Species species={species} />
          <h1>{name}</h1>
        </section>
      </article>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  cardData: PropTypes.object,
};
