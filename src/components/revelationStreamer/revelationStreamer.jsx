import { Container } from "react-bootstrap"
import belenyPremio from '../../assets/videos/belenyPremio.mp4'
import TwitchVideos from "../twitchVideos/twitchVideos"

const RelevationStreamer = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={"https://www.youtube.com/watch?v=sH_LzliSSiA&feature=youtu.be"} 
            date={"21/03/2024"} title={"Streamer Revelacion 😎"} />
        </Container>
    )
}

export default RelevationStreamer