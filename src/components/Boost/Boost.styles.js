import styled from 'styled-components';
import Img from '../../assets/bg-boost-desktop.svg';


export const Background = styled.div` 
    background: url(${Img}) no-repeat;
    background-size: cover;
    background-color: #3b3054;
    width: 100%;
    height: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.div`
    color: white;
`;
