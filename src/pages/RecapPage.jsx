import { Carousel, Container } from "react-bootstrap"
import Stats from "../components/stats/stats"
import RecapIntro from "../components/recapIntro/recapIntro"
import FirstStream from "../components/firstStream/firstStream"
import Countdown from "../components/countdown/countdown"


const RecapPage = () => {
    return (
        <Container fluid className="bg-dark min-vh-100">            
            <Carousel className="" interval={null}>
                <Carousel.Item>
                    <RecapIntro />
                </Carousel.Item>
                <Carousel.Item>
                    <Stats />
                </Carousel.Item>
                <Carousel.Item>
                   <FirstStream />
                </Carousel.Item>
                <Carousel.Item>
                   <Countdown targetDate={'2024-10-11'}/>
                </Carousel.Item>
                </Carousel>
        </Container>
    )
}

export default RecapPage