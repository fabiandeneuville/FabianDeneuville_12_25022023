import PropTypes from 'prop-types';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function ChartPerformance(props){

    return (
        <ResponsiveContainer width="100%"height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="50%" data={props.performance}>
                <PolarGrid 
                gridType='polygon'
                radialLines={false}
                stroke='#fff'/>
                <PolarAngleAxis 
                stroke='#fff' 
                dataKey="kind" 
                tickLine={false}
                />
                <Radar dataKey="value" stroke="rgb(234,51,36)" fill="rgb(234,51,36)" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default ChartPerformance;

ChartPerformance.propTypes = {
    performance: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })).isRequired
};