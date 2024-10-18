
function TodoCard (props){
    const {todo} = props
    return (
        <div className="card">
            {todo.input}
        </div>
    )
}
export default TodoCard