import { Carousel, Container } from "react-bootstrap"
import Stats from "../components/stats/stats"
import RecapIntro from "../components/recapIntro/recapIntro"
import FirstStream from "../components/firstStream/firstStream"
import Countdown from "../components/countdown/countdown"
import Affiliate from "../components/affiliate/affiliate"
import NyaasaPc from "../components/nyaasaPC/nyaasaPc"
import FourthExtensible from "../components/fourthExtensible/fourthExtensible"
import SecondExtensible from "../components/secondExtensible/secondExtensible"
import Partner from "../components/partner/partner"
import Dnite from "../components/dnite/dnite"
import FirstMovistar from "../components/firstMovistar/firstMovistar"
import FirstBan from "../components/firstBan/firstBan"
import Special from "../components/special10k/special"
import FirstDrawing from "../components/firstDrawingContest/firstDrawingContest"
import SecondMovistar from "../components/secondMovistar/secondMovistar"
import RelevationStreamer from "../components/revelationStreamer/revelationStreamer"
import SecondDrawingConstest from "../components/secondDrawingContest/secondDrawingContest"
import JapanTrip from "../components/japanTrip/japanTrip"
import PinkHair from "../components/pinkHair/pinkHair"


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
                   <Affiliate />
                </Carousel.Item>
                <Carousel.Item>
                    <h2>
                        Primer extensible
                    </h2>
                </Carousel.Item>
                <Carousel.Item>
                   <NyaasaPc />
                </Carousel.Item>
                <Carousel.Item>
                   <SecondExtensible />
                </Carousel.Item>
                <Carousel.Item>
                   <Partner />
                </Carousel.Item>
                <Carousel.Item>
                   <Special />
                </Carousel.Item>
                <Carousel.Item>
                    <FirstMovistar />
                </Carousel.Item>
                <Carousel.Item>
                    <FirstDrawing />
                </Carousel.Item>
                <Carousel.Item>
                    <Dnite />
                </Carousel.Item>
                <Carousel.Item>
                    <FirstBan />
                </Carousel.Item>
                <Carousel.Item>
                    <SecondMovistar />
                </Carousel.Item>
                <Carousel.Item>
                    <JapanTrip />
                </Carousel.Item>
                <Carousel.Item>
                    <PinkHair />
                </Carousel.Item>
                <Carousel.Item>
                    <RelevationStreamer />
                </Carousel.Item>
                <Carousel.Item>
                    <SecondDrawingConstest />
                </Carousel.Item>
                <Carousel.Item>
                    <FourthExtensible />
                </Carousel.Item>
                <Carousel.Item>
                   <Countdown targetDate={'2024-10-11'}/>
                </Carousel.Item>
                </Carousel>
        </Container>
    )
}

export default RecapPage