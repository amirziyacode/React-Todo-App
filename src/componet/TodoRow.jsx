
function TodoRow(props = {rowDescription:String,rowTitle:String}) {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.rowTitle}</td>
            <td>{props.rowDescription}</td>
        </tr>
    )
}

export default TodoRow;