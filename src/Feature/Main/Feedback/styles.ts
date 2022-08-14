import styled from "styled-components";
import Quotes from "../../../assets/images/bg-quotes.png";

export const Container = styled.section`   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${Quotes});
    background-repeat: no-repeat;
    &:first-child {
        background-color: aliceblue;
    }
    margin-top: 20px;
    @media (min-width: 1000px){
        flex-direction: row;
        gap: 20px;
    }

`
export const Feedback = styled.div`  
    width: 95%;
    background-color: hsl(219, 30%, 18%);
    padding: 20px;
    margin-top: 20px;
    margin-left: 20px;
    font-family: "Open sans" , sans-serif;
    @media (min-width: 1000px){
        width: 30%;
    }
`
export const User = styled.div`  
    margin: 10px;
    display: flex;
    gap:20px;
    align-items: center;
    color: #fff;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    div{
        display: flex;
        flex-direction: column;
    }
`