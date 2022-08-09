import * as C from "./styles"
import { Text } from "../Text"
import { Title } from "../Title"

export type Props = {
    ContentTitle: string;
    ContentText: string;
    ImgScr: string;
    Alt: string;
}
export const Card = ({ ContentText, ContentTitle, ImgScr, Alt }: Props) => {

    return (
        <C.Card>
            <img src={ImgScr} alt={Alt} loading="lazy" />
            <Title text={ContentTitle} />
            <Text Padding content={ContentText} />
        </C.Card>
    )
}