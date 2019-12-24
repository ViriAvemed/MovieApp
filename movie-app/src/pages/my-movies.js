import React, {useEffect} from 'react';
import {useSelector, useDispatch, } from 'react-redux'
import allActions from '../actions'
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";

const MisMovies = () => {
    const counter = useSelector(state => state.counter);

    console.log(counter.length);
    const dispatch = useDispatch();

    return (

        <div className="App text-center">
            <h1 className="text-center mt-5 mb-5 h1">
                TUS PELÍCULAS FAVORITAS
            </h1>
            {(counter.length> 0) ? counter.map(function (peli) {
                return(
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Header>{peli.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{peli.title}</Card.Title>
                            <Card.Text> {peli.overview}</Card.Text>
                        </Card.Body>
                    </Card>

                )
            }): (
                <Col>
                    <Spinner animation="grow" />
                </Col>
            )}

        </div>

    )
};

export default MisMovies;

