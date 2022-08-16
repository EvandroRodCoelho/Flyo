import { Title } from "../../../components/Title"
import { Text } from "../../../components/Text"
import * as C from "./styles"
import { Button } from "../../../components/Button"
import { useState } from "react"
export const SingUp = () => {
    let TitleContent = `
        Get early access today    
    `;
    let TextContent = `
  It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.
    `
    var re = /\S+@\S+\.\S+/;
    const [text, setText] = useState("")
    const [isText, setIsText] = useState(false)
    const handleText = (e: string) => {
        setText(e)
        if (text === "") {
            setIsText(false)
        }
    }
    const handleIsText = () => {
        console.log(re.test(text))
        if (!text || !re.test(text)) {
            setIsText(true)
        }
    }


    return (
        <C.Container>
            <C.SingUpDiv>
                <Title text={TitleContent} key={1} />
                <Text content={TextContent} key={2} Padding={false} />
                <div>
                    <C.Input type="email"
                        placeholder="email@example.com"
                        onChange={e => handleText(e.target.value)}
                        onBlur={e => handleIsText()}
                    />
                    <Button text="Get Started For Free" key={3} />
                </div>
                {isText && (
                    <>
                        <C.ErrorContainer>
                            <Text content="Please enter a valid e-mail address"
                                Padding={false} key={2} />
                        </C.ErrorContainer>
                    </>
                )}
            </C.SingUpDiv>
        </C.Container>
    )
}