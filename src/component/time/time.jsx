import React, { useState } from "react";
import './time.css';

const Time = ({ onChangeTab }) => {
    const [activeTab, setActiveTab] = useState('daily');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onChangeTab(tab);
    };

    return (
        <div className="time">
            <ul className="tabs">
                <li data-tab="daily" className={`tab ${activeTab === 'daily' ? 'active' : ''}`} onClick={() => handleTabClick('daily')}>daily</li>
                <li data-tab="weekly" className={`tab ${activeTab === 'weekly' ? 'active' : ''}`} onClick={() => handleTabClick('weekly')}>weekly</li>
                <li data-tab="monthly" className={`tab ${activeTab === 'monthly' ? 'active' : ''}`} onClick={() => handleTabClick('monthly')}>monthly</li>
            </ul>
        </div>
    )
}

export default Time;
