import React from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from "react-router-dom";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: black;
`;

const CartButton = styled.button`
    width: 150px;
    height: 50px;
    display: block;
    vertical-align: center;
    margin: 10px 10px auto 10px;
    border: 2px solid white;
    background-color: black;
    color: white;
`;

const Header = () => {
    return <StyledHeader>
        <NavLink to="/">
            <CartButton> Products </CartButton>
        </NavLink>
        <NavLink to="/bucket">
            <CartButton> Bucket </CartButton>
        </NavLink>
    </StyledHeader>   
}

export default Header;