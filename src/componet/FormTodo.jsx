import {useState} from "react";
import axios from "axios";


function FormTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const isDo = false;
    const submit = async ()=>{
        if(description != null || title != null){
           await axios.post("http://localhost:8080/api/v1/todos", {
                title,
                description,
                isDo,
        }).then((response) => {
                console.log(response.status, response.data.token);
            });
            window.location.reload();
        }else{
            alert("Title and Description cannot be empty !!! ")
        }
    }
    return (
        <div className="mt-5">
            <div className="mb-3">
                <label className="form-lable">Title</label>
                <input className="form-control" required value={title} onChange={e => setTitle(e.target.value)} ></input>
            </div>
            <div className="mb-3">
                <label className="form-lable">Description</label>
                <textarea className="form-control" required value={description} rows={3} onChange={e =>
                    setDescription(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary mt-3" onClick={submit}>Add Todo</button>
        </div>
    )
}

export default FormTodo;