import React from 'react';
import './Character.css';
import CharactersDetailsItem from "../character-details-item/CharacterDetailsItem";

const Character = ({ character }) => {
    return (
        <>
            <h4 className="character-name">{character.name}</h4>
            <p className="character-details">
                <CharactersDetailsItem title={"birth year"} value={character.birth_year} />
                <CharactersDetailsItem title={"gender"} value={character.gender} />
            </p>
            <p className="character-details">
                <CharactersDetailsItem title={"homeworld"} value={character.homeworld} />
                <CharactersDetailsItem title={"species"} value={character.genre} />
                <CharactersDetailsItem title={"classification"} value={character.classification} />
                <CharactersDetailsItem title={"language"} value={character.language} />
            </p>
            <p className="character-details">
                <CharactersDetailsItem title={"starships piloted"} value={character.pilotedStarships} />
            </p>
        </>
    )
};

export default Character;