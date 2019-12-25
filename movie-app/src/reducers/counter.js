const counter = (

    state = [] , action) => {
    if (action.data){
        state.push(action.data);
        switch(action.type){
            case "ADD_MOVIE":
                return state;
            case "DELETE_MOVIE":
                return state;
            default:
                return state
        }
    }else {
        return state
    }
};

export default counter;


