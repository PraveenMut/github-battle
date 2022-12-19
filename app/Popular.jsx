import * as React from "react";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedLanguage: {}
     }

     this.updateLanguage = this.updateLanguage.bind(this);
     this.languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  }

  updateLanguage(lang) {
    this.setState(({ selectedLanguage }) => ({
        selectedLanguage: lang
    }))
  }

  render() {
    return (
      <main>  
      <select 
      onChange={(e) => this.updateLanguage(e.target.value)} 
      value={this.state.selectedLanguage}
      >
        {this.languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      {JSON.stringify(this.state, null, 2)}
      </main>
    );
  }
}
