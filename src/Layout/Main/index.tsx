import * as C from "./styles"
import img from "../../assets/images/illustration-intro.png";
import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { CardGrid } from "../../Feature/CardsGrid";
import { DescriptionMain } from "../../Feature/DescriptionMain";


export const Main = () => {
    let textTitle = `All your files in one secure location ,
    accessible anywhere`;
    let textMain = `Fylo stores all your most important files in one
    secure location. Access them wherever you need share and collaborate
    with friends family, and co-workers`

    return (
        <C.Container>
            <C.ContainerImg className="ContainerImg">
                <img src={img} alt="illustration-intro" />
            </C.ContainerImg>
            <C.ContainerText>
                <Title text={textTitle} />
                <Text content={textMain} Padding />
                <Button text="Get started" />
            </C.ContainerText>
            <CardGrid />
            <DescriptionMain />


        </C.Container>
    )
}