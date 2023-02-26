function Notification(props){
    return (
        <div className="notification">
            <div className="notification__heading">
                <button
                onClick={() => {props.onHide()}}
                >
                    x
                </button>
            </div>
            <div className="notification__content">
                {props.children}
            </div>
        </div>
    )
}

export default Notification;