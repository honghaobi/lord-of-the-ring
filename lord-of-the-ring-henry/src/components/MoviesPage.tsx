import {useEffect, useState} from "react";
import {getMovies, getMoviePoster} from "../services/ringService";
import Arrow from "./Arrow";
import {Movie} from "../types/type";
import "../styles/moviesPage.css";

function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [selectedMovieIndex, setSelectedMovieIndex] = useState<number>(0)
    async function fetchMovies() {
        const moviesData = await getMovies('movie');
        const validMovies = moviesData.docs.slice(2, moviesData.docs.length)
        const moviesWithPoster = await Promise.all(
            validMovies.map(async (movie) => {
                const response = await getMoviePoster(movie.name);
                const {poster_path, overview} = response.results[0] || {};
                return {
                    ...movie,
                    postURL: poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "",
                    overview: overview || "",
                };
            })
        );
        setMovies(moviesWithPoster)
    }

    useEffect(() => {
        fetchMovies();
    }, []);


    const selectedMovie = movies[selectedMovieIndex];
    return <div className='moviesPage'>
        {movies.length > 0 && <>
            <div className='posterContainer'>
                {movies.map((movie, i) => <img className='poster' key={i} alt={movie.name}
                                               src={movie.postURL} onClick={() => setSelectedMovieIndex(i)}/>)}
            </div>
            <div className='infoContainer'>
                <h1>{selectedMovie.name}</h1>
                <h3>💸 Budget: ${selectedMovie.budgetInMillions} Mil · 💰Revenue:
                    ${selectedMovie.boxOfficeRevenueInMillions} Mil</h3>
                <h3>🏆 Award: {selectedMovie.academyAwardWins} · 📝
                    Nomination: {selectedMovie.academyAwardNominations}</h3>
                <h3>🍅 Score: {selectedMovie.rottenTomatoesScore}/100</h3>
                <section className='overview'>{selectedMovie.overview}</section>
            </div>
            <Arrow isRight pathUrl='/characters'/>
        </>
        }
    </div>
}

export default MoviesPage;