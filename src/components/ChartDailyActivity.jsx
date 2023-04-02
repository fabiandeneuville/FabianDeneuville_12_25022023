import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getDaysIndex } from '../utils/utils';

function ChartDailyActivity(props){

    const data = getDaysIndex(props.activity.sessions); // Formating days to display index instead of actual date

    return (
        <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} barGap={8} barCategoryGap={1}>
            <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}}/>
            <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} hide={true}/>
            <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
            <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
            <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
        </BarChart>
    </ResponsiveContainer>
    )
}

export default ChartDailyActivity;