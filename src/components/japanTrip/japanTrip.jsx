import { Container } from "react-bootstrap"
import belenyJapon from '../../assets/videos/beleny-japon.mp4'


const JapanTrip = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background">
            <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100" >
                <Container className="py-1 mb-2 d-flex flex-column w-50 home-container">
                    <h5 className="text-white text-center neon">
                        06/04/2023
                    </h5>
                    <h5 className="text-white text-center neon">
                        Viaje a Japón 🎌
                    </h5>
                    <h5 className="text-white text-center neon">
                        VOLUME WARNING
                    </h5>
                </Container>
                <Container className="d-flex flex-column justify-content-center align-items-center">
                    <video controls className="ig-video">
                        <source src={belenyJapon} />
                    </video>
                </Container>
            </Container>
        </Container>
    )
}

export default JapanTrip