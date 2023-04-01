function LegendScore(props){
    return (
        <g textAnchor="middle">
            <text fontSize='1em' fill='black' x='15%' y='10%'>
                Score
            </text>
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
    )
};

export default LegendScore;