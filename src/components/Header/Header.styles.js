import styled from 'styled-components';
import working from '../../assets/illustration-working.svg';

export const Contents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Headline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 100px;
`;

export const Title = styled.div`
    font-size: 40px;
`;

export const Para = styled.div`
    font-size: 20px;
`;

export const WorkingImg = styled.div`
    background: url(${working}) no-repeat;
    width: 100%;
    height: 50rem;
`;