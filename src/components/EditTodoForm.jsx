/* eslint-disable react/prop-types */
import { useState } from "react"

const EditTodoForm = ({editTodo , task}) => {
  const [value,setValue] = useState("")

  const handleSubmit = e =>{
    e.preventDefault()

    // sending value to todo wrapper using props, here addtodo
    editTodo(value , task.id)

    // after submission clears the input field
    setValue("")
  }
  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      {/*value attribute:  it defines the value associated with the input and the value in the name/value pair that is sent to the server on form submission. */}
      <input 
      type="text" 
      className="todo-input" 
      value={value}
      placeholder="Update Task" 
      onChange={(e)=>{
        setValue(e.target.value)
      }}/>
      <button type="submit" className="todo-btn">Update</button>
    </form>
  )
}

export default EditTodoForm