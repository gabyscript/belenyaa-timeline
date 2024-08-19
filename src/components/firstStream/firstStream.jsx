import { Container, Image } from "react-bootstrap"
import beleny19 from '../../assets/images/beleny19.webp'

const FirstStream = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Image src={beleny19}  />
                <h2 className="text-white text-center">
                    19 de Agosto
                </h2>
                <h2 className="text-white text-center">
                    Aniversario de Partner
                </h2>
            </Container>
        </Container>
    )
}

export default FirstStream