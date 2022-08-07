import styled from "styled-components";

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