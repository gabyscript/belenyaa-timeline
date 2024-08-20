import { Container } from "react-bootstrap"
import belenyPremio from '../../assets/videos/belenyPremio.mp4'
import TwitchVideos from "../twitchVideos/twitchVideos"

const RelevationStreamer = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={belenyPremio} 
            date={"21/03/2024"} title={"Streamer Revelación 😎"} />
        </Container>
    )
}

export default RelevationStreamer