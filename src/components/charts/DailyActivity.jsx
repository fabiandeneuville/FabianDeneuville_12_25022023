import PropTypes from 'prop-types';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Customized } from 'recharts';

const legendFormatter = (value) => {
    const legends = {
        kilogram: 'Poid (kg)',
        calories: 'Calories brûlées (kCal)'
    };
    return  <span>{legends[value]}</span>
}

/**
 * @category Components
 * @function
 * @prop {boolean} active Is tooltip active ?
 * @prop {array} payload Array of objects defining current chart
 * @returns {JSX.Element}
 */
function ChartDailyActivityCustomTooltip({ active, payload }){
    if (active && payload && payload.length) {
        return (
            <div>
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        );
    }
    return null;
};

/**
 * Daily activity chart custom title
 * @category Components
 * @returns {JSX.Element}
 * @example
 * return (
 *  <ChartDailyActivityCustomTitle />
 * )
 */
function ChartDailyActivityCustomTitle(){
    return (
        <g textAnchor="left">
            <text fontSize='1em' fill='black' x='5%' y='8%' opacity={'0.8'}>
                Activité quotidienne
            </text>
        </g>
    );
};

/**
 * Daily activity chart
 * @category Components
 * @prop {array.<{day: Number, kilogram: Number, calories, Number}>} sessions User sessions
 * @returns {JSX.Element}
 * @example
 * const sessions = [
 *  {day: 1, kilogram: 99, calories: 600},
 *  {day: 2, kilogram: 99, calories: 500},
 *  {day: 3, kilogram: 98, calories: 600},
 *  {day: 4, kilogram: 97, calories: 700},
 *  {day: 5, kilogram: 97, calories: 700},
 *  {day: 6, kilogram: 97, calories: 500},
 *  {day: 7, kilogram: 96, calories: 600},
 * ]
 * return (
 *     <ChartDailyActivity sessions={sessions} />
 * )
 */

function ChartDailyActivity(props){

    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={props.sessions} barGap={8} barCategoryGap={1}>
            <Customized component={<ChartDailyActivityCustomTitle/>}/>
            <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}}/>
            <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} hide={true}/>
            <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
            <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]}/>
            <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[5, 5, 0, 0]}/>
            <Tooltip cursor={{opacity: 0.3}}  content={<ChartDailyActivityCustomTooltip/>}/>
            <Legend formatter={legendFormatter} align='right' verticalAlign='top' iconType='circle' iconSize={10} height={40} />
        </BarChart>
    </ResponsiveContainer>
    );
};

export default ChartDailyActivity;

ChartDailyActivity.propTypes = {
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired
    })).isRequired
};