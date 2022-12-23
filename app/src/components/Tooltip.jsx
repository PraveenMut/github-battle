import * as React from "react";
import PropTypes from "prop-types";
import Hover from "./withHover";

const container = {
  position: "relative",
  display: "flex",
};

const Tooltip = ({ children, element }) => {
  return (
    <Hover>
      {(hovering) => {
        return (
          <div style={container}>
            {hovering && element}
            {children}
          </div>
        );
      }}
    </Hover>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.node.isRequired,
};

export default Tooltip;
