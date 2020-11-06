import "./App.css"
import styled from "styled-components"
import TodoItem from "./TodoItem"
import {useState} from "react"
const BlackTodoItem = styled(TodoItem)`
  background: black;
`;

let id = 1;
function App() {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    setTodos([
      {
        id,
        content: value,
        isDone: false,
      },
      ...todos,
    ]);
    setValue("");
    id++;
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Add todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ))}
    </div>
  );
}

export default App;
