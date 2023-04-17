import React from 'react'
import Todo from './Todo'

const TodoList = (props) => { 
    let todos=props.todos.map((item, idx) => {
        return <div>
          <Todo id={item.id} key={idx} todo={item.todo} deleteTodo={props.deleteTodo} />
        </div>
    })
  return (
    <div>{todos}</div>
  )
}

export default TodoList