import { Container } from "react-bootstrap"
import NyaasaVideo from '../../assets/videos/pc-nyaasa.mp4'
import './nyaasaPC.css'

const NyaasaPc  = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background">
            <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100" >
                <Container className="py-1 mb-2 d-flex flex-column w-50 home-container">
                    <h5 className="text-white text-center neon">
                        24/06/2021
                    </h5>
                    <h5 className="text-white text-center neon">
                        Pc de la Nyaasa 
                    </h5>
                    <h5 className="text-white text-center neon">
                        VOLUME WARNING
                    </h5>
                </Container>
                <Container className="d-flex flex-column justify-content-center align-items-center">
                    <video controls className="nyaasa-video">
                        <source src={NyaasaVideo} />
                    </video>
                </Container>
            </Container>
        </Container>
    )
}

export default NyaasaPc