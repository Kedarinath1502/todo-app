
function TodoCard (props){
    const {todo, todoIndex, updateTodo, deleteTodo } = props
    return (
        <div className="card">
            <div>
            {todo.input}
                <button onClick={()=>{
                    updateTodo(todoIndex)
                }} className="edit-buttons"> 
                    Done
                </button>
                <button onClick={()=> {
                    deleteTodo(todoIndex)
                }} className="edit-buttons">
                    Delete
                </button>
          
            </div>
            
        </div>
    )
}
export default TodoCard