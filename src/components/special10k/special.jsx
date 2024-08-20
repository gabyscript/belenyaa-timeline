import TwitchVideos from "../twitchVideos/twitchVideos"
import { Container } from "react-bootstrap"
import belenyChika from '../../assets/videos/belenyChika.mp4'


const Special = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={belenyChika} 
            date={"10/12/2021"} title={"Extensible Especial 10K"} />
        </Container>
    )
}

export default Special