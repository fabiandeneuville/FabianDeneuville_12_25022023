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
                        <div className="dashboard__layout__heading">
                            <DashboardHeading
                            firstName={userData.userInfos.firstName}
                            />
                        </div>
                        <div className="dashboard__layout__keyDatas">
                            <KeyData
                            data={userData.keyData}
                            />
                        </div>
                        <div className="dashboard__layout__score">
                            <ChartScore
                            score={userData.todayScore ? userData.todayScore : userData.score}
                            />
                        </div>
                        <div className="dashboard__layout__daily">
                            <ChartDailyActivity/>
                        </div>
                        <div className="dashboard__layout__average">
                            <ChartAverage/>
                        </div>
                        <div className="dashboard__layout__performance">
                            <ChartPerformance
                            performance={userPerformance}
                            />
                        </div>
                    </div>
                }
            </>
    )
}

export default DashboardLayout;