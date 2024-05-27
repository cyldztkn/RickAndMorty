import PropTypes from "prop-types";

const Checkbox = (props) => {
  return (
    <label htmlFor={props.inner}>
      <input type="checkbox" name={props.inner} id={props.inner} defaultChecked={props.checked} />
      {props.inner}
    </label>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  inner: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
