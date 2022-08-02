export const sortData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SORT",
            sortedData: data
        })
    }
}

export const switchOrder = (order) => {
    return (dispatch) => {
        dispatch({
            type: order
        })
    }
}

export const changeChosenCol = (colIndex) => {
    return (dispatch) => {
        dispatch({
            type: "CHANGE",
            col: colIndex
        })
    }
}