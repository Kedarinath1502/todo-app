
export default function Header ( props ){
    const {todos} = props
    const isPlural = todos.length != 1
    const word = isPlural ? "tasks" : "task"
    const Tasks = todos.length
    return (
        <div className="Header"> You have total {Tasks} {word} </div>
    )
}