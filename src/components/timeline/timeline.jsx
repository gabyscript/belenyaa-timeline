import { Chrono } from "react-chrono"
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import './timeline.css'

const TimeLine = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch('/data/timelineItems.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [])

    return (
        <Container className="timeline-container py-4" fluid>
            <Container className="d-flex flex-column">
                <h2 className="text-center">
                    Tu historia en Twitch uwu
                </h2>
            </Container>  
            <Container className="overflow-auto">
                {items.length > 0 ? (
                    <Chrono
                        items={items}
                        cardHeight={550} 
                        mediaHeight={400} 
                        contentDetailsHeight={80}
                        mode="VERTICAL_ALTERNATING"
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