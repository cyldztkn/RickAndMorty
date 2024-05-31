import "./CharacterImage.css";

const CharacterImage = (props) => {
  return (
    <div className="CharacterImg">
      <img src={props.imgSrc} alt="" />
    </div>
  );
};

export default CharacterImage;
