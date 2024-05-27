import PropTypes from "prop-types";
import "./species.css";

const Species = (props) => {
  let species = props.species;
  return (
    <div className="species-area">
      <img src={`./species/${species.toLowerCase()}.svg`} alt="" />
      {species}
    </div>
  );
};

export default Species;

Species.propTypes = {
  species: PropTypes.string,
};
