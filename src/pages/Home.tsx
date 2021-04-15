import React from "react";
import { gql, useQuery } from "@apollo/client";
import {IMovie, IMoviesData} from "interfaces";
import Movie from "components/Movie";
import Error from "components/Error";
import Loading from "components/Loading";


const GET_MOVIE = gql`
    query {
        movies {
            id
            name
        }
    }
`

function Home() {
    const {loading, error, data} = useQuery<IMoviesData>(GET_MOVIE);
    const movies = data?.movies.length !== 0 ? data?.movies : null;

    if (loading) return <Loading />;
    if (error) return <Error msg={error.message} />;

    return (
        <div>
            {movies?.map((movie: IMovie) => (
                <Movie key={movie.id} id={movie.id} name={movie.name} />
            )) ?? "No movie..."
            }
        </div>
    )
}

export default Home;