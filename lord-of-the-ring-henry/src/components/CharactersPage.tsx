import {useEffect, useState} from "react";
import {getCharacters} from "../services/ringService";
import {encodeQueryString, Params} from "../utils/helpers";
import Arrow from "./Arrow";
import CharacterCard from "./CharacterCard";
import FullCharacterCard from "./FullCharacterCard";
import {Character} from "../types/type";
import "../styles/charactersPage.css";
import Pagination from "./Pagination";

const DEFAULT_PARAMS = {
    limit: 28,
    page: 1,
    offset: 0
};

function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [selectedChar, setSelectedChar] = useState<Character>()
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(1);
    const [params, setParams] = useState<Params>(DEFAULT_PARAMS);

    async function fetchCharacters() {
        const charactersData = await getCharacters('character', encodeQueryString(params));
        setCharacters(charactersData.docs)
        !selectedChar && setSelectedChar(charactersData.docs[0])
        setTotal(charactersData.total)
        setCurrentPage(params.page)
    }

    useEffect(() => {
        fetchCharacters();
    }, [params]);

    const updateParams = (newParams: Partial<Params>) => {
        const updatedParams = {
            ...params,
            ...newParams,
            offset: ((newParams.page ?? params.page) - 1) * params.limit
        };
        setParams(updatedParams);
    };

    const handlePageChange = (page: number) => {
        updateParams({page})
    };

    return <div className='charactersPage'>
        <Arrow pathUrl='/'/>
        {characters.length > 0 && <div>
            <h1 className='header'>Choose Your Character</h1>
            <div className="charactersContainer">
                {characters.map((char, i) => <div key={i} onClick={() => setSelectedChar(char)}>
                    <CharacterCard name={char.name} race={char.race} selected={selectedChar?._id === char._id}/></div>)}
            </div>
            <div className='paginateContainer'>
                <Pagination
                    totalPages={Math.ceil(total / params.limit)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
            <div className="chosenContainer">
                {selectedChar &&
                    <FullCharacterCard id={selectedChar._id} name={selectedChar.name} race={selectedChar.race}
                                       gender={selectedChar.gender} realm={selectedChar.realm}/>}
            </div>
        </div>}
    </div>
}

export default CharactersPage;