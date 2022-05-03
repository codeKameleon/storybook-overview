import PropTypes from "prop-types";

const Button = ({ label, backgroundColor, size, onClick }) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale - 0.5}rem ${scale * 1}rem`,
    border: "none",
    color: "#fff",
  };

  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Button",
  backgroundColor: "#1976d2",
  size: "md",
};

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
};

export { Button };
