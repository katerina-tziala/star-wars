import React from 'react';
import { setFilter } from '../../reducers/filter.reducer';
import { connect } from 'react-redux';
import './Filter.css';
import { setSearchValue } from '../../reducers/search-value.reducer';
import FilterReccomendations from "../filter-reccomendations/FilterReccomendations";

const Filter = (props) => {

  const onFilterChange = (event) => {
    const filterValue = event.target.value;
    props.setSearchValue('');
    props.setFilter(filterValue);
  };

  const filterValue = () => {
    return props.searchValue.length ? props.searchValue : props.filter;
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      applyFilter();
    }
  };

  const applyFilter = () => {
    if (!props.searchValue.length) {
      props.setSearchValue(props.filter.trim());
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-search-icon"></div>
      <div className="filter-input-container">
        <input className="filter-input" placeholder="search movie" value={filterValue()} onChange={onFilterChange} onKeyDown={onKeyDown} />
        <FilterReccomendations />
      </div>
      <button className="filter-search-button" onClick={applyFilter}>search</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    movies: state.movies,
    searchValue: state.searchValue,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => {
      dispatch(setFilter(value))
    },
    setSearchValue: value => {
      dispatch(setSearchValue(value))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
