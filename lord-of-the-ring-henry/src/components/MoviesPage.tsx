import {useEffect, useState} from "react";
import {getMovies, getMoviePoster} from "../services/ringService";
import {Movie} from "../types/type";
import "../styles/moviesPage.css"

function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [selectedMovieIndex, setSelectedMovieIndex] = useState<number>(0)

    async function fetchMovies() {
        const moviesData = await getMovies('movie');
        const validMovies = moviesData.docs.slice(2, moviesData.docs.length)
        const moviesWithPoster = await Promise.all(
            validMovies.map(async (movie) => {
                const response = await getMoviePoster(movie.name);
                const moviePoster = response.results[0]?.poster_path;
                movie.postURL = `https://image.tmdb.org/t/p/w500/${moviePoster}`;
                return movie;
            })
        );
        setMovies(moviesWithPoster)
    }

    useEffect(() => {
        fetchMovies();
    }, []);


    return <div className='moviesPage'>
        {movies.length && <>
            <div className='posterContainer'>
                {movies.map((movie, i) => <img className='poster' alt={movie.name} src={movie.postURL}/>)}
            </div>
            <div className='infoContainer'>
                {movies[selectedMovieIndex].name}
                {movies[selectedMovieIndex].budgetInMillions}
                {movies[selectedMovieIndex].boxOfficeRevenueInMillions}
                {movies[selectedMovieIndex].academyAwardNominations}
                {movies[selectedMovieIndex].academyAwardWins}
                {movies[selectedMovieIndex].rottenTomatoesScore}
            </div>
        </>
        }
    </div>
}

export default MoviesPage;