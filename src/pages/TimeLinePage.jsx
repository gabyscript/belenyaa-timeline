import TimeLine from "../components/timeline/timeline"
import { useEffect, useState } from "react"


const TimeLinePage = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch('/data/timelineItems.json');
                console.log(response)
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
        <>
            <TimeLine dataItems={items}/>
        </>
    )
}

export default TimeLinePage