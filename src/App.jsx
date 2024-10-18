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
    {input : "this is task 1", completed : false},
     {input : "this is task 2", completed : true}
  ])
  const [selectedTab, setSelectedTab] = useState('open')
  console.log(selectedTab)

  function handleAddTodo(newTask) {
    const newTodoList = [...todos, {input: newTask, completed:false}]
    setTodos(newTodoList)
  }

  function updateTodo(index) {
      let updatedTodoList = [...todos]
      updatedTodoList[index]['completed'] = true
      setTodos(updatedTodoList)
  }

  function deleteTodo(index) {
    let modifiedTodoList = [...todos]
    modifiedTodoList = modifiedTodoList.filter((val,valIndex)=>{ return valIndex !== index})
    setTodos(modifiedTodoList)
    
  }

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList updateTodo={updateTodo} selectedTab={selectedTab}
        deleteTodo={ deleteTodo} setSelectedTab={setSelectedTab} todos={todos}/>
      <Input handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
