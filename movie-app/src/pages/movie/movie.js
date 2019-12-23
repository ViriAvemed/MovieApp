import React, {useState} from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch'
import { URL_API, API } from "../../utils/constants";
import './movie.scss';
import ModalVideo from "../../components/ModalVideo";

const Movie = () => {

    const {id} = useParams();
    const movieInfo = useFetch(
        `${URL_API}/movie/${id}?api_key=${API}&language=es-ES`
    );

    if(movieInfo.loading || !movieInfo.result){
        return 'Loading...';
    }

    return <RenderMovie movieInfo={movieInfo.result}/>;
};

const RenderMovie =(props)=> {
    const {
        movieInfo: { backdrop_path, poster_path}
    } = props;
    const backdropPath =`http://image.tmdb.org/t/p/original${backdrop_path}`;


    return (
        <Row className="movie" style={{backgroundImage: `url('${backdropPath}')`}}>
            <div className="movie_dark">
                <Row className="row-poster">
                    <Col md={{ span: 5, offset: 1 }}  className="movie_poster">
                        <PosterMovie image={poster_path}/>
                    </Col>
                    <Col md={{ span: 5}} className="movie_info mr-3">
                        <MovieInfo movieInfo={props.movieInfo}/>
                    </Col>
                </Row>
            </div>

        </Row>
    )

};

const PosterMovie=(props)=> {
    const { image } = props;
    const posterPath= `http://image.tmdb.org/t/p/original${image}`;
    return <div style={{backgroundImage: `url('${posterPath}')`}}/>;
};

const MovieInfo =(props)=> {
    const { movieInfo: {id, release_date, overview, genres, title} }= props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const videoMovie = useFetch(
        `${URL_API}/movie/${id}/videos?a[i_key=${API}&language=es-Es`
    );

    const openModal = () => setIsVisibleModal(true);
    const closeModal =() => setIsVisibleModal(false);

    const renderVideo =()=> {
        if(videoMovie.result){
            if(videoMovie.result.results.length > 0) {
                return (
                    <>
                    <Button variant="outline-primary" onClick={openModal}>Ver trailer</Button>
                    <ModalVideo videoKey={videoMovie.result.results[0].key}
                    videoPlatform={videoMovie.result.results[0].site}
                    isOpen={isVisibleModal
                        close={closeModal}>

                        </ModalVideo>
                        </>

                )
            }
        }
    };

    return (
        <Row className="movie_info-header">
            <h1>
                {title}
                <span>{release_date}</span>
            </h1><br/>

            <ModalVideo />
            <div className="movie_info-content">
                <h3>General</h3>
                <p>{overview}</p>
                <h3>Generos</h3>
                <ul>{genres.map(genre =>
                    <li key={genre.id}>{genre.name}</li>
                )}
                </ul>

            </div>

        </Row>
    )
};

export default Movie;
