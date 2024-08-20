import { Container, Image } from "react-bootstrap"
import belenyBan from '../../assets/images/beleny-ban.webp'
import shining from '../../assets/images/shining.webp'

const FirstDrawing = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Container className="d-flex flex-column justify-content-center">
                    <h3 className="text-white text-center neon">
                        06/05/2022
                    </h3>
                    <h3 className="text-white text-center neon">
                        Concurso de dibujo 
                    </h3>
                </Container> 
                <Container className="d-flex flex-row justify-content-center">
                    <Image src={shining}
                    className="belenya-ban-img " rounded />
                    <Image src={belenyBan}
                    className="belenya-ban-img " rounded />
                </Container>           
            </Container>
        </Container>
    )
}

export default FirstDrawing