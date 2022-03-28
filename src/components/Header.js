import React from "react";
import styled from "styled-components";

const Header = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <Wrapper>
      <HeaderItem onClick={() => setSideBarToggle(!sideBarToggle)}>
        <i className="fas fa-bars" />
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-border-all" />
        <span>Dashboard</span>
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collection</span>
      </HeaderItem>

      <PlaceHolder />

      <HeaderItem>
        <Profile>
          <img src="../pikachu.jpg" />
        </Profile>
      </HeaderItem>
    </Wrapper>
  );
};

export default Header;

const PlaceHolder = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #20212d;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
`;
const HeaderItem = styled.div`
  color: #eee;
  padding: 10px 24px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight:500;
  }

  &:hover {
    background-color: #18181f;
    transition:0.3s;
    cursor:pointer;
  }
`;
const Profile = styled.div`
  display: flex;
  align-item: center;
  img {
    height: 30px;
    border-radius: 50%;
  }
`;
