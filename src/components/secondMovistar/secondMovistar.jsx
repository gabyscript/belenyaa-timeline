import { Container, Image } from "react-bootstrap"
import belenyMovistar from '../../assets/images/movistar-2.webp'
import './secondMovistar.css'

const SecondMovistar = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Container className="d-flex flex-column justify-content-center home-container w-50 mb-3 py-2">
                    <h3 className="text-white text-center neon">
                        06/05/2023
                    </h3>
                    <h3 className="text-white text-center neon">
                        Segundo Movistar
                    </h3>
                </Container> 
                <Container className="d-flex flex-row justify-content-center">
                    <Image src={belenyMovistar}
                    className="movistar-2" rounded />                    
                </Container>           
            </Container>
        </Container>
    )
}

export default SecondMovistar