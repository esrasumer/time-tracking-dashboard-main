import UserInfo from "./components/userInfo/UserInfo";
import Time from "./components/time/time"

export default function TimeTracker() {
    return (
        <div className="timeTracker">
            <div className="timeList">
                <UserInfo />
                <Time />
            </div>
            <div className="tracker">

            </div>

        </div>
    )
}