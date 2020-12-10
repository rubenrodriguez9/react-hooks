import React from 'react'

 const Todos = ({todoRay: {id, isComplete,todo}, todoDone, deleteTodo}) => {

    function handleDeleteTodo(id){
        deleteTodo(id)

        console.log(id);
    }

    return (
        <div style={{textDecoration: isComplete ? "line-through" : ""}} >

            {todo}
            <button onClick={() => {todoDone(id)}} >Do</button>
            <button onClick={() => handleDeleteTodo(id)} >Delete</button>
            
        </div>
    )
}
export default Todos