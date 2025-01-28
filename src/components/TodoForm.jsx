import { useState } from "react"

const TodoForm = () => {
  const [value,setVlaue] = useState("")
  return (
    <form className="Todoform">
      <input type="text" className="todo-input" placeholder="What is task today"/>
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  )
}

export default TodoForm