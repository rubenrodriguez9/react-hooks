import {useState, useContext} from 'react'
import {TodoInputContext} from './context/context'

export default function InputTodo() {

    const {addTodo} = useContext(TodoInputContext)

    const [value, setValue] = useState('')

    function handleAddTodo(e){
        e.preventDefault()
        
        addTodo(value)
        
    }

    return (
        <form onSubmit={handleAddTodo} >
            <input 
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />

            <button  >Submit</button>
        </form>
    )
}
