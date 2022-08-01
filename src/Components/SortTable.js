import '../App.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

export default function SortTable(props) {
    const [data, setData] = useState(props.tableData)
    const [order, setOrder] = useState("DESC")
    const [chosenCol, setChosenCol] = useState(null)

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
            setData(sorted);
            setOrder("DESC");
            setChosenCol(col);
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
            setData(sorted);
            setOrder("ASC");
            setChosenCol(col);
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

    var tableRows = data.map((row) => (
        <tr className='tableRow'>
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
            <TextWithIconHeader header={"WEEK ENDING"} columnNameFromData={"weekEnding"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
            <TextWithIconHeader header={"RETAIL SALES"} columnNameFromData={"retailSales"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
            <TextWithIconHeader header={"WHOLESALE SALES"} columnNameFromData={"wholesaleSales"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
            <TextWithIconHeader header={"UNITS SOLD"} columnNameFromData={"unitsSold"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
            <TextWithIconHeader header={"RETAILER MARGIN"} columnNameFromData={"retailerMargin"} order={props.order} sorting={props.sorting} chosenCol={props.chosenCol} />
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