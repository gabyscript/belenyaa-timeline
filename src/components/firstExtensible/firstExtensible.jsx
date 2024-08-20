import { Container } from "react-bootstrap"
import FirstExtensibleVideo from '../../assets/videos/extensible-uno.mp4'
import TwitchVideos from "../twitchVideos/twitchVideos"

const FirstExtensible = () => {
    return (
        <Container className="min-vh-100 background">
            <TwitchVideos videoPath={FirstExtensibleVideo} 
            date={"24/05/2021"} title={"Primer extensible"} />
        </Container>
    )
    
}

export default FirstExtensible