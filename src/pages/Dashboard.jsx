import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import DashboardLayout from "../components/DashboardLayout";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../store/actions";

function DashBoard(){

    const userData = useSelector(state => state.user.userData);
    const userActivity = useSelector(state => state.user.userActivity);
    const userAverageSessions = useSelector(state => state.user.userAverageSessions);
    const userPerformance = useSelector(state => state.user.userPerformance);
    const isRequesting = useSelector(state => state.status.isRequesting);

    console.log(userData);
    console.log(userActivity);
    console.log(userAverageSessions);
    console.log(userPerformance);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserData(12));
    }, [dispatch]);

    return (
        <div>
            {isRequesting && 
                <Loader/>
            }
            <Header/>
            <Sidebar/>
            <DashboardLayout/>
        </div>
    )
}

export default DashBoard;