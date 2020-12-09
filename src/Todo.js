import React from 'react'

const Todo = ({todoRay, removeTodo}) => {
    return (
        <div>
            {todoRay.todo}
            <div>
                <button>Done</button>
                <button onClick={() => removeTodo(todoRay.id)} >Delete</button>
            </div>
            <hr/>
        </div>
    )
}

export default Todo
