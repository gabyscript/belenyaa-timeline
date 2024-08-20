import { Container, Image } from "react-bootstrap"
import belenyBan from '../../assets/images/beleny-ban.webp'
import shining from '../../assets/images/shining.webp'
import './firstBan.css'

const FirstBan = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Container className="d-flex flex-column justify-content-center home-container w-50 py-1 mb-3">
                    <h3 className="text-white text-center neon">
                        14/01/2023
                    </h3>
                    <h3 className="text-white text-center neon">
                        ☠️ Ban ☠️
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

export default FirstBan