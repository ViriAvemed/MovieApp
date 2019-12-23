const increment = (data) => {
    return {
        type: "INCREMENT",
        data:data
    }
};

const decrement = () => {
    return {
        type: "DECREMENT"
    }
};

export default {
    increment,
    decrement
};
