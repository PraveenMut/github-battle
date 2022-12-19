const fetchRepos = async (language) => {
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

export default fetchRepos;
