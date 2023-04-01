const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="customTooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;