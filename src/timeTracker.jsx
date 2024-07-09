import React, { useState } from "react";
import UserInfo from "./component/userInfo/userInfo";
import Time from "./component/time/time";
import TabContent from "./component/tabContent/tabContent";

const TimeTracker = () => {
    const [activeTab, setActiveTab] = useState('daily');

    return (
        <div className="timeTracker">
            <div className="timeList">
                <UserInfo />
                <Time onChangeTab={setActiveTab} />
            </div>
            <div className="tracker tabContainer">
                <TabContent tab={activeTab} />
            </div>
        </div>
    );
}

export default TimeTracker;
