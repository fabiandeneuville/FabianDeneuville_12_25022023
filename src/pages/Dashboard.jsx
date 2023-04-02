import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import DashboardLayout from "../components/DashboardLayout";
import Notification from "../components/Notification";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getUserData } from "../store/actions";

function DashBoard(){

    const { id } = useParams();
    console.log(id)
    const userData = useSelector(state => state.user.userData);
    const userActivity = useSelector(state => state.user.userActivity);
    const userAverageSessions = useSelector(state => state.user.userAverageSessions);
    const userPerformance = useSelector(state => state.user.userPerformance);
    const isRequesting = useSelector(state => state.status.isRequesting);
    const showNotification = useSelector(state => state.status.showNotification);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserData(id));
        shouldNotificationDisplay();
    }, [dispatch, showNotification]);

    function shouldNotificationDisplay(){
        setDisplayNotification(showNotification)
    }

    const [displayNotification, setDisplayNotification] = useState(showNotification)

    const hideNotification = () => {
        setDisplayNotification(false)
    }

    return (
        <div>
            {isRequesting && 
                <Loader/>
            }
            {displayNotification && 
                <Notification
                onHide={hideNotification}
                >
                    <p>Un problème inconnu nous empêche d'afficher votre profil.</p>
                    <p>Nous mettons tout en oeuvre pour résoudre la situation.</p>
                </Notification>
            }
            <Header/>
            <Sidebar/>
            <DashboardLayout/>
        </div>
    )
}

export default DashBoard;