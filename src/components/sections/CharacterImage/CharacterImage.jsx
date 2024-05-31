import "./CharacterImage.css";

import PropTypes from "prop-types";


const CharacterImage = (props) => {
  return (
    <div className="CharacterImg">
      <img src={props.imgSrc} alt="" />
    </div>
  );
};

export default CharacterImage;

CharacterImage.propTypes = {
  imgSrc: PropTypes.string,
};