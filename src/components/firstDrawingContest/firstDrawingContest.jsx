import { Container, Image } from "react-bootstrap"
import firstDrawingContest from '../../assets/images/dibujo-1.webp'
import './firstDrawingContest.css'

const FirstDrawing = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Container className="d-flex flex-column justify-content-center home-container w-50 py-1 mb-2">
                    <h3 className="text-white text-center neon">
                        06/05/2022
                    </h3>
                    <h3 className="text-white text-center neon">
                        Concurso de dibujo 
                    </h3>
                </Container> 
                <Container className="d-flex flex-row justify-content-center">
                    <Image src={firstDrawingContest}
                    className="dibujo" rounded />
                </Container>           
            </Container>
        </Container>
    )
}

export default FirstDrawing