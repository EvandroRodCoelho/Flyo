import { useEffect } from "react"
import * as C from "./styles"
import img from "../../assets/images/illustration-intro.png"
export const Main = () => {

    return (
        <C.Container>
            <C.ContainerImg>
                <img src={img} alt="illustration-intro" />
            </C.ContainerImg>
        </C.Container>
    )
}