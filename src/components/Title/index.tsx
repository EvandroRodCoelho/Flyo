import * as C from "./styles"


type Prop = {
    text: string,
}
export const Title = ({ text }: Prop) => {

    return (
        <C.Title >
            {text}
        </C.Title>
    )
}