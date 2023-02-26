import DashboardHeading from "./DashboardHeading";
import KeyData from "./KeyData";
import ChartScore from "./ChartScore";
import ChartDailyActivity from "./ChartDailyActivity";
import ChartAverage from "./ChartAverage";
import ChartPerformance from "./ChartPerformance";
import { useSelector } from "react-redux";

function DashboardLayout(){

    const userData = useSelector(state => state.user.userData);
    const userPerformance = useSelector(state => state.user.userPerformance)

    return (
            <>
                {userData &&
                    <div className="dashboard__layout">
                        <DashboardHeading
                        firstName={userData.userInfos.firstName}
                        />
                        <KeyData
                        data={userData.keyData}
                        
                        />
                        <ChartScore
                        score={userData.todayScore ? userData.todayScore : userData.score}
                        />
                        <ChartDailyActivity/>
                        <ChartAverage/>
                        <ChartPerformance
                        performance={userPerformance}
                        />
                    </div>
                }
            </>
    )
}

export default DashboardLayout;