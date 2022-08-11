import * as C from "./styles"
import Image from "../../assets/images/illustration-stay-productive.png"
import { Title } from "../../components/Title"
import { Text } from "../../components/Text"
import Arrow from "../../assets/images/icon-arrow.svg"
export const DescriptionMain = () => {
    let TextTitle = "Stay productive, wherever you are";
    let Text1 = `Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
    storage needs.`
    let Text2 = `Securely share files and folders with friends, family and colleagues for live collaboration. No email 
    attachments required.`
    return (
        <C.Container>
            <div>
                <C.Img src={Image} alt="illustration-stay-productive" />
            </div>
            <div className="text">
                <Title text={TextTitle} />
                <Text Padding={false} content={Text1} key={1} />
                <Text Padding={false} content={Text2} />
                <C.LinkContainer>
                    <C.Link >
                        <Text Padding={false} content="See how Fylo works" />
                    </C.Link>
                    <img src={Arrow} alt="Arrow icon" />
                </C.LinkContainer>
            </div>
        </C.Container>
    )
}