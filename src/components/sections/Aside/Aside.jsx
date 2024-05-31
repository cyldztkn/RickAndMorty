import { useRef } from "react";
import PropTypes from "prop-types";

// import stylesheets
import "./Aside.css";

// import components
import Checkbox from "../../items/Checkbox";
import Button from "../../items/Button/Button";

const Aside = (props) => {
  const menuRef = useRef("navbar");
  const submitHandler = props.submitHandler;
  const changeHandler = props.changeHandler;
  const resetHandler = props.resetHandler
  const formRef = props.formRef;
  // console.log(props)

  let menuToggler = () => {
    menuRef.current.classList.toggle("close");
  };

  return (
    <aside className="close" ref={menuRef}>
      <img src="./open-the-menu.svg" alt="" onClick={menuToggler} />
      <form
        onChange={(e) => {
          changeHandler(e);
        }}
        onSubmit={submitHandler}
        onReset={resetHandler}
        ref={formRef}
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
            <Checkbox inner="UnknownSpacies" checked />
          </div>
        </div>
        <hr />

        <Button inner="Reset" />
      </form>
    </aside>
  );
};

export default Aside;

Aside.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  resetHandler: PropTypes.func.isRequired,
  formRef: PropTypes.any,
};
