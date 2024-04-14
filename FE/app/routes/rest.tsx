import React from "react";
import useFetch from "../hooks/useFetch";

export default function Rest() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  console.log(data);

  return (
    <div>
      {/* {data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          
          <small>console list</small>

          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))} */}
      <h1>Rest</h1>
      {JSON.stringify(data)}
      {/* {new Date(data.createdAt).toISOString().split("T")[0]} */}
    </div>
  );
}
