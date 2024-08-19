import { Chrono } from "react-chrono"
import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import './timeline.css'

const TimeLine = ({dataItems}) => {

    return (
        <Container className="timeline-container py-4" fluid>
            <Container className="py-2 d-flex flex-column justify-content-center align-items-center">
                <Image src="/images/primer-aniversario.webp" rounded className="holi"/>
            </Container>  
            <Container className="overflow-auto">
                {dataItems?.length > 0 ? (
                    <Chrono
                        items={dataItems}
                        cardHeight={550} 
                        mediaHeight={400} 
                        contentDetailsHeight={80}
                        mode="VERTICAL_ALTERNATING"
                        hideControls
                        slideShow
                        slideItemDuration={4500}
                        scrollable={{ scrollbar: true }}
                        theme={{
                            primary: '#112211',
                            secondary: '#b39edb',
                            cardBgColor: '#665c84',
                            titleColor: '#323232',
                            titleColorActive: '#323232',
                        }}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </Container>
    )
}

export default TimeLine