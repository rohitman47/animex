export default async function graphqlFetch({ query }: { query: string }) {
  const URL = import.meta.env.PROD ? `/graphql` : `http://localhost:4000/graphql`;
  return fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).then((res) => res.json());
}
