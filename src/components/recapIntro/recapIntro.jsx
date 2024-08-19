import { Container, Image } from "react-bootstrap"
import beleny19 from '../../assets/images/beleny19.webp'
import './recapIntro.css'

const RecapIntro = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Image src={beleny19}  />
                <h1 className="text-white text-center neon">
                    19 de Agosto
                </h1>
                <h2 className="text-white text-center neon">
                    Aniversario de Partner
                </h2>
            </Container>
        </Container>
    )
}

export default RecapIntro