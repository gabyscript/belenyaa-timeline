import { Container } from "react-bootstrap"
import belenyUwa from '../../assets/videos/belenyUwaNyaatos.mp4'
import TwitchVideos from "../twitchVideos/twitchVideos"


const FirstMovistar = () => {
    return (
        <Container className="min-vh-100">
            <TwitchVideos videoPath={belenyUwa} 
            date={"11/01/2022"} title={"Primer Movistar"} />
        </Container>
    )
}

export default FirstMovistar