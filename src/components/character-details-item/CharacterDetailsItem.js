import React from 'react';
import './CharactersDetailsItem.css';

const CharactersDetailsItem = ({ title, value }) => {
    return (
        <>
            <span className="character-details-item">
                <i>{title}: </i>
                <span className="character-details-value">{value}</span>
            </span>
        </>
    )
};

export default CharactersDetailsItem;