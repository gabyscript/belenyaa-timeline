import { Container, Image } from "react-bootstrap"
import belenyAffiliate from '../../assets/images/belenya-affiliate.webp'
import belenyAffiliateTwo from '../../assets/images/belenya-affiliate-2.webp'
import './affiliate.css'

const Affiliate = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 background" >
            <Container className="d-flex flex-column justify-content-center align-items-center  py-5">
                <Container className="d-flex flex-column justify-content-center home-container w-50 py-3">
                    <h1 className="text-white text-center neon">
                        23/03/2021
                    </h1>
                    <h1 className="text-white text-center neon">
                        Afiliado
                    </h1>
                </Container> 
                <Container className="d-flex flex-row justify-content-center py-5">
                    <Image src={belenyAffiliate}
                    className="belenya-affiliate-img"  />
                </Container>           
            </Container>
        </Container>
    )
}

export default Affiliate