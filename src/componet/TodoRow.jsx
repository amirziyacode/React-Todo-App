import axios from "axios";

function TodoRow(props = {rowId:Number,rowDescription:String,rowTitle:String}) {
    const deleteFun = async () => {
        await axios.delete(`http://localhost:8080/api/v1/todos/${props.rowId}`)
        window.location.reload();
    }
    return (
        <tr onClick={deleteFun}>
            <th scope="row">{props.rowId}</th>
            <td >{props.rowTitle}</td>
            <td>{props.rowDescription}</td>
        </tr>
    )
}

export default TodoRow;