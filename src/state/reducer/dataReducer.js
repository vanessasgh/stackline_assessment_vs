import ItemData from '../../data/stackline_frontend_assessment_data_2021.json'
const data = ItemData[0].sales;

const reducer = function (state = data, action) {
    switch (action.type) {
        case "SORT":
            return action.sortedData;
        default:
            return state;
    }
}

export default reducer;