import { Container } from "react-bootstrap"
import belenyPelo from '../../assets/videos/belenyPelo.mp4'


const PinkHair = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background">
            <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100" >
                <Container className="py-1 mb-2 d-flex flex-column w-50 home-container">
                    <h5 className="text-white text-center neon">
                        27/01/2024
                    </h5>
                    <h5 className="text-white text-center neon">
                        Pelito rosado 💅
                    </h5>
                    <h5 className="text-white text-center neon">
                        VOLUME WARNING
                    </h5>
                </Container>
                <Container className="d-flex flex-column justify-content-center align-items-center">
                    <video controls className="ig-video">
                        <source src={belenyPelo} />
                    </video>
                </Container>
            </Container>
        </Container>
    )
}

export default PinkHair