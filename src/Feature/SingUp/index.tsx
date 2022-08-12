import { Title } from "../../components/Title"
import { Text } from "../../components/Text"
import * as C from "./styles"
import { Button } from "../../components/Button"
export const SingUp = () => {
    return (
        <C.Container>
            <C.SingUpDiv>
                <Title text="dsdsdsa" key={1} />
                <Text content="sadsad" key={2} Padding={false} />
                <div>
                    <input type="text" />
                    <Button text="dwefrwef" key={3} />
                </div>
            </C.SingUpDiv>
        </C.Container>
    )
}