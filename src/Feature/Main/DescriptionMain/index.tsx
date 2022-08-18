import * as C from "./styles"
import Image from "../../../assets/images/illustration-stay-productive.png"
import { Title } from "../../../components/Title"
import { Text } from "../../../components/Text"

import { useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Fade, Reveal } from "react-awesome-reveal";
export const DescriptionMain = () => {
    let TextTitle = "Stay productive, wherever you are";
    let Text1 = `Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
    storage needs.`
    let Text2 = `Securely share files and folders with friends, family and colleagues for live collaboration. No email 
    attachments required.`

    let [color, setColor] = useState("#339ecc")
    return (
        <C.Container>
            <div>
                <C.Img src={Image} alt="illustration-stay-productive" />
            </div>
            <div className="text">
                <Fade >
                    <Title text={TextTitle} />
                </Fade>
                <Reveal>
                    <Text Padding={false} content={Text1} key={1} />
                    <Text Padding={false} content={Text2} />
                </Reveal>

                <C.LinkContainer
                    onMouseEnter={props => setColor("#fff")}
                    onMouseLeave={props => setColor("#339ecc")}>
                    <C.Link color={color}>
                        <Text Padding={false} content="See how Fylo works" />
                    </C.Link>
                    <C.ContainerArrow className="arrow">
                        <AiOutlineArrowRight />
                    </C.ContainerArrow>

                </C.LinkContainer>
            </div>
        </C.Container>
    )
}