import { Text } from "../Text";
import * as C from "./styles";
type Prop = {
    text: string;
}
export const Button = ({ text }: Prop) => {
    return (
        <C.Button tabIndex={1}>
            <Text content={text} Padding={false} />
        </C.Button>
    )
}