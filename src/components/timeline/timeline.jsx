import { Chrono } from "react-chrono"
import { useEffect, useState } from "react";

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
        <div style={{width: '90vw'}}>
            {items.length > 0 ? (
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    slideShow
                    slideItemDuration={4500}
                    slideShowType="reveal"
                    theme={{
                        primary: 'red',
                        secondary: 'blue',
                        cardBgColor: 'yellow',
                        titleColor: 'black',
                        titleColorActive: 'red',
                    }}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default TimeLine