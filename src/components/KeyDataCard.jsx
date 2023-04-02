import PropTypes from 'prop-types';

function KeyDataCard(props){
    return (
        <div className="keyDataCard">
            <img className="keyDataCard__image" src={props.image} alt={props.type} />
            <div className="keyDataCard__text">
                <p className="keyDataCard__text__value">{props.value}{props.unity}</p>
                <p className="keyDataCard__text__type">{props.type}</p>
            </div>
        </div>
    )
}

export default KeyDataCard;

KeyDataCard.propTypes = {
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    unity: PropTypes.string.isRequired
};