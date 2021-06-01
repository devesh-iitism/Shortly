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
    display: flex;
    align-items: center;
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
    padding-top: 0;
`;

export const FooterContainer = styled(Container)`
    width: 100%;
    display: flex;
    // justify-content: space-evenly;
    align-items: center;
    height: 80px;
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
`;

export const SocialItem = styled.div`
`;