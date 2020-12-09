import React, {useState} from 'react'

const TodoInput = ({addTodo}) => {

    const [todo, setTodo] = useState("")

    function handleCreateNewTodo(e){
        e.preventDefault()

        addTodo(todo)
    }

    return (
        <form onSubmit={handleCreateNewTodo}  >
            <input 
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            <button >Submit</button>
        </form>
    )
}

export default TodoInput
