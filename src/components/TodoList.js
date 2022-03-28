import React, { useState } from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const TodoList = ({title, color, icon}) => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    const addButtonHandler = () => {
        console.log('addbutton')
        console.log(todo)
        if (todo.length > 0) {
            setTodos([{
                id: todos.length,
                title: todo,
                completed: false,
            }, ...todos])
            console.log(todos)
            setTodo('')
        }
    }
  return (
  <Wrapper>
      <TodoCategoryHeader>
          <CategoryIcon style={{background: color}}>
              <i className={icon} />
          </CategoryIcon>
          <Title>{title}</Title>
          <TodoInput value={todo} onChange={e => setTodo(e.target.value)}/>
          <AddTodo className='fas fa-plus' onClick={addButtonHandler}/>
      </TodoCategoryHeader>
      {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} todos={todos} setTodos={setTodos} color={color} />
      ))}
  </Wrapper>
 
  
  )
  
}

export default TodoList

const Wrapper = styled.div`
    background-color: #20212d;
    margin-bottom: 30px;
    border-radius:20px;
    overflow:hidden;
`

const TodoCategoryHeader = styled.div`
    background-color: #272833;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
`

const CategoryIcon = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`

const Title = styled.div`
    flex: 1;
    font-size: 10px;
    font-weight: 600;
`

const TodoInput = styled.input`
    height: 30px;
    font-size 18px;
    outline: none;
    border: none;
    background-color: #20212d;
    boder-radius: 4px;
    color: white;
    padding: 4px 10px;
    margin-right: 4px;

`

const AddTodo = styled.div`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover {
        background-color: #20212d;
        transition: 0.3s;
        cursor: pointer;
    }
`

