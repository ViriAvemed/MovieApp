const counter = (state=[] , action) => {

    if (action.data){
        state.push(action.data);
        switch(action.type){
            case "INCREMENT":
                return state;
            case "DECREMENT":
                return state;
            default:
                return state
        }
    }else {
        return state
    }

};

export default counter
