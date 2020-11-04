import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'
import TodoItem from './TodoItem'

const BlackTodoItem = styled(TodoItem)`
background: black;
`

function App() {
  return (
    <div className="App">
      <TodoItem content="123" />
      <BlackTodoItem content="789" size="XL" />
    </div>
  );
}

export default App;
