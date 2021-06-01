import styled from 'styled-components';
import {Container} from '../../GlobalStyles';


export const Background = styled.div` 
    background-color: #bfbfbf;
    width: 100%;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.div`
    font-weight: 700;
`;
export const Text = styled.div`
    font-weight: 400;
`;

export const NewContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding-top: 15rem;
    padding-bottom: 15rem;
    ${Container};
`;

export const CardContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    // width: 100;
    margin: 20px;
    padding: 25px;
`;

export const CardTitle = styled.h1`
    font-weight: 700;
    font-size: 18px;
`;

export const CardText = styled.h1`
    font-weight: 400;
    font-size: 10px;
    color: gray;
`;