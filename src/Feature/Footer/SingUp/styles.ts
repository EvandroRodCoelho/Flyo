import styled from "styled-components";

export const Container = styled.section`  
    margin-top: 50px;

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transform: translateY(-180px);
`

export const SingUpDiv = styled.div`   
    width: 300px;
    background-color: hsl(217, 28%, 15%);
    box-shadow: 3px 13px 41px -6px rgba(0,0,0,0.75);
    text-align: center;
    padding: 20px 30px;
    border-radius: 20px;
    div{
        gap: 10px;
        display: flex;
        flex-direction: column; 
    }
    @media (min-width: 700px){
        width: 500px;
        
        div{
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 30px;
         }
    }
    @media (min-width: 1000px) {
        width: 100%;
        gap: 20px;
        button{ 
            width: 250px;
            height: 70px;
            margin-bottom: 10px;
        }
    }
`

export const Input = styled.input`   
    border-radius:30px;
    border: 0;
    outline: 0;
    
    font-size: 0.8em;

    height: 50px;
    padding: 20px;
    @media (min-width: 700px){
        font-size:1em;
        width: 500px;
    }
    @media (min-width: 1000px){
        flex: 1;
        padding: 30px;
        height: 70px;

    }
`

export const ErrorContainer = styled.div` 
    text-align: left;
    p{
        color: hsl(0, 100%, 63%) ;
    }
`