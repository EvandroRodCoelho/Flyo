import styled from "styled-components";

export const Container = styled.footer` 
    background-color:pink;
    width: 100%;
    position: relative;
    padding: 40px 20px;
    background-color: #0b1523;

    div{
        svg{
            color: #fff;
        }
    }

`
export const ContainerImg = styled.div`     
    height: 50vh;
    display: flex;
    align-items: flex-end;
    justify-content:flex-start;
    padding:0 20px;
    @media (min-width: 700px){
        height: 25vh;
    }
    @media (min-width: 1000px){
        height: 50vh;
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