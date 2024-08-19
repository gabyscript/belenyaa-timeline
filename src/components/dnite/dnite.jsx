import { Container, Image } from "react-bootstrap"

const Dnite = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Container className="d-flex flex-column justify-content-center">
                    <h4 className="text-white text-center neon">
                        16/07/2022
                    </h4>
                    <h4 className="text-white text-center neon">
                        Dnite
                    </h4>
                    <h4 className="text-white text-center neon">
                        Los mejores momentos de Dnite
                    </h4>
                    <h4 className="text-white text-center neon">
                        Siguiente
                    </h4>
                </Container> 
            </Container>
        </Container>
    )
}

export default Dnite