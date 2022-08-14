import * as C from "./styles"
type Props = {
    content: string;
    Padding: boolean;
}
export const Text = ({ content, Padding }: Props) => {

    return (
        <C.Text Padding={Padding}>
            {content}
        </C.Text>
    )
}