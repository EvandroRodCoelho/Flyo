import * as C from "./styles"
import { Text } from "../../../components/Text"
import Profile1 from "../../../assets/images/profile-1.jpg"
import Profile2 from "../../../assets/images/profile-2.jpg"
import Profile3 from "../../../assets/images/profile-3.jpg"


export const Feedback = () => {
    const testimonials1 = `  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
    become a well-oiled collaboration machine.`
    return (
        <C.Container>
            <C.Feedback >
                <Text Padding={false} content={testimonials1} />
                <C.User>
                    <img src={Profile1} alt="Profile" />
                    <div>
                        <strong>Satish Patel</strong>
                        <small> Founder & CEO, Huddle</small>
                    </div>
                </C.User>
            </C.Feedback>
            <C.Feedback >
                <Text Padding={false} content={testimonials1} />
                <C.User>
                    <img src={Profile2} alt="Profile" />
                    <div>
                        <strong>Bruce McKenzie</strong>
                        <small>Founder & CEO, Huddle</small>
                    </div>
                </C.User>
            </C.Feedback>
            <C.Feedback >
                <Text Padding={false} content={testimonials1} />
                <C.User>
                    <img src={Profile3} alt="Profile" />
                    <div>
                        <strong> Iva Boyd</strong>
                        <small>Founder & CEO, Huddle</small>
                    </div>
                </C.User>
            </C.Feedback>
        </C.Container>
    )
}