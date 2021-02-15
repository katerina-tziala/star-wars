import React from 'react';
import { getRomanNumeral } from "../../utils/utils";
import './MovieHeader.css';

const MovieHeader = ({ movie }) => {

    const episodeSubtitle = () => {
        let subtitle = 'episode ';
        if (movie.episode_id) {
            subtitle += getRomanNumeral(movie.episode_id);
        }
        return subtitle;
    }

    return (
        <>
            <h1 className='movie-title'>{movie.title}</h1>
            <h2 className='movie-subtitle'>{episodeSubtitle()}</h2>
        </>
    )
};

export default MovieHeader;