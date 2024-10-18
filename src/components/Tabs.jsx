export default function Tabs (props){
    const {todos, selectedTab, setSelectedTab} = props 
    const tabs = ['All', 'open', 'completed']
    const count = {
        All : todos.length,
        open : todos.filter((todo) => !todo.completed ).length,
        completed : todos.filter((todo) => todo.completed).length
    }
    
    return (
        <div>
        <div className = "tab-container">
            {tabs.map((tab, tabIndex) => (
                    <button onClick={()=> {
                        setSelectedTab(tab)
                    }} key = {tabIndex} className = {tab === selectedTab ? "button-selected": "button"}>
                        {tab}({count[tab]})
                    </button>    
            ))}
        </div>
        <hr/>
        </div>
        
    )
}