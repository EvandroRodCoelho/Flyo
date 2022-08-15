import styled from "styled-components";
type Props = {
    color: string;
}
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

export const Link = styled.a<Props>`  
    cursor: pointer;
    color:${props => props.color};
    text-decoration: solid;
    p{
        transition: all .3s;
        color:${props => props.color};
    }
`
export const LinkContainer = styled.div`  
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-bottom: 2px solid #339ecc;
    width: 40%;
    transition: border .3s;
    &:hover{
        color: #fff;
        border-bottom: 2px solid #fff;
    }
    &:hover > a{
        color: #fff;
    }
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