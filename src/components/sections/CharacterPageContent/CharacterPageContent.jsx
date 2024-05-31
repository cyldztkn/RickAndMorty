// React
import PropTypes from "prop-types";

// style
import "./characterPageContent.css";

// components

import CharacterImage from "../CharacterImage/CharacterImage";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import ErrorPage from "../../../routes/Error";
import LoadingPage from "../LoadingPage/LoadingPage";

const CharacterPageContent = (props) => {
  const data = props.data;
  const path = window.location.pathname.split("/").slice(-1);

  if (Number(path[0]) > 826) {
    return <ErrorPage />;
  } else if (data == null) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <section className="content-provider">
          <CharacterImage imgSrc={data.image} />
          <CharacterInfo data={data} />
        </section>
      </>
    );
  }
};

export default CharacterPageContent;

CharacterPageContent.propTypes = {
  data: PropTypes.object,
};
