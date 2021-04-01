import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import MoviesList from "./components/Movies-List";
import MovieDetails from "./components/Movie-Details";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={() => <MoviesList />} />
                <Route exact path='/:id' component={() => <MovieDetails />} />
            </Switch>
        </Router>
    );
};

export default App;