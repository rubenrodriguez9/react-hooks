import { useState } from 'react'

import React from 'react'

 function InputTodo({addTodo}) {

    const  [todo, setTodo] = useState('')

    function handleAddTodo(e) {
        e.preventDefault()

        addTodo(todo)
    }

    function handleDeleteTodo(id){
        
    }

    return (
        <form onSubmit={handleAddTodo}>
           <input 
           type="text"
           onChange={(e) => setTodo(e.target.value)}
           value={todo}
           /> 
           <button>Submit</button>
        </form>
    )
}
 
export default InputTodo