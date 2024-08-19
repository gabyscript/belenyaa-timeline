import { Container } from "react-bootstrap"
import Faker from '../../assets/videos/belenyFaker.mp4'
import './secondExtensible.css'
import TwitchVideos from "../twitchVideos/twitchVideos"


const SecondExtensible = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={Faker} 
            date={"07/08/2021"} title={"Segundo extensible"} />
        </Container>
    )
}

export default SecondExtensible