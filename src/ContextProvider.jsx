import { createContext, useState, useEffect, useMemo } from "react";

import PropTypes from "prop-types";

import LoadingPage from "./components/sections/LoadingPage/LoadingPage";

const Context = createContext();

const ContextProvider = (props) => {
  const [data, setData] = useState(null);

  const fetchData = useMemo(
    () => async () => {
      try {
        const fetchPromises = [];
        for (let i = 1; i <= 42; i++) {
          fetchPromises.push(
            fetch(`https://rickandmortyapi.com/api/character?page=${i}`).then(
              (res) => res.json()
            )
          );
        }

        const responses = await Promise.all(fetchPromises);
        const allCharacters = responses.flatMap((response) => response.results);
        setData(allCharacters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    []
  );
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (data) {
    return <Context.Provider value={data}>{props.children}</Context.Provider>;
  } else {
    return <LoadingPage />;
  }
};

export { Context, ContextProvider };


ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
