export default function Tabs (props){
    const {todos} = props 
    const tabs = ['All', 'open', 'completed']
    const count = {
        All : todos.length,
        open : todos.filter((todo) => todo.completed ).length,
        completed : todos.filter((todo) => !todo.completed).length
    }

    return (
        <div className = "tab-container">
            {tabs.map((tab, tabIndex) => (
                    <button key = {tabIndex} className = "button">
                        {tab}({count[tab]})
                    </button>    
            ))}
        </div>
    )
}