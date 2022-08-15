import styled from "styled-components";
export const Container = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    max-width: 300px;
`
export const Social = styled.div`  
    max-width: 50px;
    width: 20%;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    & , svg{
        transition: all .2s;
    }
    &:hover{
        border: 2px solid #339ecc;
        svg{
            color:#339ecc;
        }
    }
`