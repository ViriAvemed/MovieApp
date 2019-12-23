import React, {useEffect, useState} from "react";
import { withRouter } from 'react-router-dom';
import './Search.scss';
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import {URL_API, API} from "../../utils/constants";
import queryString from "querystring";
import {Row,Col, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


const Search=(props) => {
    const {location, history } = props;
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(()=> {

        (async () => {

            // console.log(location.search);
            const searchValue = queryString.parse(location.search);
            const  s  = searchValue['?s'];
            const response = await fetch(
                `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
            );
            const movies = await response.json();
            setSearchValue(s);
            setMovieList(movies);
        })();

    }, [location.search]);

    const onChangeSearch = e => {
        let urlParams = queryString.parse(location.search);
        urlParams['s'] = e.target.value;
        delete urlParams['?s'];
        history.push(`?${decodeURIComponent(queryString.stringify(urlParams)).replace('?','')}`);
        setSearchValue(e.target.value)
    };

    return (
        <Row>
            <Col className="Search">
                <h1>BUSCADOR DE PELÍCULAS</h1>
                <InputGroup className="mb-3" >
                    <FormControl onChange={onChangeSearch} value={searchValue}
                        placeholder="Ingresa una palabra clave..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary"><img src="../../assets/img/lupa.png" alt=""/></Button>
                    </InputGroup.Append>
                </InputGroup>
                {movieList.results && (
                    <Row>
                        <Col>
                            <MovieCatalog movies={movieList}/>
                        </Col>
                    </Row>
                )}

            </Col>
            <Footer/>
        </Row>
    )

};

export default withRouter(Search);
