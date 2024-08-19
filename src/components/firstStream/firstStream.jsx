import { Container, Image } from "react-bootstrap"
import firstStream from '../../assets/videos/primer-stream-1.mp4'
import './firstStream.css'
import TwitchVideos from "../twitchVideos/twitchVideos"

const FirstStream = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={firstStream} 
            date={"14/03/2021"} title={"Primer stream 👀"} />
        </Container>
        
    )
}

export default FirstStream