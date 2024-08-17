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
        <div style={{width: "95vw", height: "600px"  }}>
            {items.length > 0 ? (
                <Chrono
                    items={items}
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
        </div>
    )
}

export default TimeLine