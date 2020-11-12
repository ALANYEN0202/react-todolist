import "./App.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
import useInput from "./useInput";
import useTodos from "./useTodos";

// function writeTodosToLocalStorage(todos) {
//   window.localStorage.setItem("todos", JSON.stringify(todos));
// }

function App() {
  const {
    id,
    todos,
    setTodos,
    value,
    setValue,
    handleChange,
    handleButtonClick,
    filter,
    setFilter,
    handleFilterAll,
    handleFilterDone,
    handleFilterNotDone,
    handleClearAll,
    isFilterState,
  } = useTodos();
  // const [todos, setTodos] = useState(() => {
  //   let todoData = window.localStorage.getItem("todos") || "";
  //   if (todoData) {
  //     todoData = JSON.parse(todoData);
  //     if (todoData.length > 0) {
  //       id = todoData[0].id + 1;
  //     }
  //   } else {
  //     todoData = [];
  //   }
  //   return todoData;
  // });
  // const { value, setValue, handleChange } = useInput();

  // const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   writeTodosToLocalStorage(todos);
  // }, [todos]);

  // const handleButtonClick = () => {
  //   setTodos([
  //     {
  //       id: id.current,
  //       content: value,
  //       isDone: false,
  //     },
  //     ...todos,
  //   ]);
  //   setValue("");
  //   id.current++;
  // };

  // const handleDeleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // const handleToggleIsDone = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== id) return todo;
  //       return {
  //         ...todo,
  //         isDone: !todo.isDone,
  //       };
  //     })
  //   );
  // };

  // const handleFilterAll = () => {
  //   setFilter("all");
  // };

  // const handleFilterDone = () => {
  //   setFilter("done");
  // };

  // const handleFilterNotDone = () => {
  //   setFilter("notDone");
  // };

  // const handleClearAll = () => {
  //   setTodos([]);
  // };

  // function isFilterState(filter, todos) {
  //   if (filter === "all") {
  //     return todos.map((todo) => (
  //       <TodoItem
  //         key={todo.id}
  //         todo={todo}
  //         handleDeleteTodo={handleDeleteTodo}
  //         handleToggleIsDone={handleToggleIsDone}
  //       />
  //     ));
  //   }
  //   if (filter === "done") {
  //     return todos
  //       .filter((todo) => todo.isDone)
  //       .map((todo) => (
  //         <TodoItem
  //           key={todo.id}
  //           todo={todo}
  //           handleDeleteTodo={handleDeleteTodo}
  //           handleToggleIsDone={handleToggleIsDone}
  //         />
  //       ));
  //   }
  //   if (filter === "notDone") {
  //     return todos
  //       .filter((todo) => !todo.isDone)
  //       .map((todo) => (
  //         <TodoItem
  //           key={todo.id}
  //           todo={todo}
  //           handleDeleteTodo={handleDeleteTodo}
  //           handleToggleIsDone={handleToggleIsDone}
  //         />
  //       ));
  //   }
  // }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleChange}
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
