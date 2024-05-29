// Context
import { useContext, useState, useRef } from "react";
import { Context } from "../ContextProvider.jsx";

// Components
import Aside from "../components/sections/Aside/Aside.jsx";
import MainSection from "../components/sections/MainSection/MainSection.jsx";

const Homepage = () => {
  const data = useContext(Context);
  const [uiData, setUiData] = useState(data);
  const formRef = useRef(null);

  const filterCharacters = (userInput) => {
    let filteredData = [...data];

    // check status

    if (userInput.Dead || userInput.Alive || userInput.Unknown) {
      filteredData = filteredData.filter((item) => {
        if (userInput.Dead && item.status.toLowerCase() === "dead") return true;
        if (userInput.Alive && item.status.toLowerCase() === "alive")
          return true;
        if (userInput.Unknown && item.status.toLowerCase() === "unknown")
          return true;
        return false;
      });
    }

    // check species
    if (
      !userInput.Human ||
      !userInput.Humanoid ||
      !userInput.Mythological ||
      !userInput.Disease ||
      !userInput.Cronenberg ||
      !userInput.Alien ||
      !userInput.Poopybutthole ||
      !userInput.Animal ||
      !userInput.Robot ||
      !userInput.UnknownSpacies
    ) {
      filteredData = filteredData.filter((item) => {
        if (!userInput.Human && item.species.toLowerCase() === "human")
          return false;
        if (!userInput.Humanoid && item.species.toLowerCase() === "humanoid")
          return false;
        if (
          !userInput.Mythological &&
          item.species.toLowerCase() === "mythological creature"
        )
          return false;
        if (!userInput.Disease && item.species.toLowerCase() === "disease")
          return false;
        if (
          !userInput.Cronenberg &&
          item.species.toLowerCase() === "cronenberg"
        )
          return false;
        if (
          !userInput.UnknownSpacies &&
          item.species.toLowerCase() === "unknown"
        )
          return false;
        if (!userInput.Alien && item.species.toLowerCase() === "alien")
          return false;
        if (
          !userInput.Poopybutthole &&
          item.species.toLowerCase() === "poopybutthole"
        )
          return false;
        if (!userInput.Animal && item.species.toLowerCase() === "animal")
          return false;
        if (!userInput.Robot && item.species.toLowerCase() === "robot")
          return false;
        return true;
      });
    }

    // check name

    if (userInput.name !== "") {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(userInput.name.toLowerCase())
      );
    }

    // re-render

    setUiData(filteredData);
  };

  const changeHandlerFunc = () => {
    const formData = new FormData(formRef.current);
    const userInput = Object.fromEntries(formData.entries());
    filterCharacters(userInput);
  };

  const submitHandlerFunc = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const userInput = Object.fromEntries(formData.entries());
    filterCharacters(userInput);
  };

  return (
    <>
      <Aside
        changeHandler={changeHandlerFunc}
        submitHandler={submitHandlerFunc}
        formRef={formRef}
      />
      <MainSection data={uiData} />
    </>
  );
};

export default Homepage;
