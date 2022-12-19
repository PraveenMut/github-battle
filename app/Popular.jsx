import * as React from "react";
import LanguagesNav from "./LanguagesNav";


export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: {},
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(({ selectedLanguage }) => ({
      selectedLanguage: lang,
    }));
  }

  render() {
    return (
      <main>
        <LanguagesNav
          updateLanguageHandler={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
        {JSON.stringify(this.state, null, 2)}
      </main>
    );
  }
}
