import styled from "styled-components";
import bgMobile from "../../assets/images/bg-curvy-mobile.svg"
import bgDesktop from "../../assets/images/bg-curvy-desktop.svg"
export const Container = styled.main`   
    max-width: 100vw;
    width: 100%;
    padding:30px 20px ;
    margin-bottom: 50px;
    background-color: hsl(218, 28%, 13%);
   
    `
export const ContainerImg = styled.div`  
   width: 90%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   img{
       opacity: 0;
       animation: nome .5s forwards;
       animation-delay: 1s;
       width: 200px;
       max-width: 900px;
    }
    @media (min-width: 500px) {
        margin-left: 30px;
        img{
            width: 300px;
            height: 200px;
        }
    }
    @media (min-width: 1000px) {
        margin-left: 60px;
        img{
            width: 600px;
            height: 400px;
        }
    }
    @keyframes nome {
        0%{
            transform: translateX(-250px);
            opacity: 0;
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
`
export const ContainerText = styled.div` 
    width: 100%;
    margin-top: 20px;
    text-align: center;
    background-image: url(${bgMobile}) ;
    background-size:cover ;
    background-repeat: no-repeat;
    max-width: 100vw;
`