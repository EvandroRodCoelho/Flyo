import * as C from "./styles"
import Logo from "../../assets/images/logo.svg";
import { Contacts } from "../../Feature/Footer/Contacts";
import { Links } from "../../Feature/Footer/Links";
import { SocialMedia } from "../../Feature/Footer/SocialMedia";

export const Footer = () => {

    return (
        <C.Container>

            <C.ContainerImg>
                <img src={Logo} alt="Logo" />
            </C.ContainerImg>
            <C.Links>
                <Contacts />
                <Links />
                <SocialMedia />
            </C.Links>
        </C.Container>
    )
}