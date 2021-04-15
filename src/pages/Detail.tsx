import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { IMovieData, IMovieVars } from "interfaces";
import Error from "components/Error";
import Loading from "components/Loading";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      name
      rating
    }
  }
`;

function Detail() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<IMovieData, IMovieVars>(GET_MOVIE, {
    variables: { id: Number(id) },
  });
  if (loading) return <Loading />;
  if (error) return <Error msg={error.message} />;

  return (
    <div>
      {data?.movie ? (
        <div>
          <div>name : {data.movie.name}</div>
          <div>rating : {data.movie.rating}</div>
        </div>
      ) : (
        "No Detail..."
      )}
    </div>
  );
}

export default Detail;
