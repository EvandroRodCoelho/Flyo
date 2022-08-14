import styled from "styled-components";

export const Container = styled.section`  
    margin-top: 50px;

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

`

export const SingUpDiv = styled.div`   
    width: 90%;
    background-color: hsl(217, 28%, 15%);
    box-shadow: 3px 13px 41px -6px rgba(0,0,0,0.75);
    text-align: center;
    padding: 30px 50px;
    position: absolute;
    transform: translateY(150px);
    z-index: 100;
    border-radius: 20px;
    div{
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        button{
            height: 50px;
            padding: 0;
            width: 90%;
            margin-top: 0;
            text-align: center;
        }
    }
    @media (min-width: 700px){
        width : 85%;
        div{
            flex-direction: row;
            gap: 30px;
            button{
                width: 25%;
            }
         }
    }
`

export const Input = styled.input`   
    width: 90%;
    border-radius:30px;
    border: 0;
    outline: 0;
    
    font-size: 0.8em;

    height: 50px;
    padding: 20px;
    @media (min-width: 700px){
        font-size:1em;
        flex: 1;
    }
`