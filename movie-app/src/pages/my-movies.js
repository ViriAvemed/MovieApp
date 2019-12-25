import React from 'react';
import {useSelector, useDispatch,} from 'react-redux'
import allActions from '../actions'
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MisMovies = () => {
    const counter = useSelector(state => state.counter);
    console.log(counter);
    const dispatch = useDispatch();

        return (
            <Row >
                <Col className="App text-center">
                    <h1 className="text-center mb-5 h1" style= {{ marginTop: '8%'}}>
                        TUS PELÍCULAS FAVORITAS
                    </h1>

                    <Col>
                        {(counter.length> 0) ? counter.map( (movie) => (
                            <Card bg="dark" text="white" style= {{ width: '50%', marginLeft:"24%" }}  className="mb-2" key={movie.id} movie={movie}>
                                <Card.Header className="text-justify d-flex justify-content-between">
                                    {movie.title}
                                    <Button variant="outline-warning"  onClick={() => dispatch(allActions.counterActions.deleteMovie({"title":movie.title}))}>x</Button>
                                </Card.Header>
                            </Card>
                        )):(
                            <Col>
                                <Spinner animation="grow" />
                            </Col>
                        )}
                    </Col>
                </Col>
            </Row>
        )
    };

        export default MisMovies;

