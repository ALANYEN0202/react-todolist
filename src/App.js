import "./App.css";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useState, useEffect, useRef, useLayoutEffect } from "react";

const BlackTodoItem = styled(TodoItem)`
  background: black;
`;

function writeTodosToLocalStorage(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

let id = 1;
function App() {
  const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem("todos") || "";
    if (todoData) {
      todoData = JSON.parse(todoData);
      if (todoData.length > 0) {
        id = todoData[0].id + 1;
      }
    } else {
      todoData = [];
    }
    return todoData;
  });

  const [value, setValue] = useState("");

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    writeTodosToLocalStorage(todos);
  }, [todos]);

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

  const handleFilterAll = () => {
    setFilter("all");
  };

  const handleFilterDone = () => {
    setFilter("done");
  };

  const handleFilterNotDone = () => {
    setFilter("notDone");
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  function isFilterState(filter, todos) {
    if (filter === "all") {
      return todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ));
    }
    if (filter === "done") {
      return todos
        .filter((todo) => todo.isDone)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleIsDone={handleToggleIsDone}
          />
        ));
    }
    if (filter === "notDone") {
      return todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleIsDone={handleToggleIsDone}
          />
        ));
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Add todo</button>
      <button onClick={handleFilterAll}>All</button>
      <button onClick={handleFilterDone}>Done</button>
      <button onClick={handleFilterNotDone}>Not Done</button>
      <button onClick={handleClearAll}>Clear All</button>
      {isFilterState(filter, todos)}
    </div>
  );
}

export default App;
