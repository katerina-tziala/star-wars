import React from 'react';
import './MovieDetails.css';
import MovieHeader from '../movie-header/MovieHeader';
import MovieProduction from '../movie-production/MovieProduction';
import CharactersList from '../characters-list/CharactersList';

const MovieDetails = ({ movie }) => {
    return (
        <div className='movie-details'>
            <div className='movie-card movie-details-card'>
                <MovieHeader movie={movie} />
                <MovieProduction movie={movie} showProducer={true} />
                <p className='movie-opening-crawl'>{movie.opening_crawl}</p>
                <h3 className='movie-characters-title'>characters</h3>
                <CharactersList characters={movie.characters} />
            </div>
        </div>
    )
};

export default MovieDetails;