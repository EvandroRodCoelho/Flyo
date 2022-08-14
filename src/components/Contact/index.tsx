import * as C from "./styles"
import { Text } from "../Text"
type Prop = {
    text: string;
    Icon: JSX.Element;
}
export const Contact = ({ text, Icon }: Prop) => {
    return (
        <C.Container>
            {Icon}
            <Text Padding={false} content={text} key={1} />
        </C.Container>
    )
}