import * as React from "react";

const ResultsCard = ({ profile }) => {
  const {
    login,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
    location,
    company,
  } = profile;

  return (
    <div className="card bg-light">
      <header className="split">
        <div>
          <h4>
            <a href={html_url}>{login}</a>
          </h4>
          <p>{location || "unknown"}</p>
        </div>
        <img
          className="avatar large"
          src={avatar_url}
          alt={`Avatar for ${login}`}
        />
      </header>
      <ul className="stack">
        <li className="split">
          <span>Name:</span> <span>{login || "n/a"}</span>
        </li>
        <li className="split">
          <span>Company:</span> <span>{company || "n/a"}</span>
        </li>
        <li className="split">
          <span>Followers:</span> <span>{followers}</span>
        </li>
        <li className="split">
          <span>Following:</span> <span>{following}</span>
        </li>
        <li className="split">
          <span>Repositories:</span> <span>{public_repos}</span>
        </li>
      </ul>
    </div>
  );
};

export default ResultsCard;
