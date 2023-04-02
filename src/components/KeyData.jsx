import PropTypes from 'prop-types';

import KeyDataCard from "./KeyDataCard";
import calorieImg from '../assets/images/calorie.png';
import carbohydrateImg from '../assets/images/carbohydrate.png';
import proteinImg from '../assets/images/protein.png';
import lipidImg from '../assets/images/lipid.png';

function KeyData(props){

    return (
        <div className="dashboard__layout__keyDatas">

            <KeyDataCard
            image={calorieImg}
            type={"Calories"}
            unity={"kCal"}
            value={props.data.calorieCount}
            />

            <KeyDataCard
            image={proteinImg}
            type={"Protéines"}
            unity={"g"}
            value={props.data.proteinCount}
            />

            <KeyDataCard
            image={carbohydrateImg}
            type={"Glucides"}
            unity={"g"}
            value={props.data.carbohydrateCount}
            />

            <KeyDataCard
            image={lipidImg}
            type={"Lipides"}
            unity={"g"}
            value={props.data.lipidCount}
            />
        </div>
    )
}

export default KeyData;

KeyData.propTypes = {
    data: PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired
    }).isRequired
};