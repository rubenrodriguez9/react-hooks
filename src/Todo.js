import React from 'react'

 function Todo({todoRay, deleteTodo, todoDonebyID, isComplete}) {

    

    return (
        <div style={{textDecoration: todoRay.isComplete ? "line-through": ""}} >
            {todoRay.todo}
            <button onClick={() => todoDonebyID(todoRay.id)} >Do</button>
            <button onClick={() => deleteTodo(todoRay.id)} >Delete</button>
            <hr/>
        </div>

    )
}
export default Todo