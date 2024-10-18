import TodoCard from './TodoCard'

export default function TodoList(props){
    const {todos, selectedTab} = props
    const filtertodolist = (selectedTab == 'All')? 
        todos : (selectedTab == 'open')? todos.filter((todo) => !todo.completed)
        : todos.filter((todo) => todo.completed) 
    return(
        <div>
            {filtertodolist.map((todo, todoIndex)=>(
                <TodoCard todo={todo} key={todoIndex} 
                todoIndex={ todos.findIndex(val => val.input === todo.input)} {...props}/>
            ))}
        </div>
    )
}