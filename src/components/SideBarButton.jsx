import PropTypes from 'prop-types';

function SidebarButton(props){
    return (
        <div className="sidebar__button" role={"button"}>
            <img className="sidebar__button__image" src={props.icon} alt={props.altText} />
        </div>
    )
}

export default SidebarButton;

SidebarButton.propTypes = {
    icon: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};