import * as React from "react";
import PropTypes from "prop-types";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <section className="instructions-container">
      <h2>Instructions</h2>
      <ol>
        <li>Enter 2 GitHub Users</li>
        <li>Battle</li>
        <li>See the winners</li>
      </ol>
    </section>
  );
};

export default class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };

  handleSubmit = (id, player) => {
    this.setState({
      [id]: player,
    });
  };

  handleReset = (id) => {
    this.setState({
      [id]: null,
    });
  };

  render() {
    const disabled = !this.state.playerOne || !this.state.playerTwo;

    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h1>Players</h1>
          <Link
            className={`btn primary ${disabled ? "disabled" : ""}`}
            to={{
              pathname: "/results",
              search: `?playerOne=${this.state.playerOne}&playerTwo=${this.state.playerTwo}`,
            }}
          >
            Battle
          </Link>
        </div>
        <section className="grid">
          {!this.state.playerOne ? (
            <PlayerInput
              label="Player One"
              onSubmit={(player) => this.handleSubmit("playerOne", player)}
            />
          ) : (
            <PlayerPreview
              label="Player One"
              username={this.state.playerOne}
              onReset={() => this.handleReset("playerOne")}
            />
          )}
          {!this.state.playerTwo ? (
            <PlayerInput
              label="Player Two"
              onSubmit={(player) => this.handleSubmit("playerTwo", player)}
            />
          ) : (
            <PlayerPreview
              label="Player Two"
              username={this.state.playerTwo}
              onReset={() => this.handleReset("playerTwo")}
            />
          )}
        </section>
        <Instructions />
      </main>
    );
  }
}
