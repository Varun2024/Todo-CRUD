/* eslint-disable react/jsx-key */
import TodoForm from "./TodoForm"
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import Todo from "./Todo.jsx"
import EditTodoForm from "./EditTodoForm.jsx"


uuidv4()


const TodoWrapper = () => {
  const [todos , setTodos] = useState([])

  const addTodo = todo => {
    // spread operator(...) allows us to quickly copy all or part of an existing array or object into another array or object.
    // spread part copies the previous todolist and remaining part(object) is used to add newer todo with help of "value we get from todoform  "
    setTodos([...todos, { id:uuidv4() , task:todo , completed:false , isEditing:false }])
    console.log(todo)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo , completed :!todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id? {...todo,isEditing : !todo.isEditing}:todo))
  }

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id? {...todo,task,isEditing:!todo.isEditing}:todo ))
  }
  return (
    <div className="TodoWrapper">
      <h1>Just do it!</h1>
      {/* React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions. */}
      {/* using props for passing "value" from todofrom to todowrapper */}
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index)=>(
        todo.isEditing? (<EditTodoForm  editTodo={editTask} task={todo}/>) : (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
        
      ))}

    </div>
  )
}

export default TodoWrapper