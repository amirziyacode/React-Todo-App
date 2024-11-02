import TodoRow from "./TodoRow";


function TodoTable(props = {todos:[]}){
    return(
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            {props.todos.map(
                todo => (
                    <TodoRow rowId={todo.id} rowTitle={todo.title} rowDescription={todo.description}/>
                )
            )}
            </tbody>
        </table>
    )
}

export default TodoTable;