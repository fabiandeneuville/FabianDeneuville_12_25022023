import PropTypes from 'prop-types';

/**
 * Notification component
 * @category Components
 * @prop {func} onHide Closing notification function
 * @prop {arrayOf(node)} children HTML elements do be displayed in notification
 * @return {JSX.Element}
 * @example
 * return (
 *  <Notification onHide={function}>
 *     <p>message</p>
 *  </Notification>
 * )
 */
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
    );
};

export default Notification;

Notification.propTypes = {
    onHide: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};