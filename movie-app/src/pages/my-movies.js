import React, {useEffect} from 'react';
import {useSelector, useDispatch, } from 'react-redux'
import allActions from '../actions'

const MisMovies = () => {
    const counter = useSelector(state => state.counter);

    console.log(counter.length);
    const dispatch = useDispatch();

    return (
        <div className="App text-center">
            {(counter.length>0) ? counter.map(function (peli) {
                return(
                    <p className="h4">{peli.title}</p>
                )
            }): <p className="h4">TUS PELÍCULAS FAVORITAS</p>
            }
        </div>

    )
};

export default MisMovies;

