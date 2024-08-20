import { Container } from "react-bootstrap"
import belenyUwa from '../../assets/videos/belenyUwaNyaatos.mp4'
import TwitchVideos from "../twitchVideos/twitchVideos"

const RelevationStreamer = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={belenyUwa} 
            date={"21/03/2024"} title={"Streamer Revelacion 😎"} />
        </Container>
    )
}

export default RelevationStreamer