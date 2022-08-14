import * as C from "./styles"
import Logo from "../../assets/images/logo.svg";
import { Contacts } from "../../Feature/Footer/Contacts";
export const Footer = () => {

    return (
        <C.Container>
            <C.ContainerImg>
                <img src={Logo} alt="Logo" />
            </C.ContainerImg>
            <Contacts />
        </C.Container>
    )
}