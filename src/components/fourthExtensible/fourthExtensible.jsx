import { Container, Image } from "react-bootstrap"
import Siu from '../../assets/videos/siuuu.mp4'
import './fourthExtensible.css'
import TwitchVideos from "../twitchVideos/twitchVideos"


const FourthExtensible = () => {
    return (
        <Container className="min-vh-100" fluid>
            <TwitchVideos videoPath={Siu} 
            date={"26/07/2024"} title={"Último extensible FeelsCalmMan"} />
        </Container>
    )
}

export default FourthExtensible