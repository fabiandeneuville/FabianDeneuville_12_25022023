function SidebarButton(props){
    return (
        <div className="sidebar__button" role={"button"}>
            <img className="sidebar__button__image" src={props.icon} alt={props.altText} />
        </div>
    )
}

export default SidebarButton;