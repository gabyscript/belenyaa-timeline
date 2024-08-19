import { Container } from "react-bootstrap"
import Hero from "../components/heroSection/hero"
import cherryBlossomVideo from '../assets/videos/cherry-blossom-2.mp4'


const HomePage = () => {
    return (
        <Container className="main-section d-flex justify-content-center align-items-center" fluid >    
            <video className="home-background-video" autoPlay muted loop>
                <source src={cherryBlossomVideo} type="video/mp4"/>
            </video>     
            <Hero />
        </Container>        
    )
}

export default HomePage