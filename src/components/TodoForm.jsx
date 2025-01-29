/* eslint-disable react/prop-types */
import { useState } from "react"

const TodoForm = ({addTodo}) => {
  const [value,setVlaue] = useState("")

  const handleSubmit = e =>{
    e.preventDefault()

    // sending value to todo wrapper using props, here addtodo
    addTodo(value)

    // after submission clears the input field
    setVlaue("")
  }
  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      {/*value attribute:  it defines the value associated with the input and the value in the name/value pair that is sent to the server on form submission. */}
      <input 
      type="text" 
      className="todo-input" 
      value={value}
      placeholder="What is task today" 
      onChange={(e)=>{
        setVlaue(e.target.value)
      }}/>
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  )
}

export default TodoForm