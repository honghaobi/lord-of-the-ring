import React, {useEffect, useState} from "react";
import {getCharacters} from "../services/ringService";
import {encodeQueryString, Params} from "../utils/helpers";
import Arrow from "./Arrow";
import CharacterCard from "./CharacterCard";
import FullCharacterCard from "./FullCharacterCard";
import Pagination from "./Pagination";
import {Character} from "../types/type";
import "../styles/charactersPage.css";

const DEFAULT_PARAMS = {
    limit: 28,
    page: 1,
    offset: 0
};

function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [selectedChar, setSelectedChar] = useState<Character>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(1);
    const [params, setParams] = useState<Params>(DEFAULT_PARAMS);

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersData = await getCharacters(
                "character",
                encodeQueryString(params)
            );
            setCharacters(charactersData.docs);
            if (!selectedChar) {
                setSelectedChar(charactersData.docs[0]);
            }
            setTotal(charactersData.total);
            setCurrentPage(params.page);
        };
        fetchCharacters();
    }, [params]);

    const updateParams = (newParams: Partial<Params>) => {
        const updatedParams = {
            ...params,
            ...newParams,
            offset: ((newParams.page ?? params.page) - 1) * params.limit,
        };
        setParams(updatedParams);
    };

    const handlePageChange = (page: number) => updateParams({page});

    return (
        <div className="charactersPage">
            <Arrow pathUrl="/"/>
            {characters.length > 0 && (
                <div>
                    <h1 className="header">Choose Your Character</h1>
                    <div className="charactersContainer">
                        {characters.map((character, index) => (
                            <div key={index} onClick={() => setSelectedChar(character)}>
                                <CharacterCard
                                    name={character.name}
                                    race={character.race}
                                    selected={selectedChar?._id === character._id}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="paginateContainer">
                        <Pagination
                            totalPages={Math.ceil(total / params.limit)}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <div className="chosenContainer">
                        {selectedChar && (
                            <FullCharacterCard
                                id={selectedChar._id}
                                name={selectedChar.name}
                                race={selectedChar.race}
                                gender={selectedChar.gender}
                                realm={selectedChar.realm}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CharactersPage;