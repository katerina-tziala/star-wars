import React from 'react';
import './CharactersList.css';
import Character from "../character/Character";

const CharactersList = ({ characters }) => {
    return (
        <ul className='characters-list'>
            {characters.map(character =>
                <li key={character.url}>
                     <Character character={character} />
                </li>
            )}
        </ul>
    )
};

export default CharactersList;