
function TodoCard (props){
    const {todo, todoIndex, updateTodo, deleteTodo } = props
    return (
        <div className="card">
            <div>
            {todo.input}
               {!todo.completed? <button onClick={()=>{
                    updateTodo(todoIndex)
                }} disabled={todo.completed} className="edit-buttons"> 
                    Done
                </button> : null}
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