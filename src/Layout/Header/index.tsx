import * as C from "./styles"
import Logo from "../../assets/images/logo.svg";
export const Header = () => {

    return (
        <C.Container>
            <C.ContainerImg>
                <img src={Logo} alt="Logo" />
            </C.ContainerImg>
            <C.Nav>
                <ul>
                    <li>
                        <C.Link href="#">Features</C.Link>
                    </li>
                    <li>
                        <C.Link href="#">Team</C.Link>
                    </li>
                    <li>
                        <C.Link href="#">Sing-in</C.Link>
                    </li>
                </ul>
            </C.Nav>
        </C.Container>
    )
}