import { RadialBarChart, RadialBar, Customized, ResponsiveContainer } from "recharts";
import LegendScore from "./LegendScore";

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
                <Customized component={<LegendScore score={props.score}/>}/>
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default ChartScore;