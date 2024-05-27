import PropTypes from "prop-types";

import "./button.css";

const Button = (props) => {
  if (props.inner) {
    return <button type="reset">{props.inner}</button>;
  } else if (props.next) {
    return (
      <button className="pagination-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
        >
          <path
            d="M6.1 8.5L0 2.36667L1.86667 0.5L9.86667 8.5L1.86667 16.5L0 14.6333L6.1 8.5ZM14.9 8.5L8.8 2.36667L10.6667 0.5L18.6667 8.5L10.6667 16.5L8.8 14.6333L14.9 8.5Z"
            fill="#1E2838"
          />
        </svg>
      </button>
    );
  } else if (props.prev) {
    return (
      <button className="pagination-button">
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M8.33325 16.4595L0.333252 8.45947L8.33325 0.459473L10.1999 2.32614L4.09992 8.45947L10.1999 14.5928L8.33325 16.4595ZM17.1333 16.4595L9.13325 8.45947L17.1333 0.459473L18.9999 2.32614L12.8999 8.45947L18.9999 14.5928L17.1333 16.4595Z"
            fill="#1E2838"
          />
        </svg>
      </button>
    );
  }
};

export default Button;
Button.propTypes = {
  inner: PropTypes.string,
  next: PropTypes.bool,
  prev: PropTypes.bool,
};
