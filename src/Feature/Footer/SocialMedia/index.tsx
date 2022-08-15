import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa" // social xxx
import * as C from "./styles"
export const SocialMedia = () => {

    return (
        <C.Container>
            <C.Social>
                <FaFacebookF />
            </C.Social>
            <C.Social>
                <FaInstagram />
            </C.Social>
            <C.Social>
                <FaTwitter />
            </C.Social>
        </C.Container>
    )
}