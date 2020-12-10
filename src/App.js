import {useState} from 'react'
import {v4 as uuidv4} from "uuid"
import Todo from './Todo'
import InputTodo from "./InputTodo"

 function App() {

  let todoArray = [
    {
      id: uuidv4(),
      todo: 'walk the walk',
      isComplete: false
    },
    {
      id: uuidv4(),
      todo: 'walk the shirt',
      isComplete: false
    },
    {
      id: uuidv4(),
      todo: 'walk the skirt',
      isComplete: false
    }
  ]

  const [todos, setTodos] = useState(todoArray)


  function showAllTodos(){
    return todos.map((item) => {
      return <Todo key={item.id} value={item.todo} todoRay={item} deleteTodo={deleteTodo} todoDonebyID={todoDonebyID} />
    })
  }

  function addTodo(todo){
    let arr = [...todoArray, {id: uuidv4(), isComplete: false, todo: todo} ]
    setTodos(arr)
  }

  function showInput() {
    return <InputTodo addTodo={addTodo} />
  }

  function todoDonebyID(id){
    console.log(id);
    console.log(todos);
    
    let newTodoArray = [...todos]
    newTodoArray.map((todo) => {
      if(todo.id === id && todo.isComplete){
        todo.isComplete = false;
        return todo
      }
      if(todo.id === id && !todo.isComplete){
        todo.isComplete = true;
        return todo
      }
    })

    console.log(newTodoArray);

    setTodos(newTodoArray)


  }

  function deleteTodo(id) {

    let arr = [...todos].filter((item) => {
      if(id !== item.id){
        return item
      }
    })
    setTodos(arr)
  }
  



  return (
    <div style={{textAlign: "center"}} >
      {showAllTodos()}
      {showInput()}
    </div>
  )
}

export default App