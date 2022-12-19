import * as React from "react";
import PropTypes from 'prop-types';

const LanguagesNav = (props) => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  const { selectedLanguage, updateLanguageHandler } = props;

  return (
    <select
      onChange={(e) => updateLanguageHandler(e.target.value)}
      value={selectedLanguage}
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

LanguagesNav.PropTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    updateLanguageHandler: PropTypes.func.isRequired,
}

export default LanguagesNav;
