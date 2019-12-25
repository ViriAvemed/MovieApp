const addMovie = (data) => {
    return {
        type: "ADD_MOVIE",
        data: data
    }
};

const deleteMovie = (id) => {
    return {
        type: "DELETE_MOVIE",
        payload: id
    }
};

export default {
    addMovie,
    deleteMovie
};
