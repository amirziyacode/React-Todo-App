import axios from "axios";

function TodoRow(props = {rowId:Number,rowDescription:String,rowTitle:String}) {
    const deleteFun = async () => {
        // await axios.delete(`http://localhost:8080/api/v1/todos/${props.rowId}`)
        console.log(props.rowId)
        // window.location.reload();
    }
    return (
        <tr>
            <th scope="row">
                <div className="mt-1">
                    {props.rowId}
                </div>
            </th>
            <td>
                <div className="mt-1">
                    {props.rowTitle}
                </div>
            </td>
            <td>
                <div className="mt-1">
                    {props.rowDescription}
                </div>
            </td>
            <td>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={deleteFun}>Delete</button>
                    <button type="button"  id="updateButton" className="btn btn-outline-primary btn-sm">Update</button>
                </div>
            </td>
        </tr>
    )
}

export default TodoRow;