import styled from "styled-components";
type Prop = {
    Padding: boolean;
}
export const Text = styled.p<Prop>`   
    padding: ${props => props.Padding ? "15px 0" : 0};
    color: #fff;
    font-size: 0.9em;
    font-family: "Open sans" , sans-serif;
    margin: 15px ;
    @media (min-width: 500px) {
        font-size:1em;
    }
    @media (min-width: 1000px) {
        font-size:1.3em;
    }
`