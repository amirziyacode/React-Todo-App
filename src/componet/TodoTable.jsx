import TodoRow from "./TodoRow";


function TodoTable(props = {todos:[]}){
    return(
        <div className="mt-3">
            <table className="table table-hover">
                <thead className="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Operations</th>
                </tr>
                </thead>
                <tbody>
                {props.todos.map(
                    todo => (
                        <TodoRow key={todo.id} rowId={todo.id} rowTitle={todo.title} rowDescription={todo.description} do={todo.do}/>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoTable;