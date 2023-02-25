import DashboardHeading from "./DashboardHeading";
import DashboardKeyDatas from "./DashboardKeyDatas";
import DashboardScore from "./DashBoardScore";
import DashboardDailyActivity from "./DashboardDailyActivity";
import DashboardAverage from "./DashboardAverage";
import DashboardPerformance from "./DashboardPerformance";
import { useSelector } from "react-redux";

function DashboardLayout(){

    const userData = useSelector(state => state.user.userData);

    return (
            <>
                {userData &&
                    <div className="dashboard__layout">
                        <DashboardHeading
                        firstName={userData.userInfos.firstName}
                        />
                        <DashboardKeyDatas/>
                        <DashboardScore/>
                        <DashboardDailyActivity/>
                        <DashboardAverage/>
                        <DashboardPerformance/>
                    </div>
                }
            </>
    )
}

export default DashboardLayout;