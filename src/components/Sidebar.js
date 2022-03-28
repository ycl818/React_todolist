import React from 'react'
import styled from "styled-components";

const Sidebar = ({sidebarToggle, todoList}) => {
  return (
   <Wrapper style={{width: `${sidebarToggle ? '300px' : '70px'}`}} >
       <Title>{sidebarToggle ? 'Collections' : ''}</Title>

       <CategoryList>
           {
               todoList.map(category => (
                   <Category key={category.name}>
                       <CategoryIcon style={{backgroundColor : category.color}}>
                        <i className={category.icon} />
                       </CategoryIcon>
                       {sidebarToggle && <span>{category.title}</span>}
                   </Category>
               ))
           }
       </CategoryList>
   </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
    height: calc(100vh - 70px);
    background-color: #20212d;
`
const Title = styled.div``

const CategoryList = styled.div``

const Category = styled.div``

const CategoryIcon = styled.div``