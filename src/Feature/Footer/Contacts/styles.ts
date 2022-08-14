import styled from "styled-components";

export const Container = styled.div`  
    width: 100%;
    margin-top: 20px;
    div{
        svg{
            font-size: 1.5rem;
        }
    }
    @media (min-width: 700px) {
        display: flex;
        div{
            flex: 0.5;
            svg{
                font-size: 2rem;
            }
            p{
                width: 50%;
            }
        }
    }
`