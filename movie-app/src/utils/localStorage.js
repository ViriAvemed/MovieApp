export const getStateLocalStorage = (favMovies) => {
    const moviesStorage = localStorage.getItem("favMovies");
    if (moviesStorage === null ) {
        return favMovies;
    } else {
        return JSON.parse(moviesStorage);
    }
};

export const setStateLocalStorage = (favMovies,empty) => {
    if(favMovies.length>0 || empty){
        console.log(favMovies);
        localStorage.setItem("favMovies", JSON.stringify(favMovies))
    }
};


