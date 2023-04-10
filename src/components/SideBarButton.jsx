import PropTypes from 'prop-types';

/**
 * Sidebar button
 * @category Components
 * @return {JSX.Element}
 * @prop {string} icon Imported icon path
 * @prop {string} altText Alternative text to the icon
 * @example
 * const icon = "/src/assets/images/cycling.png";
 * const altText = "cycling";
 * return (
 *     <SidebarButton icon={icon} altText={altText} />
 * )
 */
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