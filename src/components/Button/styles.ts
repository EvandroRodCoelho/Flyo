import styled from "styled-components";

export const Button = styled.button`  
   padding: 5px 10px;
   background-color: #339ecc;
   border-radius: 20px;
   color: #fff;
   margin-top: 15px;
   cursor: pointer;
   border: 0;
   outline: 0;
   transition:all 0.3s;
   &:hover , &:focus{
    background-image: linear-gradient(#339ecc, #65e2d9 );
    transition:all 0.3s;
   }
   @media (min-width: 700px){
      width: 500px;
      margin-bottom: 30px;
   }
`