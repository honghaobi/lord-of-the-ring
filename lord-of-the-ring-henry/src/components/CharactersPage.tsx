import {useEffect, useState} from "react";
import {getCharacters} from "../services/ringService";
import {encodeQueryString, Params} from "../utils/helpers";
import Arrow from "./Arrow";
import CharacterCard from "./CharacterCard";
import FullCharacterCard from "./FullCharacterCard";
import {Character} from "../types/type";
import "../styles/charactersPage.css";

function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [selectedChar, setSelectedChar] = useState<Character>()
    const [params, setParams] = useState<Params>({
        limit: 50,
        page: 0,
        offset: 0,
        name: '',
        race: ''
    });

    async function fetchCharacters() {
        const charactersData = await getCharacters('character', encodeQueryString(params));

        setCharacters(charactersData.docs)
        setSelectedChar(charactersData.docs[0])
    }

    useEffect(() => {
        fetchCharacters();
    }, [params]);

    const updateParams = (newParams: Partial<Params>) => {
        setParams(prevParams => ({
            ...prevParams,
            ...newParams
        }));
    };

    return <div className='charactersPage'>
        <Arrow pathUrl='/'/>
        <div>
            <h1 className='header'>Choose Your Character</h1>
            <div className="charactersContainer">
                {characters.map((char, i) => <div key={i} onClick={() => setSelectedChar(char)}>
                    <CharacterCard name={char.name} race={char.race} selected={selectedChar?._id === char._id}/></div>)}
            </div>
            <div className="chosenContainer">
                {selectedChar &&
                    <FullCharacterCard id={selectedChar._id} name={selectedChar.name} race={selectedChar.race}
                                       gender={selectedChar.gender} realm={selectedChar.realm}/>}
            </div>
        </div>
    </div>
}

export default CharactersPage;