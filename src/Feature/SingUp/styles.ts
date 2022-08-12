import styled from "styled-components";

export const Container = styled.section`  
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SingUpDiv = styled.div`   
    width: 50%;
    background-color:  hsl(217, 28%, 15%);
    text-align: center;
    padding: 20px;
    div{
        gap: 10px;
        display: flex;
        height: 80px;
        button{
            width: 180px;
        }
        input{
            flex: 1;
            border-radius:20px;
            border: 0;
            outline: 0;
            font-size: 2em;
        }
    }
`