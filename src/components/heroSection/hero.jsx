import { Button, Container, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import Countdown from "../countdown/countdown"


const Hero = () => {
    return (
        <Container className="py-5 home-container">
            <Container className="pt-5 pb-3 d-flex justify-content-center align-items-center" fluid>
                <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/c85ea4c8-8d90-45dc-a99c-1f0d494b1230-profile_image-150x150.png"
                roundedCircle></Image>
            </Container>
            <Container className="d-flex flex-column justify-content-center align-items-center" fluid>
                <h2 className="text-center pb-2">
                    Feliz aniversario de Partner
                </h2>
                <h4 className="pb-2">
                    Porque cada momento ha sido importante , los Nyaatitos te hicimos una sorpresa.
                </h4>
            </Container>
            <Container className="d-flex flex-column justify-content-center align-items-center gap-3">
                <Button variant="info">
                    <Link to="/recap" className="text-white" style={{textDecoration: 'none'}}>     
                        <strong style={{textDecoration: 'none'}}>                                    
                            Sorprendete 🥳
                        </strong>       
                    </Link>
                </Button>
            </Container>
        </Container>
        
    )
}

export default Hero