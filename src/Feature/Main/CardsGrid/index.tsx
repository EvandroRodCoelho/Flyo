import { Card } from "../../../components/Card"
import * as C from "./styles"
import { Props } from "../../../components/Card"
import anywhere from "../../../assets/images/icon-access-anywhere.svg"
import security from "../../../assets/images/icon-security.svg"
import anyfile from "../../../assets/images/icon-any-file.svg"
import collaboration from "../../../assets/images/icon-collaboration.svg"
import { Fade } from "react-awesome-reveal"
export const CardGrid = () => {
    const Cards: Props[] = [
        {
            ContentTitle: " Access your files, anywhere",
            ContentText: `The ability to use a smartphone, tablet, or computer to access your account means your 
            files follow you everywhere.`,
            ImgScr: anywhere,
            Alt: "anywhere icon"
        },
        {
            ContentTitle: "Security you can trust",
            ContentText: ` 2-factor authentication and user-controlled 
            encryption are just a couple of the security 
            features we allow to help secure your files.
          `,
            ImgScr: security,
            Alt: "security icon"
        },
        {
            ContentTitle: " Real-time collaboration",
            ContentText: `Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required.`,
            ImgScr: collaboration,
            Alt: "icon collaboration "
        },
        {
            ContentTitle: "Store any type of file",
            ContentText: ` Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
            file types to be securely stored and shared.`,
            ImgScr: anyfile,
            Alt: "anyfile icon"
        },
    ]

    return (
        <C.GridContainer>
            {Cards.map((index, value) =>
                <>
                    <Fade>

                        <Card key={value}
                            Alt={index.Alt}
                            ImgScr={index.ImgScr}
                            ContentText={index.ContentText}
                            ContentTitle={index.ContentTitle} />
                    </Fade>
                </>
            )}
        </C.GridContainer>
    )
}