import DashboardHeading from "./DashboardHeading";
import KeyData from "./KeyData";
import ChartScore from "./charts/Score";
import ChartDailyActivity from "./charts/DailyActivity";
import ChartAverage from "./charts/Average";
import ChartPerformance from "./charts/Performance";
import { useSelector } from "react-redux";

function DashboardLayout(){

    const userData = useSelector(state => state.user.userData);
    const userPerformance = useSelector(state => state.user.userPerformance);
    const userAverageSessions = useSelector(state => state.user.userAverageSessions);
    const userActivity = useSelector(state => state.user.userActivity);
    
    return (
            <>
                {userData &&
                    <div className="dashboard__layout">
                        <div className="dashboard__layout__heading">
                            <DashboardHeading
                            firstName={userData.userInfos.firstName}
                            />
                        </div>
                        <KeyData
                        data={userData.keyData}
                        />

                        <div className="dashboard__layout__score">
                            <ChartScore
                            score={userData.todayScore ? userData.todayScore : userData.score}
                            />
                        </div>
                        <div className="dashboard__layout__daily">
                            <ChartDailyActivity
                            sessions={userActivity.sessions}
                            />
                        </div>
                        <div className="dashboard__layout__average">
                            <ChartAverage
                            sessions={userAverageSessions}
                            />
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
};

export default DashboardLayout;