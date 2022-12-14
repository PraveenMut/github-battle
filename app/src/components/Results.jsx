import * as React from "react";
import Loading from "./Loading";
import ResultsCard from "./ResultsCard";
import { battle } from "../../utils/api/api";
import withSearchParams from "./withSearchParams";
import { Link } from 'react-router-dom';
class Results extends React.Component {
  state = {
    winner: null,
    runnerup: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const searchParameters = this.props.router.searchParams;
    const playerOne = searchParameters.get("playerOne");
    const playerTwo = searchParameters.get("playerTwo");

    try {
      const [winner, runnerup] = await battle([playerOne, playerTwo]);
      this.setState({
        winner,
        runnerup,
        error: null,
        loading: false,
      });
    } catch (ex) {
      this.setState({
        error: ex.message,
        loading: false,
      });
    }
  }
  render() {
    if (this.state.loading) {
      return <Loading text="Battling" />;
    }

    if (this.state.error) {
      return <p className="text-center error">{error}</p>;
    }

    return (
      <main className="animate-in stack main-stack">
        <div className="split">
          <h1>Results</h1>
          <Link to="/battle" className="btn secondary">
            Reset
          </Link>
        </div>
        <section className="grid">
          <article className="results-container">
            <ResultsCard profile={this.state.winner.profile} />
            <p className="results">
              <span>
                {this.state.winner.score === this.state.runnerup.score
                  ? "Tie"
                  : "Winner"}{" "}
                {this.state.winner.score.toLocaleString()}
              </span>
              {this.state.winner.score !== this.state.runnerup.score && (
                <img
                  width={80}
                  src="https://ui.dev/images/certificate.svg"
                  alt="Certificate"
                />
              )}
            </p>
          </article>
          <article className="results-container">
            <ResultsCard profile={this.state.runnerup.profile} />
            <p className="results">
              <span>
                {this.state.winner.score === this.state.runnerup.score
                  ? "Tie"
                  : "Loser"}{" "}
                {this.state.runnerup.score.toLocaleString()}
              </span>
            </p>
          </article>
        </section>
      </main>
    );
  }
}

export default withSearchParams(Results);
