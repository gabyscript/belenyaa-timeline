import { Container, Image } from "react-bootstrap"

const Dnite = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100" >
            <Container className="d-flex flex-column justify-content-center align-items-center home-container w-50 py-5">
                <Container className="d-flex flex-column justify-content-center">
                    <h4 className="text-white text-center neon">
                        16/07/2022
                    </h4>
                    <h4 className="text-white text-center neon">
                        Dnite - Mejores momentos
                    </h4>                    
                </Container> 
                <Container className="d-flex flex-column justify-content-center">
                    <h1 className="text-center text-white neon">
                        404
                    </h1>
                    <h1 className="text-center text-white neon">
                        Not found 😿
                    </h1>
                    
                </Container> 
            </Container>
        </Container>
    )
}

export default Dnite