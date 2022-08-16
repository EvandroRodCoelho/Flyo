import styled from "styled-components";

export const Container = styled.div`  
    width: 70%;
    margin-top: 20px;
    text-align: left;
    div{
        .contact{
            font-size: 6rem;
        }

    }
    @media (min-width: 700px) {
        display: flex;
        div{
           flex: 1;
           gap: 20px;
           margin-left: 0;
           .contact{
            font-size: 7rem;
           }
           svg {
             font-size: 2rem;
            }
            p{
                font-size: 1rem;
            }
        }
    }
`