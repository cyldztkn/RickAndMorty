import PropTypes from "prop-types";
import "./status.css";

const Status = (props) => {
  let status = props.status;
  return (
    <div className={`card-status-area ${status.toLowerCase()}`}>
      <img src={`./status/${status.toLowerCase()}.svg`} alt="" />
      {status}
    </div>
  );
};

export default Status;

Status.propTypes = {
  status: PropTypes.string,
};
