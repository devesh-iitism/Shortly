import styled from 'styled-components';
import {Container} from '../../GlobalStyles';


export const Nav = styled.nav` 
    font-size: 18px;
    position: sticky;
    top: 0;
    z-index: 999;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    ${Container};
`;

export const NavLogo = styled.a`
    color: black;
    padding-top: 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 800;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.08);
    }   
`;


export const MenuIcon = styled.div`
    display: none;
    @media (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 20%);
        font-size: 4rem;
        cursor: pointer;
    }
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    @media only screen and (max-width:1000px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => click ? '0' : '-100%'};
        background-color: #3b3054;
        transition: all .5s ease;
    }
`;

export const MenuItem = styled.li`
    list-style: none;
    height: 80px;
    @media only screen and (max-width:1000px){
        width: 100%;
        &:hover {
            border: none;
        }
    }
`;

export const MenuLink = styled.a`
    color: #bfbfbf;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: 100%;
    transition: all .2s ease;
    &:hover {
        color: black;
        
    }
    &:active {
        color: black;
    }
    @media only screen and (max-width:1000px){
        display: block;
        padding: 3rem;
        text-align: center;
        transition: all .2s ease;
    }
`;

export const MenuItemBtn = styled.li`
    list-style: none;
    @media screen and (max-width:1000px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 120px;
    }
`;