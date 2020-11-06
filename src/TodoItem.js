import logo from "./logo.svg";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "./constants/style";

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
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
    color: ${(props) => props.theme.colors.primary_300};
    background: ${(props) => props.theme.colors.primary_400};
  }

  ${MEDIA_QUERY_MD} {
    font-size: 20px;
  }
`;
const RedButton = styled(Button)`
  color: red;
`;

export default function TodoItem({
  className,
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
      className={className}
      data-id={todo.id}
      data-isDone={todo.isDone}
    >
      <TodoContent $isDone={todo.isDone} size={size}>
        {todo.content}
      </TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleToggleClick}>
          {todo.isDone ? "未完成" : "已完成"}
        </Button>
        <RedButton onClick={handleDeleteClick}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}
