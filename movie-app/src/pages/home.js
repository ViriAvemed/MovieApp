import React from "react";
import { Row, Col } from "react-bootstrap";
import CarouselMovies from "../components/Carousel/Carousel";
import useFetch from "../hooks/fetch";
import { URL_API, API } from "../utils/constants";
import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer/Footer"
import Container from "react-bootstrap/Container";

const Home = () => {
    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);
    console.log(newMovies);


    const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);
    console.log(newMovies);


    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <CarouselMovies movies={newMovies} />
                </Col>
                {/*<Col>*/}
                {/*    <MovieList title="PELÍCULAS POPULARES" movies={popularMovies}/>*/}
                {/*</Col>*/}
            </Row>
            <Row className="row-footer">
                <Footer/>
            </Row>

        </Container>

    )

};

export default Home;
