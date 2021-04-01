import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import {Poster, POSTER_PATH} from "./Movie";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import Trailer from "./Trailer";

const BG_PATH = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces'

const MovieDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=baacee587b52679e93f67d12424c4cb3&append_to_response=videos`)
            .then(({data}) => setMovie(data))
    }, [id])

    if (!movie.id) return null
    return (
        <MovieWrapper backdrop={`${BG_PATH}${movie.backdrop_path}`}>
           <MovieContent>
               <Overdrive id={movie.id}>
                   <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt=""/>
               </Overdrive>
               <div>
                   <h1>{movie.title}</h1>
                   <h3>{movie.release_date}</h3>
                   <p>{movie.overview}</p>
                   <Trailer movie={movie}/>
               </div>
           </MovieContent>
        </MovieWrapper>
    );
};

export default MovieDetails;

const MovieWrapper = styled.div`
    background: url(${({backdrop}) => backdrop}) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding-top: 50vh;
`

const MovieContent = styled.div`
    background: #fff;
    display: flex;
    padding: 30px;
    img {
    position: relative;
    top: -5rem;
    }   
    > div {
    margin-left: 30px;
    }
`