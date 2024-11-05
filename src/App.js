import './App.css';
import TodoTable from "./componet/TodoTable";
import {useEffect, useState} from "react";
import axios from "axios";
import FormTodo from "./componet/FormTodo";

function App() {
    const [todoModel,setTodo] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
            const response = await axios.get("http://localhost:8080/api/v1/todos")
            setTodo(response.data);
    }, []);
  return (
      <div className="mt-5 container">
          <div className="card">
              <div className="card-header">
                  Your Todo
              </div>
              <div className="card-body">
                  <TodoTable todos={todoModel}/>
                  <FormTodo/>
              </div>
          </div>
      </div>
  );
}

export default App;
