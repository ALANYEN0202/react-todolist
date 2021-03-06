import styled from "styled-components";
import { MEDIA_QUERY_MD } from "./constants/style";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const TodoItemWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 70%;
  border: 1px solid black;
  & + & {
    margin-top: 5px;
  }
`;
const TodoContent = styled.div`
  color: rgba(123, 50, 10);
  font-size: 20px;

  ${(props) =>
    props.$isDone &&
    `
text-decoration: line-through;
`}

  ${(props) =>
    props.size === "XL" &&
    `
font-size: 30px;
`}
`;
const TodoButtonWrapper = styled.div``;
const Button = styled.button`
  padding: 4px;
  background: white;

  & + & {
    margin-left: 4px;
  }

  &:hover {
    color: ${(props) =>
      props.isDone
        ? props.theme.colors.primary_white
        : props.theme.colors.primary_white};
    background: ${(props) =>
      props.isDone
        ? props.theme.colors.primary_red
        : props.theme.colors.primary_green};
    border-radius: 8px;
    transition: border-radius 0.05s;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 20px;
  }
`;
const RedButton = styled(Button)`
  color: red;

  &:hover {
    color: ${(props) => props.theme.colors.primary_white};
    background: ${(props) => props.theme.colors.primary_red};
  }
`;

//  class TodoItemC extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleToggleClick = this.handleToggleClick.bind(this);
//     this.handleDeleteClick = this.handleDeleteClick.bind(this);
//   }
//   handleToggleClick() {
//     const { handleToggleIsDone, todo } = this.props;
//     handleToggleIsDone(todo.id);
//   }

//   handleDeleteClick() {
//     const { handleDeleteTodo, todo } = this.props;
//     handleDeleteTodo(todo.id);
//   }
//   render() {
//     const { size, todo } = this.props;
//     return (
//       <TodoItemWrapper
//         className={`todoList ${todo.isDone ? "completed" : ""}`}
//         data-id={todo.id}
//       >
//         <TodoContent $isDone={todo.isDone} size={size}>
//           {todo.content}
//         </TodoContent>
//         <TodoButtonWrapper>
//           <Button onClick={this.handleToggleClick}>
//             {todo.isDone ? "未完成" : "已完成"}
//           </Button>
//           <RedButton onClick={this.handleDeleteClick}>刪除</RedButton>
//         </TodoButtonWrapper>
//       </TodoItemWrapper>
//     );
//   }
// }

export default function TodoItem({
  size,
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
}) {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id);
  };

  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  };

  return (
    <TodoItemWrapper
      className={`todoList ${todo.isDone ? "completed" : ""}`}
      data-id={todo.id}
    >
      <TodoContent $isDone={todo.isDone} size={size}>
        {todo.content}
      </TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleToggleClick} isDone={todo.isDone}>
          {todo.isDone ? "未完成" : "已完成"}
        </Button>
        <RedButton onClick={handleDeleteClick}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}
