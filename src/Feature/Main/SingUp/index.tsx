import { Title } from "../../../components/Title"
import { Text } from "../../../components/Text"
import * as C from "./styles"
import { Button } from "../../../components/Button"
export const SingUp = () => {
    let TitleContent = `
        Get early access today    
    `;
    let TextContent = `
  It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.
    `
    return (
        <C.Container>
            <C.SingUpDiv>
                <Title text={TitleContent} key={1} />
                <Text content={TextContent} key={2} Padding={false} />
                <div>
                    <C.Input type="email"
                        placeholder="email@example.com" />
                    <Button text="Get Started For Free" key={3} />
                </div>
            </C.SingUpDiv>
        </C.Container>
    )
}