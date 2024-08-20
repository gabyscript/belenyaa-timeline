import { Container, Image } from "react-bootstrap"
import './stats.css'


const Stats = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center home-container w-75 py-5">
                <Container className="d-flex flex-row justify-content-center">
                    <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/c85ea4c8-8d90-45dc-a99c-1f0d494b1230-profile_image-150x150.png"
                    className="" roundedCircle />
                </Container>
                <Container className="pt-2 pb-4">
                    <h1 className="text-white text-center neon">
                        Belenyaa
                    </h1>
                </Container>
                <Container className="d-flex flex-row justify-content-center align-items-center w-50">
                    <Container className="d-flex flex-column px-4">
                        <h3 className="text-white text-center numbers">
                            4166
                        </h3>
                        <h4 className="text-white text-center label">
                            Horas stremeadas
                        </h4>
                    </Container>
                    <Container className="d-flex flex-column px-4">
                        <h3 className="text-white text-center numbers">
                            3
                        </h3>
                        <h4 className="text-white text-center label">
                            Años Partner
                        </h4>
                    </Container>
                    <Container className="d-flex flex-column px-4">
                        <h3 className="text-white text-center numbers">
                            2395 h.
                        </h3>
                        <h4 className="text-white text-center label">
                            Just Chatting
                        </h4>
                    </Container>
                    <Container className="d-flex flex-column px-4">
                        <h3 className="text-white text-center numbers">
                            6
                        </h3>
                        <h4 className="text-white text-center label">
                            Generación Nyaatitos
                        </h4>
                    </Container>
                </Container>
                
            </Container>
        </Container>
    )
}

export default Stats