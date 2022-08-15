import styled from "styled-components";
import bgMobile from "../../assets/images/bg-curvy-mobile.svg"
import bgDesktop from "../../assets/images/bg-curvy-desktop.svg"
export const Container = styled.main`   
    max-width: 100vw;
    width: 100%;
    padding: 20px;
    background-color: hsl(218, 28%, 13%);
   
    `
export const ContainerImg = styled.div`  
   width: 90%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   img{
       width: 200px;
       max-width: 900px;
    }
    @media (min-width: 500px) {
        img{
            width: 300px;
        }
    }
    @media (min-width: 1000px) {
        img{
            width: 600px;
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