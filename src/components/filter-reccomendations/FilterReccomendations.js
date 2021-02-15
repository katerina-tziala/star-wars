import React from 'react';
import { setSearchValue } from '../../reducers/search-value.reducer';
import { connect } from 'react-redux';
import './FilterReccomendations.css';

const FilterReccomendations = (props) => {

  const selectReccomendation = (reccomentation) => {
    props.setSearchValue(reccomentation);
  };

  return (
    <ul className="filter-reccomendations-container">
      {props.reccomendations.map(reccomentation =>
        <li className="filter-reccomendation-item" key={reccomentation} onClick={()=>{selectReccomendation(reccomentation)}}>
         {reccomentation}
         
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    reccomendations: state.searchValue.length ? [] : getFilterReccomentations(state.movies, state.filter),
  }
};

const getFilterReccomentations = (movies, filter) => {
  if (!filter.length) {
    return [];
  }

  filter = filter.toLowerCase();
  let partialMatches = [...movies].filter(movie => movie.title.toLowerCase().startsWith(filter));
  if (!partialMatches.length) {
    const filterParts = filter.split(" ");
    filterParts.forEach(part => {
      const moviesMatchFilterPart = [...movies].filter(movie => movie.title.toLowerCase().split(" ").includes(part));
      partialMatches = partialMatches.concat(moviesMatchFilterPart);
    });
  }

  const uniqueResults = Array.from(new Set(partialMatches));
  return uniqueResults.map(movie => movie.title);
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchValue: value => {
      dispatch(setSearchValue(value))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterReccomendations);
