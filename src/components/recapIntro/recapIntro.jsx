import { Container, Image } from "react-bootstrap"
import beleny19 from '../../assets/images/beleny19.webp'
import './recapIntro.css'

const RecapIntro = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center home-container w-75 py-5">
                <Image src={beleny19}  />
                <h1 className="text-white text-center neon text-uppercase">
                    Tu historia en Twitch
                </h1>
            </Container>
        </Container>
    )
}

export default RecapIntro