import './App.css';
import React  from 'react';
import { connect } from 'react-redux';
import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router basename="/star-wars">
        <Switch>
          <Route exact path="/movie/:title" component={Movie} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

export default connect(mapStateToProps)(App);