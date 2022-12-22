import * as React from "react";
import PropTypes from "prop-types";

export default class LoadingBackOff extends React.Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.setState({ visible: true });
    }, this.props.wait);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  render() {
    return this.state.show === true ? this.props.children : null;
  }
}

LoadingBackOff.defaultProps = {
  wait: 300,
};

LoadingBackOff.propTypes = {
  children: PropTypes.node.isRequired,
  wait: PropTypes.number,
};
