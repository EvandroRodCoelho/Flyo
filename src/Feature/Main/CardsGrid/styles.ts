import styled from "styled-components";

export const GridContainer = styled.div`  
    margin-top: 20px;
    gap: 30px;
    display: block;
    @media (min-width: 1000px){
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(500px, 1fr));
    }
    p{
        margin-top: 0;
    }
`
