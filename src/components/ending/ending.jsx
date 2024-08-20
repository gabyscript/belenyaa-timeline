import { Container, Image } from "react-bootstrap"

const Ending = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Container className="d-flex flex-column justify-content-center home-container w-50 p-5 mb-2">
                    <h3 className="text-white text-center neon">
                    Gracias por cada momento compartido, por las risas, la compañía y todo lo que nos has enseñado. <br />
                    Nos has hecho sentir parte de algo especial y esperamos seguir viéndote crecer y disfrutar cada stream contigo. <br />                   
                    ¡Te apoyamos siempre y estaremos aquí para la próxima aventura en directo!
                    </h3>
                    <h3 className="text-white text-center neon">
                        Gracias [nombre streamer] <br /> - ChatGPT
                    </h3>
                </Container>       
            </Container>
        </Container>
    )
}

export default Ending