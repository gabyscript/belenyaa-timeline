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
                    <FirstMovistar />
                </Carousel.Item>
                <Carousel.Item>
                    <h2 className="text-white min-vh-100">
                        1er Concurso de dibujo
                    </h2>
                </Carousel.Item>
                <Carousel.Item>
                    <Dnite />
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