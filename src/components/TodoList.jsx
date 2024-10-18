import TodoCard from './TodoCard'

export default function TodoList(props){
    const {todos} = props
    return(
        <div>
            {todos.map((todo, todoIndex)=>(
                <TodoCard todo={todo} key={todoIndex}/>
            ))}
        </div>
    )
}