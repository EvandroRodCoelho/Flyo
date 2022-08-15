import * as C from "./styles"

import { GoLocation } from "react-icons/go"; //Location icon
import { MdWifiCalling, MdEmail } from "react-icons/md" //Telephone Email
import { Contact } from "../../../components/Contact";
export const Contacts = () => {
    let Text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua    
    `
    let phone = "+1-543-123-4567"
    let email = "example@fylo.com"
    return (
        <C.Container>
            <div>
                <Contact text={Text} Icon={<GoLocation className="contact" />} />
            </div>
            <div>
                <Contact text={phone} Icon={<MdWifiCalling />} />
                <Contact text={email} Icon={<MdEmail />} />
            </div>
        </C.Container>
    )
}