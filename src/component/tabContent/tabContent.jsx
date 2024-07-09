import React, { useEffect, useState } from "react";
import Item from "../item/item";
import './tabContent.css';

const TabContent = ({ tab }) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const jsonData = await response.json();
        setData(jsonData);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div id={tab} className={`tabContent ${tab}`}>
            {data.map((item, index) => (
                <Item
                    key={index}
                    title={item.title}
                    hours={item.timeframes[tab].current}
                    prevLog={item.timeframes[tab].previous}
                />
            ))}
        </div>
    );
}

export default TabContent;
