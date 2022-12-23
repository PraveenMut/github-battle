import * as React from "react";
import { close } from "../../icon";

const PlayerPreview = (props) => {
  const { username, onReset, label } = props;

  return (
    <article className="card">
      <h3 className="player-label">{label}</h3>
      <div className="split">
        <div className="row gap-md">
          <img
            width={32}
            height={32}
            className="avatar"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
          <button onClick={onReset} className="btn secondary icon">
            {close}
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlayerPreview;
