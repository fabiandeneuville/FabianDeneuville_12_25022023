import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function ChartPerformance(props){
    return (
        <div className="dashboard__layout__performance">
            <ResponsiveContainer width="100%"height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="45%" data={props.performance}>
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
        </div>
    )
}

export default ChartPerformance;