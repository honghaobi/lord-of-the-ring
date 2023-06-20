import "../styles/charactersPage.css";
import Arrow from "./Arrow";
import {useEffect} from "react";
import {getCharacters} from "../services/ringService";
function CharactersPage() {
    async function fetchCharacters() {
        const charactersData = await getCharacters('character');

        // setCharacters(charactersData)
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    return <div className='charactersPage'>
        <Arrow pathUrl='/'/>
    </div>
}

export default CharactersPage;