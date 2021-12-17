const SITE_URL = "http://localhost:10004/graphql."; //TODO : <-- Control by ENV

//* Wordpress Data Fetcher
async function fetcher(query, { variable } = {}) {
  const res = await fetch(SITE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variable }),
  });

  const result = res.json();
  return result;
}

export default fetcher;
