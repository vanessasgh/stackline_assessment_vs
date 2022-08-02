const reducer = function (state = null, action) {
    switch (action.type) {
        case "CHANGE":
            return action.col;
        default:
            return state;
    }
}

export default reducer;