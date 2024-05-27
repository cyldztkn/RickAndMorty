import { useState } from "react";

// import stylesheets
import "./Aside.css";

// import components
import Checkbox from "../../items/Checkbox";
import Button from "../../items/Button/Button";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [data, setData] = useContext(ContextProvider);

  let menuToggler = () => {
    setIsOpen(!isOpen);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInput = Object.fromEntries(formData.entries());
    console.log(userInput);
  };

  return (
    <aside className={isOpen ? "open" : "close"}>
      <img src="./open-the-menu.svg" alt="" onClick={menuToggler} />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" name="name" id="name" placeholder="Name" />
        <hr />

        <div className="status-area">
          <Checkbox inner="Alive" checked />
          <Checkbox inner="Dead" checked />
          <Checkbox inner="Unknown" checked />
        </div>
        <hr />

        <div className="species">
          <div className="col">
            <Checkbox inner="Human" checked />
            <Checkbox inner="Humanoid" checked />
            <Checkbox inner="Mythological" checked />
            <Checkbox inner="Disease" checked />
            <Checkbox inner="Cronenberg" checked />
          </div>
          <div className="col">
            <Checkbox inner="Alien" checked />
            <Checkbox inner="Poopybutthole" checked />
            <Checkbox inner="Animal" checked />
            <Checkbox inner="Robot" checked />
          </div>
        </div>
        <hr />

        <Button inner="Reset" />
      </form>
    </aside>
  );
};

export default Aside;
