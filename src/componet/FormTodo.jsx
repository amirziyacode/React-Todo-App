import {useState} from "react";


function FormTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const submit = ()=>{
        if(description != null && title != null){

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
            <button className="btn btn-primary mt-3">Add Todo</button>
        </div>
    )
}

export default FormTodo;