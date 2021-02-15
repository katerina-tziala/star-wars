import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSelectedMovie } from '../../reducers/selected-movie.reducer';
import MovieDetails from '../../components/movie-details/MovieDetails';
import Loader from '../../components/loader/Loader';

const Movie = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const title = location.pathname.split("movie/").pop().toLowerCase();
        dispatch(getSelectedMovie(title));
    }, [dispatch, location]);

    return (
        <>
            {props.selectedMovie ? <MovieDetails movie={props.selectedMovie} /> : <Loader/>}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie,
    }
};

export default connect(mapStateToProps)(Movie);