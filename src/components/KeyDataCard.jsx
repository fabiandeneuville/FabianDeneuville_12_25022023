import PropTypes from 'prop-types';

/**
 * Key data card
 * @category Components
 * @prop {string} type Type of key data
 * @prop {string} unity Unity of key data
 * @prop {number} value Value of key data
 * @prop {string} image Imported image path
 * @return {JSX.Element}
 * @example
 * const type = "Protéines";
 * const unity - "g";
 * const value = 90;
 * const image = "/src/assets/images/protein.png"
 * 
 * return (
 *  <KeyDataCard 
 *  type={type} 
 *  unity={unity} 
 *  value={value} 
 *  image={image} 
 *  />
 * )
 */
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
    /**
     * Imported image path
     */
    image: PropTypes.string.isRequired,
    /**
     * Value of key data
     */
    value: PropTypes.number.isRequired,
    /**
     * Type of key data
     */
    type: PropTypes.string.isRequired,
    /**
     * Unity of key data
     */
    unity: PropTypes.string.isRequired
};