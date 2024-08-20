
import { Container } from "react-bootstrap"

const TwitchVideos = ({videoPath, date, title}) => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="py-3 d-flex flex-column justify-content-center align-items-center  home-container  w-50 mb-3">
                <h4 className="text-white text-center neon">
                    {date}
                </h4>
                <h4 className="text-white text-center neon">
                    {title}
                </h4>
            </Container>
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <video controls className="video">
                    <source src={videoPath} />
                </video>
            </Container>
        </Container>
    )
    
}

export default TwitchVideos