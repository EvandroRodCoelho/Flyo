import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa" // social xxx
import * as C from "./styles"
export const SocialMedia = () => {

    return (
        <C.Container>
            <C.Social tabIndex={0}>
                <FaFacebookF />
            </C.Social>
            <C.Social tabIndex={0}>
                <FaInstagram />
            </C.Social>
            <C.Social tabIndex={0}>
                <FaTwitter />
            </C.Social>
        </C.Container>
    )
}