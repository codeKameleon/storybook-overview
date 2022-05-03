import PropTypes from "prop-types";

const Stack = ({ children, spacing, direction, wrap }) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };

  return <div style={style}>{children}</div>;
};

Stack.defaultProps = {
  spacing: 2,
  direction: "row",
  wrap: false,
};

Stack.propTypes = {
  children: PropTypes.number,
  spacing: PropTypes.number,
  direction: PropTypes.oneOf(["row", "column"]),
  wrap: PropTypes.bool,
};

export { Stack };
