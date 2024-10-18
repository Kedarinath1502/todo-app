import { useState } from 'react'
const Input = (props) => {
    const {handleAddTodo} = props
    const [input, setInput] = useState('')
    console.log(input)
  
    return (
        <div className="input-container">
            <input value={input} className="input" onChange = {(e) => {
                setInput(e.target.value)
            }} placeholder="Enter your todo" type="text" />
            <button className="submit-button" onClick={() => {
                console.log("hi")
                if (!input) { return }
                handleAddTodo(input)
                setInput('')
            }}>Add todo</button>
        </div>
    );
}

export default Input