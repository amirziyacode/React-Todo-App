

function FormTodo(){

    return (
        <div className="mt-5">
            <div className="mb-3">
                <label className="form-lable">Assigned</label>
                <input className="form-control" ></input>
            </div>
            <div className="mb-3">
                <label className="form-lable">Description</label>
                <textarea className="form-control" rows={3}></textarea>
            </div>
            <button className="btn btn-primary mt-3">Add Todo</button>
        </div>
    )
}

export default FormTodo;