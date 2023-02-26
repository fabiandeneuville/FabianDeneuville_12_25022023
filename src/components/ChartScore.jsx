import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

function ChartScore(props){

    return (
        <div className="dashboard__layout__score">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                innerRadius="70%" 
                outerRadius="100%"
                data={[{score: 1, fill: 'transparent'}, {score: props.score, fill: "crimson"}]}
                startAngle={90} 
                endAngle={450}
                >
                    <RadialBar
                    minAngle={15}
                    clockWise="false"
                    dataKey="score"
                    fill="#crimson"
                    cornerRadius={20}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartScore;