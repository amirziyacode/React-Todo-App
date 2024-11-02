import './App.css';
import TodoTable from "./componet/TodoTable";
import {useEffect, useState} from "react";
import axios from "axios";
import FormTodo from "./componet/FormTodo";

function App() {
    const [todoModel,setTodo] = useState([]);
    useEffect(() => {
        const fetData = async ()=>{
            // const response = await axios.get("http://localhost:8080/api/v1/todos")
            // setTodo(response.data);
        }
        fetData();
    }, []);
  return (
      <div className="mt-5 container">
          <div className="card">
              <div className="card-header">
                  Your Todo
              </div>
              <div className="card-body">
                  {todoModel == null ? <TodoTable todos={todoModel}/> : <h2 className="Load">Loading !! </h2>}
                  <FormTodo/>
              </div>
          </div>
      </div>
  );
}

export default App;
