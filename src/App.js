import "./App.css";
import React, { useState, memo } from "react";
import useInput from "./useInput";
import useTodos from "./useTodos";

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

  // function Button({ onClick, children }) {
  //   return (
  //   <button onClick={onClick}>{children}</button>
  //   )
  // }

  class Button extends React.Component {
    render() {
      const { onClick, children } = this.props;
      return <button onClick={onClick}>{children}</button>;
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleButtonClick}>Add todo</Button>
      <Button onClick={handleFilterAll}>All</Button>
      <Button onClick={handleFilterDone}>Done</Button>
      <Button onClick={handleFilterNotDone}>Not Done</Button>
      <Button onClick={handleClearAll}>Clear All</Button>
      {isFilterState(filter, todos)}
    </div>
  );
}

export default App;
