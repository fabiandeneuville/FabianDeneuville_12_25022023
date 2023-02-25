import SidebarButton from "./SideBarButton";
import meditation from '../assets/images/meditation.png';
import cycling from '../assets/images/cycling.png';
import swimming from '../assets/images/swimming.png';
import bodybuilding from '../assets/images/bodybuilding.png';

function Sidebar(){
    return (
        <div className="sidebar">
            <SidebarButton
            icon={meditation}
            altText={"meditation"}
            />
            <SidebarButton
            icon={swimming}
            altText={"swimming"}
            />
            <SidebarButton
            icon={cycling}
            altText={"cycling"}
            />
            <SidebarButton
            icon={bodybuilding}
            altText={"bodybuilding"}
            />
        </div>
    )
}

export default Sidebar;