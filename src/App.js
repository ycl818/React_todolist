import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(false)

  const todoList = [
  {
    title: 'Personal',
    color: '#fd76a1',
    icon:'fas fa-user',
  },
  {
    title: 'Work',
    color: '#70c4be',
    icon:'fas fa-briefcase',
  },
  {
    title: 'Free',
    color: '#ab6ddf',
    icon:'fas fa-file-code',
  },
]
  return (
    <Wrapper>
      <Header sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle}/>
      <Main>
        <Sidebar sideBarToggle={sideBarToggle} todoList={todoList}/>
        <MainContent style={{ width: `calc(100vw - (${sideBarToggle ? '300ox' : '70px' }))` }}>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good morning, Yi-Chien</Greeting>
            {todoList.map(category => (
              <TodoList 
                key = {category.title}
                title = {category.title}
                color = {category.color}
                icon = {category.icon}
              />
            ))}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`;

const Main = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`

const Title = styled.div`
  margin: 50px 0;
  font-size: 36px;
  font-weight: 500;
`;

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-wight: 800;
`;
