import { Container, Image } from "react-bootstrap"
import Faker from '../../assets/videos/belenyFaker.mp4'
import TwitchVideos from "../twitchVideos/twitchVideos"


const Partner = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={Faker} 
            date={"19/08/2021"} title={"Partner o7"} />
        </Container>
    )
}

export default Partner