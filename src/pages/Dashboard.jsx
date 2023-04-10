import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import DashboardLayout from "../components/DashboardLayout";
import Notification from "../components/Notification";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getUserDataAction } from "../store/actions";

/**
 * Dashboard main page
 * @category Components
 * @return {JSX.Element}
 * 
 */
function DashBoard(){

    const { id } = useParams();
    const isRequesting = useSelector(state => state.status.isRequesting);
    const showNotification = useSelector(state => state.status.showNotification);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDataAction(id));
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