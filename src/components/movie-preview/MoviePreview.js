import React from 'react';
import { NavLink } from 'react-router-dom';
import './MoviePreview.css';
import MovieHeader from '../movie-header/MovieHeader';
import MovieProduction from '../movie-production/MovieProduction';

const MoviePreview = ({ movie }) => {
    return (
        <div className='movie-card movie-preview-card'>
            <MovieHeader movie={movie} />
            <MovieProduction movie = {movie} showProducer = {false}/>
            <NavLink
                className="movie-preview-details-button"
                activeClassName="movie-preview-details-button"
                to={`/movie/${movie.title.toLowerCase()}`}>details</NavLink>
        </div>
    )
};

export default MoviePreview;