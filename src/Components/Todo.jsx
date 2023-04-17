import React from 'react'

const Todo = (props) => {

  let HandleDelete = (id) => {
    props.deleteTodo(id)
  }

  return (
    <div>
        <li>id -- {props.id}</li>
        <li>todo -- {props.todo}</li>
        <button onClick={() => {HandleDelete(props.id)}} >Delete</button>
    </div>
  )
}

export default Todo