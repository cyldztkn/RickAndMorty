import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// style
import "./CharacterInfo.css";

const CharacterInfo = (props) => {
  const data = props.data;
  const allEpisodes = data.episode;
  const [episodes, setEpisodes] = useState(null);

  const fetchAllEpisodesName = async () => {
    try {
      const fetchPromises = [];
      allEpisodes.map((item) => {
        fetchPromises.push(fetch(item).then((res) => res.json()));
      });
      const response = await Promise.all(fetchPromises);
      setEpisodes(response);
    } catch (error) {
      console.log("Episode Name Fetch Error", error);
    }
  };

  useEffect(() => {
    fetchAllEpisodesName();
  }, []);
  return (
    <div className="CharacterInfo">
      {/* {console.log(data)} */}
      <div className="container">
        <h1>{data.name}</h1>
        <ul>
          <li>
            {" "}
            <p className="list-title"> Status:</p>
            <p className="list-content">{data.status}</p>
          </li>
          <li>
            {" "}
            <p className="list-title"> Species:</p>
            <p className="list-content">{data.species}</p>
          </li>
          <li>
            {" "}
            <p className="list-title"> Type:</p>
            <p className="list-content">
              {data.type ? data.type : "Undifined"}
            </p>
          </li>
          <li>
            {" "}
            <p className="list-title"> Gender:</p>
            <p className="list-content">{data.gender}</p>
          </li>
          <li>
            {" "}
            <p className="list-title"> Origin:</p>
            <p className="list-content">{data.origin.name}</p>
          </li>
        </ul>
      </div>
      <div className="container">
        <h1>Episodes</h1>
        <ul>
          {episodes &&
            episodes.slice(0, 7).map((item) => {
              return (
                <li key={item.id}>
                  {" "}
                  <p className="list-title"> {item.episode}:</p>
                  <p className="list-content">{item.name}</p>
                </li>
              );
            })}
          {episodes && episodes.length > 7 ? <li>...</li> : ""}
        </ul>
      </div>
    </div>
  );
};

export default CharacterInfo;

CharacterInfo.propTypes = {
  data: PropTypes.object,
};
