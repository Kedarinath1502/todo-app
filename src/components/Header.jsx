
export default function Header ( props ){
    const {todos} = props
    const Tasks = todos.length
    return (
        <div className="Header"> You have total {Tasks} tasks </div>
    )
}