import React from "react";
import {ListGroup, Image, Button, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieList.scss"
import Spinner from "react-bootstrap/Spinner";


const MovieList = (props) => {
    const {movies} = props;
    if(movies.loading || !movies.result){
        return <Spinner animation="grow" />;
    }

    const { results } = movies.result;

    return (

        <Col>
            <h1 className="text-center">PELÍCULAS POPULARES</h1>
            <Row>
                <Col className="d-flex justify-content-center">
                    <ListGroup as="ul" className="movie-list">
                            {results.map(movie => (
                                    <Movie key={movie.id} movie={movie}/>
                            ))}
                    </ListGroup>
                </Col>
            </Row>
        </Col>
    )

};

const Movie =(props)=> {
    const {
        movie: {id, backdrop_path, title}
    } = props;

    const backdropPath = `http://image.tmdb.org/t/p/original${backdrop_path}`;

    return (

        <ListGroup.Item as="li" className="list-item d-flex d-flex justify-content-between">
            <Image className="avatar" src={`${backdropPath}`} roundedCircle />
            <p className="m-0 p-0">{title}</p>
            <Link to={`/movie/${id}`}>
                <Button variant="primary">Ir</Button>
            </Link>
        </ListGroup.Item>



    )

};




export default MovieList;
