import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Todos from "./Todos"
import InputTodo from './InputTodo'
import {TodoInputContext} from './context/context'


 const App = () => {

  let originalTodos = [
    {
      id: uuidv4(),
      todo: "walk the dog",
      isComplete: false
    },
    {
      id: uuidv4(),
      todo: "walk the dino",
      isComplete: false
    },
    {
      id: uuidv4(),
      todo: "walk the cat",
      isComplete: false
    },
  ]


const [todos, setTodos] = useState(originalTodos)

function showAllTodos(){
  return todos.map((item) => {
    return <Todos key={item.id} todoRay={item} deleteTodo={deleteTodo} todoDone={todoDone} />
  })
}

function deleteTodo(id) {
  let arr = todos.filter((item) => {
    return item.id !== id
})

setTodos(arr)


}
function showInput(){

  return (
    <TodoInputContext.Provider value={{addTodo}}>
      <InputTodo />
    </TodoInputContext.Provider>
  )

  
}
function todoDone(id){

  let arr = [...todos]
  arr.map((item) => {
    if(id === item.id && !item.isComplete){
      item.isComplete = true
      return item
    }
    
    if(id === item.id && item.isComplete){
      item.isComplete = false
      return item
    }

   

  })

  setTodos(arr)

}

function addTodo(value) {

  let arr = [...todos, {id:uuidv4(), isComplete: false, todo: value}]

  setTodos(arr)


}


  return (
    <div>
      
      {showAllTodos()}
      {showInput()}
    </div>
  )
}

export default App