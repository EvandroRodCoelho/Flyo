import styled from "styled-components";

export const Container = styled.div`  
    width: 60%;
    margin-top: 20px;
    text-align: left;
    div{
        svg{
            font-size: 1rem;
        }
    }
    @media (min-width: 700px) {
        display: flex;
        div{
           flex: 1;
           gap: 20px;
           margin-left: 25px;
            svg{
                font-size: 2.5rem;
            }
            p{
                font-size: 1rem;

            }
        }
    }
`