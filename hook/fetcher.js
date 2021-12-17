// async function fetcher(query, { variable } = {}) {
//   const res = await fetch("http://wordpress-nextjs.dev.test/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query, variable }),
//   });

//   const result = res.json();
//   return result;
// }

async function fetcher(query, { variable } = {}) {
  const res = await fetch("http://localhost:10004/graphql.", {
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
