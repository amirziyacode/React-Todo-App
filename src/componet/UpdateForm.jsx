import {useState} from "react";
import axios from "axios";


function UpdateForm(props ={id:Number,description:String,title:String}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const isDo = false;

    const update = async ()=>{
        if(description != null && title != null){
            await axios.put(`http://localhost:8080/api/v1/todos/${props.id}`,{
                title,
                description,
                isDo});
            }
        window.location.reload();
    }
    return (
        <div className="mt-5">
            <div className="mb-3">
                <label className="update-lable">Title</label>
                <input className="form-control" placeholder={props.title} readOnly={false} onChange={e => setTitle(e.target.value)} ></input>
            </div>
            <div className="mb-3">
                <label className="update-lable">Description</label>
                <textarea className="form-control"  placeholder={props.description}  rows={3} onChange={e =>
                    setDescription(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary mt-3" onClick={update}>Update Todo</button>
        </div>
    )
}

export default UpdateForm;