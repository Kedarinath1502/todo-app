import Header from './components/Header.jsx'
import Tabs from './components/Tabs.jsx'
import TodoCard from './components/TodoCard.jsx'
import TodoList from './components/TodoList.jsx'
import Input from './components/Input.jsx'
import { useState, useEffect } from 'react'
function App() {
  const [todos, setTodos] = useState([
    {input : "this is task 1", completed : false},
     {input : "this is task 2", completed : true}
  ])
  const [selectedTab, setSelectedTab] = useState('open')

  function handleAddTodo(newTask) {
    const newTodoList = [...todos, {input: newTask, completed:false}]
    setTodos(newTodoList)
    saveToLocal(newTodoList)
  }

  function updateTodo(index) {
      let updatedTodoList = [...todos]
      updatedTodoList[index]['completed'] = true
      setTodos(updatedTodoList)
      saveToLocal(updatedTodoList)
  }

  function deleteTodo(index) {
    let modifiedTodoList = [...todos]
    modifiedTodoList = modifiedTodoList.filter((val,valIndex)=>{ return valIndex !== index})
    setTodos(modifiedTodoList)
    saveToLocal(modifiedTodoList)
  }
  
  function saveToLocal(currenttodos){
    localStorage.setItem('todo',JSON.stringify({todos : currenttodos}))
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo')) { return }
    let db = JSON.parse(localStorage.getItem('todo'))
    setTodos(db.todos)
  }
  ,[])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList updateTodo={updateTodo} selectedTab={selectedTab}
        deleteTodo={ deleteTodo} setSelectedTab={setSelectedTab} todos={todos}/>
      <Input handleAddTodo={handleAddTodo}  todos = {todos}/>
    </>
  )
}

export default App
