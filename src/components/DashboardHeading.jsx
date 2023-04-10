import PropTypes from 'prop-types';

/**
 * Dashboard heading - user greeting
 * @category Components
 * @prop {string} firstName User firstname 
 * @return {JSX.Element}
 * @example
 * const firstName = "Fabian";
 * return (
 *  <DashboardHeading
 *  firstName={firstName}
 *  />
 * )
 */
function DashboardHeading(props){
    return (
        <div>
            <h1 className="dashboard__layout__heading__title">Bonjour <span className="dashboard__layout__heading__title__firstName">{props.firstName}</span></h1>
            <p className="dashboard__layout__heading__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default DashboardHeading;

DashboardHeading.propTypes = {
    firstName: PropTypes.string.isRequired
};