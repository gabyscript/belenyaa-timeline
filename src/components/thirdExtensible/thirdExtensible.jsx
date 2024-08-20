import { Container } from "react-bootstrap"
import Downhill from '../../assets/videos/downhill.mp4'
import TwitchVideos from "../twitchVideos/twitchVideos"


const ThirdExtensible = () => {
    return (
        <Container className="min-vh-100" fluid>
            <TwitchVideos videoPath={Downhill} 
            date={"25/02/2023"} title={"Tercer extensible"} />
        </Container>
    )
}

export default ThirdExtensible