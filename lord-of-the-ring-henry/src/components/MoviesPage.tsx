import {useEffect} from "react";
import {getMovies} from "../services/ringService";

function MoviesPage() {

    async function fetchmovies() {
        const response = await getMovies('movie');
        console.log(response)
    }

    useEffect(() => {
        fetchmovies();
    }, []);


    return <div>Movies Page</div>
}

export default MoviesPage;