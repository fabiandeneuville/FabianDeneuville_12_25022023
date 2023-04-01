import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Customized, ReferenceArea} from "recharts";
import CustomTooltip from "./CustomTooltip";

function Title(){
    return (
        <g textAnchor="left">
        <text fontSize='1em' fill='white' x='10%' y='10%'>
        Durée moyenne des
        </text>
        <text fontSize='1em' fill='white' x='10%' y='15%'>
        sessions
        </text>
    </g>
    )
}

function ChartAverage(props){

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.sessions} strokeWidth={1}>
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
                <Customized component={<Title/>}/>
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
    )
}

export default ChartAverage;