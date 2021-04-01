import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import propTypes from 'prop-types'
import Overdrive from "react-overdrive";

export const POSTER_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face'

const Movie = ({movie}) => {
    return (
        <Link to={`/${movie.id}`}>
            <Overdrive id={movie.id}>
                <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt=""/>
            </Overdrive>
        </Link>
    );
};

export default Movie;

Movie.propTypes = {
    movie: propTypes.object
}

export const Poster = styled.img`
    box-shadow: 0 0 20px black;
`