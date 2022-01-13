import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, toggleButtonForm, showClose }) => {
  const location = useLocation()
  return (
    <div className="header">
      <h3>{title}</h3>
     { location.pathname === '/' && <Button
        toggleShow={toggleButtonForm}
        color={showClose ? "red" : "steelblue"}
        title={showClose ? "Close" : "Add"}
      />}
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
