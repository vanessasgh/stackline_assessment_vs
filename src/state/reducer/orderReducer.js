const reducer = function (state = "DESC", action) {
    switch (action.type) {
        case "DESC":
            return "ASC";
        case "ASC":
            return "DESC";
        default:
            return state;
    }
}

export default reducer;