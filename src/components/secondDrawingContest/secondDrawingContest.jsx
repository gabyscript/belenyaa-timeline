import { Container, Image } from "react-bootstrap"
import belenyDibujoDos from '../../assets/images/dibujo-2.webp'
import './secondDrawingContest.css'

const SecondDrawingConstest = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Container className="d-flex flex-column justify-content-center home-container w-50 mb-3 py-2">
                    <h3 className="text-white text-center neon">
                        07/04/2024
                    </h3>
                    <h3 className="text-white text-center neon">
                        Segundo concurso de dibujo
                    </h3>
                </Container> 
                <Container className="d-flex flex-row justify-content-center">
                    <Image src={belenyDibujoDos}
                    className="dibujo-2" rounded />                    
                </Container>           
            </Container>
        </Container>
    )
}

export default SecondDrawingConstest