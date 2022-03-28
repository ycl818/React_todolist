import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const TodoItem = ({todo, color, baseURL, title, getTodos}) => {

    const [editTodo, setEditedTodo] = useState(todo.fields.title)  

    useEffect(() => {
        setEditedTodo(todo.fields.title)
    }, [todo])

    const deleteTask = () => {
      
    }

    const saveTodo = async () => {
       try {
        await fetch(`${baseURL}/${todo.id}`, {
            method: 'put',
            headers: {
                Authorization: "Bearer keyP4DkwUTgpXYFRr" ,
                'Content-Type' : "application/json",
            },
            body: JSON.stringify({
                fields: {
                    title: editTodo,
                    completed: todo.fields.completed,
                },
            }),
        })
        getTodos()
       } catch (error){
           console.log(error)
       }
    }

    const completeTodo =  async() => {
        try {
            await fetch(`${baseURL}/${todo.id}`, {
                method: 'put',
                headers: {
                    Authorization: "Bearer keyP4DkwUTgpXYFRr" ,
                    'Content-Type' : "application/json",
                },
                body: JSON.stringify({
                    fields: {
                        title: editTodo,
                        completed: !todo.fields.completed,
                    },
                }),
            })
            getTodos()
           } catch (error){
               console.log(error)
           }
    }

  return (
  <TodoListItem>
    <Checkbox className={todo.fields.completed ? 'fas fa-check-circle' : 'far fa-circle' } onClick={completeTodo} style={{color: color}} />
    <input style={{textDecoration: todo.fields.completed ? 'line-through' : 'none' }} value={editTodo} onChange={ e => setEditedTodo(e.target.value) }/>

    {todo.fields.title !== editTodo && <SaveTodo className='fas fa-check' onClick={saveTodo} />} 
    <DeleteTodo className='fas fa-trash-alt' onClick={deleteTask}/>
  </TodoListItem> )
}

export default TodoItem
const TodoListItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    transition: 0.3s;

    input {
        flex:1;
        font-size:22px;
        outline: none;
        background:none;
        border: none;
        color: #eee;
    }
`

const Checkbox = styled.div`
    font-size:20px;
    margin-right: 10px;
    cursor: pointer;
`

const DeleteTodo = styled.div`
    color: #ff1605;
    padding: 10px 16px;
    margin-left: 14px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover {
        background-color: #7e2601;
        transition: 0.3s;
        cursor: pointer;
    }
`

const SaveTodo = styled.div`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;
    color: #42c732;

    &:hover {
        background-color: #2b6127;
        transition:0.3s;
        cursor: pointer;
    }
`