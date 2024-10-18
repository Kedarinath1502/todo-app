import Header from './components/Header.jsx'
import Tabs from './components/Tabs.jsx'
import TodoCard from './components/TodoCard.jsx'
import TodoList from './components/TodoList.jsx'
import Input from './components/Input.jsx'
import { useState } from 'react'
function App() {
//   const todos = [
//     {input : "this is task 1", completed : true},
//     {input : "this is task 2", completed : false},
//     {input : "this is task 3", completed : false},
//     {input : "this is task 4", completed : false}
// ]
  const [todos, setTodos] = useState([
    {input : "this is task 1", completed : false}
  ])
  function handleAddTodo(newTask) {
    const newTodoList = [...todos, {input: newTask, completed:false}]
    setTodos(newTodoList)
  }
  return (
    <>
      <Header todos={todos}/>
      <Tabs  todos={todos}/>
      <TodoList todos={todos}/>
      <Input handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
