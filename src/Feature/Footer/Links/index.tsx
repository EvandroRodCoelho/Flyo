import { Text } from "../../../components/Text"
import * as C from "./styles"
export const Links = () => {

    return (
        <C.Container>
            <div>
                <a href="#">
                    <Text content="About Us" Padding={false} />
                </a>
                <a href="#">
                    <Text content="Jobs" Padding={false} />
                </a>
                <a href="#">
                    <Text content="Press" Padding={false} />
                </a>
                <a href="#">
                    <Text content="Blogs" Padding={false} />
                </a>
            </div>
            <div>
                <a href="#">
                    <Text content="Contact us" Padding={false} />
                </a>
                <a href="#">
                    <Text content="Terms" Padding={false} />
                </a>
                <a href="#">
                    <Text content="Privacy" Padding={false} />
                </a>
            </div>
        </C.Container>
    )
}