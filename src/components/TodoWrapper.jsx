import TodoForm from "./TodoForm"
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
uuidv4()


const TodoWrapper = () => {
  const [todos , setTodos] = useState([])

  const addTodo = todo => {
    // spread operator(...) allows us to quickly copy all or part of an existing array or object into another array or object.
    // spread part copies the previous todolist and remaining part(object) is used to add newer todo with help of "value we get from todoform  "
    setTodos([...todos, { id:uuidv4() , task:todo , complete:false , isEditing:false }])
    console.log(todos)
  }
  return (
    <div className="TodoWrapper">
      {/* React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions. */}
      {/* using props for passing "value" from todofrom to todowrapper */}
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoWrapper