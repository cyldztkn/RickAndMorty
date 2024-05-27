// Context
import { useContext } from "react";
import { Context } from "../ContextProvider.jsx";

// Components
import Aside from "../components/sections/Aside/Aside.jsx";
import MainSection from "../components/sections/MainSection/MainSection.jsx";

const Homepage = () => {
  const data = useContext(Context);

  return (
    <>
      <Aside />
      <MainSection data={data} />
    </>
  );
};

export default Homepage;
