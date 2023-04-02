import PropTypes from 'prop-types';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Customized} from "recharts";

function CustomTooltip({ active, payload }){
    if (active && payload && payload.length) {
        return (
            <div className="customTooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    };
    return null;
};

function CustomTitle(){
    return (
        <g textAnchor="left">
        <text fontSize='1em' fill='white' x='10%' y='10%' opacity={'0.8'}>
        Durée moyenne des
        </text>
        <text fontSize='1em' fill='white' x='10%' y='15%' opacity={'0.8'}>
        sessions
        </text>
    </g>
    );
};

function ChartAverage(props){

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.sessions} strokeWidth={1}
                onMouseMove={(e) => {
                    if (e.isTooltipActive === true) {
                        let chartContainer = document.querySelector('.dashboard__layout__average');
                        let windowWidth = chartContainer.clientWidth;
                        let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
                        chartContainer.style.background = `linear-gradient(90deg, rgb(234,51,36) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                    };
                }}>
                
                <XAxis
                type="category"
                dataKey="day"
                tickLine={false}
                stroke="transparent"
                padding={{right:5, left:5}}
                tick={{ fontSize: 12, stroke: "white", opacity: 0.8}}
                />
                <YAxis
                dataKey="sessionLength"
                domain={[0, "dataMax + 30"]}
                hide={true}
                />
                <Tooltip content={<CustomTooltip/>}/>
                <Customized component={<CustomTitle/>}/>
                <Line
                type="monotone"
                dataKey="sessionLength"
                stroke="white"
                strokeWidth={1}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartAverage;

ChartAverage.propTypes = {
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired
    })).isRequired
};