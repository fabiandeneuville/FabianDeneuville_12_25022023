import PropTypes from 'prop-types';

import { RadialBarChart, RadialBar, Customized, ResponsiveContainer } from "recharts";

/**
 * Score chart legend
 * @category Components
 * @prop {number} score User score
 * @returns {JSX.Element}
 * @example
 * const score = 0.3;
 * return (
 *  <ChartScoreLeged score={score}/>
 * )
 */
function ChartScoreLegend(props){
    return (
        <g textAnchor="middle">
            <text fontSize='2em' fill='black' x='50%' y='40%'>
            {`${props.score * 100}%`}
            </text>
            <text fontSize='1.2em' fill='darkgrey' x='50%' y='50%'>
                de votre
            </text>
            <text fontSize='1.2em' fill='darkgrey' x='50%' y='60%'>
                objectif
            </text>
        </g>
    );
};

/**
 * Score chart custom title
 * @category Components
 * @returns {JSX.Element}
 * @example
 * return (
 *  <ChartScoreCustomTitle />
 * )
 */
function ChartScoreCustomTitle(){
    return (
        <g textAnchor="left">
            <text fontSize='1em' fill='black' x='15%' y='10%'>
                Score
            </text>
        </g>
    );
};

/**
 * Score chart
 * @category Components
 * @prop {number} score User score
 * @returns {JSX.Element}
 * @example
 * const userScore = 0.5;
 * return (
 *  <ChartScore score={userScore}
 * )
 */
function ChartScore(props){

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
            innerRadius="70%" 
            outerRadius="100%"
            data={[{score: 1, fill: 'transparent'}, {score: props.score, fill: "rgb(234,51,36)"}]}
            startAngle={90} 
            endAngle={450}
            >
                <RadialBar
                minAngle={15}
                clockWise="false"
                dataKey="score"
                fill="rgb(234,51,36)"
                cornerRadius={20}
                />
                <Customized component={<ChartScoreCustomTitle/>}/>
                <Customized component={<ChartScoreLegend score={props.score}/>}/>
            </RadialBarChart>
        </ResponsiveContainer>
    );
};

export default ChartScore;

ChartScore.propTypes = {
    score: PropTypes.number.isRequired
};

ChartScoreLegend.propTypes = {
    score: PropTypes.number.isRequired
};