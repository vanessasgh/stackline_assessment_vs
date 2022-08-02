import '../App.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"

export default function SortTable() {
    const data = useSelector((state) => state.data);
    const order = useSelector((state) => state.order);
    const chosenCol = useSelector((state) => state.chosenCol);

    const dispatch = useDispatch();
    const { sortData, switchOrder, changeChosenCol } = bindActionCreators(actionCreators, dispatch);

    // sorting logic for table's data
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) => {
                if (Number.isInteger(a[col])) {
                    return a[col] - b[col];
                } else {
                    return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                }
            }
            )
            sortData(sorted);
            switchOrder("ASC");
            changeChosenCol(col);
        }
        if (order === "DESC") {
            const sorted = [...data].sort((a, b) => {
                if (Number.isInteger(a[col])) {
                    return b[col] - a[col];
                } else {
                    return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                }
            }
            )
            sortData(sorted);
            switchOrder("DESC");
            changeChosenCol(col);
        }
    }

    return (
        <table className='table'>
            <TableHeaderList order={order} sorting={sorting} chosenCol={chosenCol} />
            <tbody className='tableContent'>
                <TableRowList data={data} />
            </tbody>
        </table>
    )
}

function TableRowList(props) {
    var data = props.data;
    var keyValue = 1;
    var tableRows = data.map((row) => (
        <tr className='tableRow' key={keyValue++}>
            <td className='tableCell'>{row.weekEnding}</td>
            <td className='tableCell'>{row.retailSales}</td>
            <td className='tableCell'>{row.wholesaleSales}</td>
            <td className='tableCell'>{row.unitsSold}</td>
            <td className='tableCell'>{row.retailerMargin}</td>
        </tr>
    ))
    return tableRows;
}

function TableHeaderList(props) {
    return (
        <thead>
            <tr>
                <TextWithIconHeader header={"WEEK ENDING"} columnNameFromData={"weekEnding"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
                <TextWithIconHeader header={"RETAIL SALES"} columnNameFromData={"retailSales"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
                <TextWithIconHeader header={"WHOLESALE SALES"} columnNameFromData={"wholesaleSales"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
                <TextWithIconHeader header={"UNITS SOLD"} columnNameFromData={"unitsSold"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
                <TextWithIconHeader header={"RETAILER MARGIN"} columnNameFromData={"retailerMargin"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
            </tr>
        </thead>
    );
}

function TextWithIconHeader(props) {
    var order = props.order;
    var header = props.header;
    var columnNameFromData = props.columnNameFromData;

    var isChosenCol = props.chosenCol === columnNameFromData;

    var icon = <FontAwesomeIcon icon={faSort} className="iconTH" />
    if (isChosenCol) {
        if (order === "ASC") {
            icon = <FontAwesomeIcon icon={faSortUp} className="iconTH" />
        } else if (order === "DESC") {
            icon = <FontAwesomeIcon icon={faSortDown} className="iconTH" />
        }
    }
    return (
        <th onClick={() => { props.sorting(columnNameFromData) }} className='tableTh'>
            <div className='textWithIconTH'>
                {header}
                {icon}
            </div>
        </th>
    )
}