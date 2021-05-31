import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        @media only screen and (max-width: 1200px){
            font-size: 58%;
        }
        @media only screen and (min-width: 1980px){
            font-size: 70%;
        }
    }
    body{
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
        font-size: 18px;
        background: #F9F9F9;
        color: #333;
    }
`;

export default GlobalStyles;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 100px;
    max-width: 1300px;
    width: 100%;
    @media (max-width:400px){
        padding: 0 10px;
    }
    @media (max-width:991px) {
        padding: 0 30px;
    }
    @media (min-width: 1500px) {
        max-width: 1500px;
    }
    @media (min-width: 1800px) {
        max-width: 1800px;
        padding: 0 30px;
    }
`;

export const Button = styled.button`
    background-color: #2acfcf;
    border: 0;
    border-radius: 30px;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 1.6rem;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
        background-color: rgba(42,207,207, 0.5);
    }
`;