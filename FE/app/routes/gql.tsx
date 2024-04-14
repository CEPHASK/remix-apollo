import { gql, useQuery } from "@apollo/client/index.js";

export default function Gql() {
  const { loading, error, data } = useQuery(gql`
    query GetPost {
      posts {
        data {
          id
          attributes {
            createdAt
            overview
            slug
            title
            updatedAt
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  console.log(data);

  return (
    <div>
      <h1>GQL</h1>
      {JSON.stringify(data)}
    </div>
  );
}
