import {useEffect, useState} from "react";
import {getMovies, getMoviePoster} from "../services/ringService";
import Arrow from "./Arrow";
import InfoCard from "./InfoCard";
import {Movie} from "../types/type";
import "../styles/moviesPage.css";

function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [selectedMovieIndex, setSelectedMovieIndex] = useState<number>(0)
    const selectedMovie = movies[selectedMovieIndex];

    useEffect(() => {
        const fetchMovies = async () => {
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
        fetchMovies();
    }, []);

    return (
        <div className="moviesPage">
            {movies.length > 0 && (
                <>
                    <div className="posterContainer">
                        {movies.map((movie, i) => (
                            <img
                                className="poster"
                                key={i}
                                alt={movie.name}
                                src={movie.postURL}
                                onClick={() => setSelectedMovieIndex(i)}
                            />
                        ))}
                    </div>
                    <InfoCard
                        name={selectedMovie.name}
                        budgetInMillions={selectedMovie.budgetInMillions}
                        boxOfficeRevenueInMillions={selectedMovie.boxOfficeRevenueInMillions}
                        academyAwardWins={selectedMovie.academyAwardWins}
                        academyAwardNominations={selectedMovie.academyAwardNominations}
                        rottenTomatoesScore={selectedMovie.rottenTomatoesScore}
                        overview={selectedMovie.overview}
                    />
                    <Arrow isRight pathUrl="/characters"/>
                </>
            )}
        </div>
    );
}

export default MoviesPage;