import styled from "styled-components";

export const Container = styled.section`  
    margin-top: 20px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    gap:20px;
    h2, a{
        margin-left: 10px;
    }
    @media (min-width: 1000px) {
        flex-direction: row;    
    }
`
export const Img = styled.img`   
    width: 200px;
    height: 200px;
    @media (min-width: 600px) {
        width: 400px;
        height: 400px;
    }
    @media (min-width: 1200px) {
        width: 500px;
        height: 500px;
    }
`

export const Link = styled.a`  
    cursor: pointer;
    color: #339ecc;
    text-decoration: solid;
    text-decoration-color:#339ecc;
    p{
    color: #339ecc;
    }
`
export const LinkContainer = styled.div`  
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    img{
        width: 30px;
        height: 30px;
    }
    @media (min-width: 1000px) {

       img { 
        width : 50px;
        height: 50px;
    }
    }
`