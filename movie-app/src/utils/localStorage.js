export const getStateLocalStorage = () => {
    const moviesStorage = localStorage.getItem("movies");
    if (moviesStorage === null ) {
        return undefined;
    } else {
        return JSON.parse(moviesStorage);
    }
};

export const setStateLocalStorage = movies => {
    localStorage.setItem("movies", JSON.stringify(movies))
};


