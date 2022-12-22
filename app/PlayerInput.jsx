import * as React from "react";

export default class PlayerInput extends React.Component {
  state = {
    username: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.username);
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="input-row">
          <input
            type="text"
            id="username"
            placeholder="github username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className="btn link"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
