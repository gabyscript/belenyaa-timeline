import { Container, Image } from "react-bootstrap"
import firstStream from '../../assets/videos/primer-stream-1.mp4'
import './firstStream.css'

const FirstStream = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 photo-container">
            <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 demo-content" >
                <Container className="pb-3">
                    <h2 className="text-white text-center">
                        Primer stream 👀
                    </h2>
                </Container>
                <Container className="d-flex flex-column justify-content-center align-items-center">
                    <video controls>
                        <source src={firstStream} />
                    </video>
                </Container>
            </Container>
        </Container>
        
    )
}

export default FirstStream