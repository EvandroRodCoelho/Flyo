import styled from "styled-components";

export const Container = styled.footer` 
    background-color:pink;
    height: auto;
    max-width: 100vw;
    padding: 40px 40px;
    background-color: #0b1523;
    display: block;
    div{
        margin-top: 20px;
        svg{
            color: #fff;
        }
    }

`
export const ContainerFooter = styled.div` 
    transform: translateY(-170px);


`
export const ContainerImg = styled.div`     
    display: flex;
    align-items: flex-end;
    justify-content:flex-start;
    align-items: center;
    padding:0 20px;
    @media (min-width: 1000px){
        padding: 0;
        img{
            margin-left: 55px;
        }
    }
`
export const Links = styled.div` 
    a{
        text-decoration: none;
    }
    display: block;
    @media (min-width: 1000px) {
        display: flex;
        gap: 20px;
        div{
            flex: 50%;
        }
    }
`