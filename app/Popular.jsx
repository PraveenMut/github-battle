import * as React from "react";
import LanguagesNav from "./LanguagesNav";
import Table from "./Table";
import fetchRepos from "./utils/api/api";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: [],
      error: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  async updateLanguage(lang) {
    try {
      const fetchedRepos = await fetchRepos(lang);
      this.setState(({ selectedLanguage, repos, error }) => ({
        selectedLanguage: lang,
        repos: fetchedRepos,
        error: null,
      }));
    } catch (e) {
      console.warn("Error fetching repositories", e);
      this.setState(({ selectedLanguage, repos, error }) => ({
        selectedLanguage: lang,
        repos: [],
        error: "There was an error fetching repositories.",
      }));
    }
  }

  render() {
    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h1>Popular</h1>
          <LanguagesNav
            updateLanguageHandler={this.updateLanguage}
            selectedLanguage={this.state.selectedLanguage}
          />
        </div>
        {this.state.error && (
          <p className="text-center error">{this.state.error}</p>
        )}

        {this.state.repos.length !== 0 && <Table repos={this.state.repos} />}
      </main>
    );
  }
}
