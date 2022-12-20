import * as React from "react";
import PropTypes from "prop-types";
import PlayerInput from "./PlayerInput";

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
  constructor(props) {
    super(props);

    this.state = {
      playerOne: null,
      playerTwo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player,
    });
  }

  render() {
    const disabled = !this.state.playerOne || !this.state.playerTwo;

    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h1>Players</h1>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <a href="#" className={`btn primary ${disabled ? "disabled" : ""}`}>
            Battle
          </a>
        </div>
        <section className="grid">
          {!this.state.playerOne ? (
            <PlayerInput
              label="Player One"
              onSubmit={(player) => this.handleSubmit("playerOne", player)}
            />
          ) : null}
          {!this.state.playerTwo ? (
            <PlayerInput
              label="Player Two"
              onSubmit={(player) => this.handleSubmit("playerTwo", player)}
            />
          ) : null}
        </section>
        <Instructions />
      </main>
    );
  }
}
