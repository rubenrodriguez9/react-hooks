import  { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import './App.css';
import TodoInput from './TodoInput'
import Todo from './Todo'

function App() {

  let initialTodoArray = [
    {
      id: uuidv4(),
      todo: 'walk the cat',
      isCompleted: false
    },
    {
      id: uuidv4(),
      todo: 'walk the dragon',
      isCompleted: false
    },
    {
      id: uuidv4(),
      todo: 'walk the dog',
      isCompleted: false
    }
  ]


  const [todos, setTodos] = useState(initialTodoArray)

  function showAllTodos() {
    return todos.map((item) => {
      return <Todo key={item.id} todoRay={item} removeTodo={removeTodo} />
    })
  }

  function showTodoInput() {

    return <TodoInput addTodo={addTodo} />
  }
  
  function addTodo(todo) {

    let arr = [...todos,  {id: uuidv4(), isCompleted: false, todo: todo}]
    setTodos(arr)

  }

  function removeTodo(id) {

    let arr = todos.filter((item) => {
      return item.id !== id
    })

    setTodos(arr)



  }

  return (
    <div className="App">
      {showTodoInput()}
      {showAllTodos()}
    </div>
  );
}

export default App;
