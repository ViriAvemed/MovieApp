import React, {useState, useEffect } from "react";
import {Row, Col, CardColumns } from "react-bootstrap";
import { URL_API, API } from "../utils/constants";
import Spinner from "react-bootstrap/Spinner";
import MovieCatalog from "../components/MovieCatalog";
import Pagination from '../components/Pagination';
import Footer from "../components/Footer";

const BestMovies = () => {
    const[ movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect( () => {
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/popular?api_key=${API}&language=es-MX&page=${page}`
            );

            const movies = await response.json();
            setMovieList(movies);
        })();
    },[page]);

    const onChangePage = page => (
        setPage(page)
    );

    return (
        <Row className="mt-5">
            <Row className="w-100">
                <Col className="d-flex justify-content-center">
                    <h1 className="text-center mt-5 mb-5 h1">
                        PELÍCULAS POPULARES
                    </h1>
                </Col>
            </Row>
            <CardColumns style={{width:'100vw', padding:'0 10%'}}>
                {movieList.results ? (
                    <MovieCatalog movies={movieList}/>
                ) : (
                    <Col className="d-flex justify-content-center">
                        <Spinner animation="grow" />
                    </Col>
                )}
            </CardColumns>
            <Row className="w-100 p-2">
                <Col className="d-flex justify-content-center">
                    <Pagination
                        className="pagination"
                        currentPage={movieList.page}
                        totalItems={movieList.total_results}
                        onChangePage={onChangePage}/>
                </Col>
            </Row>
            <Footer/>
        </Row>
    )
};

export default BestMovies;
