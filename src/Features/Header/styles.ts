import styled from "styled-components";

export const Container = styled.header`   
    width: 100%;
    padding: 15px 15px;
    background-color:  hsl(218, 28%, 13%);
    display: flex;
    justify-content: space-between;
    font-family: "Raleway" , sans-serif;
    @media (min-width: 500px) {
        padding: 20px 25px;
    }
    @media (min-width: 1000px) {
        padding: 25px 30px;
    }
`
export const ContainerImg = styled.div` 
    img{
        width: 60px;
        cursor: pointer;
    }
    @media (min-width: 500px) {
        img{
            width: 100px;
        }
    }
    @media (min-width: 1000px) {
        img{
            width: auto;
        }
    }
`
export const Nav = styled.nav`  
    text-align: center;
    flex: 1;
    margin-left: 20px;
    font-size: 0.90rem;
    ul{
        display: flex;
        align-items: center;
        gap: 20px;
        width: 100%;
        justify-content: center;
        height: 100%;
        li{
            list-style: none;
        }
    }
    @media (min-width: 500px) {
        font-size: 1.25rem;
    }
    @media (min-width: 1000px) {
        font-size: 1.5rem;
    }
`
export const Link = styled.a`  
    text-decoration: none;
    color: #fff;

`