import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Loader from '../../components/loader/Loader';
import Filter from '../../components/filter/Filter';
import SearchResults from '../../components/search-results/SearchResults';
import { loadMovies } from '../../reducers/movies.reducer';
import { resetSelectedMovie } from "../../reducers/selected-movie.reducer";


const Home = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetSelectedMovie())
        dispatch(loadMovies())
    }, [dispatch]);

    return (
        <>
            {props.movies.length
                ? <>
                    <h1 className='home-header'>Star Wars<i>Discover the extraterrestrial world of Star Wars!</i></h1>
                    <Filter />
                    <SearchResults />
                </>
                : <Loader />}
        </>
    )
};
const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        selectedMovie: state.selectedMovie
    }
};

export default connect(mapStateToProps)(Home);