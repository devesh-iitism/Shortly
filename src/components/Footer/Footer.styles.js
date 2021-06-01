import styled from 'styled-components';
import {Container} from '../../GlobalStyles';

export const Background = styled.div` 
    background-size: cover;
    background-color: black;
    width: 100%;
    height: 26rem;
`;

export const Title = styled.div`
    color: white;
    font-size: 28px;
`;

export const Links = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 15rem;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MenuTitle = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 14px;
    padding-top: 8rem;
    padding-bottom: 2rem;
`;

export const FooterContainer = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding-top: 5rem;
    ${Container};
`;

export const MenuItem = styled.li`
    color: white;
    font-weight: 500;
    list-style: none;
    font-size: 10px;
`;

export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
`;

export const SocialItem = styled.div`
    padding: 1rem;
`;