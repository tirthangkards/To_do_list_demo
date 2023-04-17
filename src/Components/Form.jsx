import React from 'react'
import { useState } from 'react'

const Form = (props) => {

    const [input, setinput] = useState('')

    const inputHandler = (e) => {
        setinput(e.target.value)
    }
    const formHandler = (e) => {
        e.preventDefault()
        let new_todo = {
            id: props.todos.length+1,
            todo: input
        }
        props.addTodo(new_todo)
        setinput('')
    }
  return (
    <div>
        <form onSubmit={formHandler}>
            <input onChange={inputHandler} value={input} name='' id='' />
        </form>
    </div>
  )
}

export default Form