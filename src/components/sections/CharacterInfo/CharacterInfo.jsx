import { useState, useEffect } from "react";

const CharacterInfo = (props) => {
  const data = props.data;
  const [episodes, setEpisodes] = useState(null);
  useEffect(() => {
    try {
      const promises = data.episode.map((episodeUrl) => {
        return fetch(episodeUrl).then((res) => res.json());
      });

      Promise.all(promises)
        .then((responses) => {
          const allEpisodes = responses.flatMap((response) => response.results);
          setEpisodes(allEpisodes);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [data.episode]);

  return (
    <div className="CharacterInfo">
      {console.log(data)}
      <div className="container">
        <h1>{data.name}</h1>
        <ul>
          <li>Status: {data.status}</li>
          <li>species: {data.species}</li>
          <li>type: {data.type}</li>
          <li>gender: {data.gender}</li>
          <li>origin: {data.origin.name}</li>
        </ul>
      </div>
      <div className="container">
        <h1>Episodes</h1>
        <ul>
          {episodes &&
            episodes.map((episode) => (
              <li key={episode.id}>{episode.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterInfo;
