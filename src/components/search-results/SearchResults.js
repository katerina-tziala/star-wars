import React from 'react';
import { connect } from 'react-redux';


import MoviePreview from '../movie-preview/MoviePreview';
import './SearchResults.css';


const SearchResults = (props) => {

  const getSearchResult = () => {
    if (!props.results.length && props.searchValue.length) {
      return <div>No movie found with this title!</div>;
    }
    return props.results.map(movie => <MoviePreview key={movie.url} movie={movie} />);
  };

  return (
    <div className='search-results'>
      {getSearchResult()}
    </div>
  );
};

const getFilterResults = (movies, filter) => {
  if (!filter.length) {
    return [];
  }
  return [...movies].filter(movie => movie.title.toLowerCase() === filter.toLowerCase());
};

const mapStateToProps = (state) => {
  return {
    results: getFilterResults(state.movies, state.searchValue),
    searchValue: state.searchValue,
  }
};

export default connect(
  mapStateToProps,
  null
)(SearchResults);
