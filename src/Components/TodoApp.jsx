import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import { useState } from 'react'

const TodoApp = () => {
    let dummyArray = [
        {
            id: 1,
            todo: 'play cricket'
        },
        {
            id: 2,
            todo: 'DSA'
        },
        {
            id: 3,
            todo: 'travel'
        },
        {
            id: 4,
            todo: 'sleep'
        },
        {
            id: 5,
            todo: 'sleep'
        }
    ]

    const [todos, settodos] = useState(dummyArray)
    
    const addTodo = (new_todo) => {
        settodos([...todos, new_todo])
    }
    const deleteTodo = (id) => {
        let new_todo=todos.filter((todo) => {
            if(todo.id===id) {
                return false
            }
            return true
        })
        
        settodos(new_todo)
    }

  return (
    <>
        <Form todos={todos} addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}

export default TodoApp