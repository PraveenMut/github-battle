import { requestHeaders } from "./auth";

export const fetchRepos = async (language) => {
  const endPoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  const resp = await fetch(endPoint);
  if (!resp.ok) {
    throw new Error(resp.message);
  }
  const payload = await resp.json();
  return payload.items;
};

const getErrorType = (httpCode, username) => {
  if (httpCode === 404) {
    return `${username} doesn't exist`;
  }
  return message;
};

const getProfile = async (username) => {
  const endpoint = `https://api.github.com/users/${username}`;
  const resp = await fetch(endpoint, requestHeaders);
  if (!resp.ok) {''
    throw new Error(getErrorMessage(resp.status, username));
  }
  const profile = await resp.json();
  return profile;
};

const getRepos = async (username) => {
  const endpoint = `https://api.github.com/users/${username}/repos`;
  const resp = await fetch(endpoint, requestHeaders);
  if (!resp.ok) {
    throw new Error(getErrorMessage(resp.status, username));
  }
  const repos = await resp.json();
  return repos;
};

const calculateScore = (followers, repos) => {
  return followers + getStarCount(repos) * 3;
};

const getStarCount = (repos) => {
  return repos.reduce((accumulator, { stargazers_count }) => {
    return accumulator + stargazers_count;
  }, 0);
};

const getUserData = async (player) => {
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player),
  ]);
  const result = {
    score: calculateScore(profile.followers, repos),
    profile,
  };
  return result;
};

const sortPlayers = (players) => {
  return players.sort(
    (playerOne, playerTwo) => playerTwo.score - playerOne.score
  );
};

export const battle = async (players) => {
  const playerResults = await Promise.all([
    getUserData(players[0]),
    getUserData(players[1]),
  ]);
  return sortPlayers(playerResults);
};
