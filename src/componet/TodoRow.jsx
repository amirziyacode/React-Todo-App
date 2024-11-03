
function TodoRow(props = {rowId:Number,rowDescription:String,rowTitle:String}) {
    return (
        <tr>
            <th scope="row">{props.rowId}</th>
            <td >{props.rowTitle}</td>
            <td>{props.rowDescription}</td>
        </tr>
    )
}

export default TodoRow;