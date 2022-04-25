import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Nav = styled.div`
border: 1px solid;
height: 50px;
width: 100%;    
gap:40px; 
display: flex;
margin: auto;
justify-content: center;
align-items: center;
background:pink;
`

export const Navbar = () => {
  
  const { token, handleLogout } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <div><NavLink to="/Home">Home</NavLink></div>
        <div><NavLink to="/About">About</NavLink></div>
        <NavLink to={"/books"}>Books</NavLink>

          {token ? (
            <NavLink to={"/logout"} onClick={handleLogout}>
              Logout
            </NavLink>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}

      </Nav>
    </>

  );
};
