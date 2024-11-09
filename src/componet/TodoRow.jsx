import axios from "axios";
import {useState} from "react";
import UpdateForm from "./UpdateForm";

function TodoRow(props = {rowId:Number,rowDescription:String,rowTitle:String,do:Boolean}) {
    const deleteFun = async () => {
        await axios.delete(`http://localhost:8080/api/v1/todos/${props.rowId}`)
        window.location.reload();
    }
    const setDo = async () => {
        var isdo = !props.do; 
        console.log(isdo);
        await axios.put(`http://localhost:8080/api/v1/todos/do/${props.rowId}`,{
            "do": isdo
        });
        window.location.reload();
    }
    const [showLogin, setShowLogin] = useState(false);
    const doIt = () => {
        setDo(props.do)
    } 
    const handleShowLogin = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };
    return (
        <tr >
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
                    {props.do === false ?    
                    <button type="button"  id="do" className="btn btn-outline-danger btn-sm" onClick={setDo}>NotDo</button> :
                    <button type="button" id="do" className="btn btn-success btn-sm" onClick={setDo}>Done !</button>}

                    <button type="button" className="btn btn-danger btn-sm" onClick={deleteFun}>Delete</button>
                    <button type="button" id="updateButton" className="btn btn-primary btn-sm"
                            onClick={handleShowLogin}>Update
                    </button>
                    
                    <div className="App">
                        {showLogin && (
                            <div className="popup">
                                <div className="popup-content">
                                    <span className="close" onClick={handleCloseLogin}>&times;</span>
                                    <h2>Add Todo</h2>
                                    <UpdateForm id={props.rowId} description={props.rowDescription}
                                                title={props.rowTitle}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </td>

        </tr>
    )
}

export default TodoRow;