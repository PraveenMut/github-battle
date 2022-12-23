import * as React from "react";
import PropTypes from "prop-types";
import { hashSymbol } from "./icon";
import Tooltip from "./Tooltip";
import MoreInfo from "./MoreInfo";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th style={{ width: "5%" }}>{hashSymbol}</th>
        <th style={{ width: "50%" }}>Repository</th>
        <th style={{ width: "15%" }}>Stars</th>
        <th style={{ width: "15%" }}>Forks</th>
        <th style={{ width: "15%" }}>Open Issues</th>
      </tr>
    </thead>
  );
};

const TableRow = (props) => {
  const {
    index,
    owner,
    stargazers_count,
    forks,
    open_issues,
    name,
    created_at,
    updated_at,
    language,
    watchers,
  } = props;
  const { login: username, avatar_url } = owner;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Tooltip
          element={
            <MoreInfo
              created_at={created_at}
              language={language}
              updated_at={updated_at}
              watchers={watchers}
              login={username}
            />
          }
        >
          <div className="row gap-md">
            <img
              width={32}
              height={32}
              className="avatar"
              src={avatar_url}
              alt={`Avatar of ${username}`}
            />
            <a href={`https://github.com/${username}/${name}`}>{name}</a>
          </div>
        </Tooltip>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  open_issues: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

const Table = (props) => {
  const { repos } = props;
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => {
          return <TableRow key={index} index={index} {...repo} />;
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Table;
