import { useState } from 'react'
const Input = (props) => {
    const {handleAddTodo, todos} = props
    const [input, setInput] = useState('')
  
    return (
        <div className="input-container">
            <input id="input" name="inputbox"  value={input} className="input" 
            onChange = {(e) => {
                setInput(e.target.value)
            }} placeholder="Enter your todo" type="text" />
            <button className="submit-button" onClick={() => {
                if (!input) { return }
                let duplicate = false
                {todos.map((todo, todoIndex)=>{
                    if(todo.input === input){
                        alert('todo already exist')
                        duplicate = true
                    }
                })}
                if(duplicate) { 
                    setInput('')
                    return }
                handleAddTodo(input)
                setInput('')
            }}>Add todo</button>
        </div>
    );
}

export default Input