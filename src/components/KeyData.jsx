import PropTypes from 'prop-types';

import KeyDataCard from "./KeyDataCard";
import calorieImg from '../assets/images/calorie.png';
import carbohydrateImg from '../assets/images/carbohydrate.png';
import proteinImg from '../assets/images/protein.png';
import lipidImg from '../assets/images/lipid.png';

/**
 * Key data cards container
 * @category Components
 * @prop {number} calorieCount Calorie count 
 * @prop {number} proteinCount Protein count
 * @prop {number} carbohydrateCount Carbohydrate count
 * @prop {number} lipidCount Lipid count
 * @return {JSX.Element}
 * @example
 * const calorieCount = 1000;
 * const proteinCount = 1000;
 * const carbohydrateCount = 1000;
 * const lipidCount = 1000;
 * 
 * return (
 *  <KeyData 
 *  calorieCount={calorieCount} 
 *  proteinCount={proteinCount} 
 *  carbohydrateCount={carbohydrateCount} 
 *  lipidCount={lipidCount} 
 *  />
 * )
 */
function KeyData(props){

    return (
        <div className="dashboard__layout__keyDatas">

            <KeyDataCard
            image={calorieImg}
            type={"Calories"}
            unity={"kCal"}
            value={props.calorieCount}
            />

            <KeyDataCard
            image={proteinImg}
            type={"Protéines"}
            unity={"g"}
            value={props.proteinCount}
            />

            <KeyDataCard
            image={carbohydrateImg}
            type={"Glucides"}
            unity={"g"}
            value={props.carbohydrateCount}
            />

            <KeyDataCard
            image={lipidImg}
            type={"Lipides"}
            unity={"g"}
            value={props.lipidCount}
            />
        </div>
    )
}

export default KeyData;

KeyData.propTypes = {
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired
};