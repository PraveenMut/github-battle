import * as React from "react";
import PropTypes from "prop-types";
import LoadingBackOff from "./LoadingBackOff";

const styles = {
  fontSize: "14px",
  position: "absolute",
  left: "0",
  right: "0",
  marginTop: "20px",
  textAlign: "center",
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.text,
    };
  }

  componentDidMount() {
    const { speed, text } = this.props;

    this.interval = window.setInterval(() => {
      if (this.state.content === text + "...") {
        this.setState({ content: text });
      } else {
        this.setState((prevState) => ({
          content: prevState.text + ".",
        }));
      }
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <LoadingBackOff>
        <p style={styles}>{this.state.content}</p>
      </LoadingBackOff>
    );
  }
}

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};
