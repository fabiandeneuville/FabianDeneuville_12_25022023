function DashboardHeading(props){
    return (
        <div>
            <h1 className="dashboard__layout__heading__title">Bonjour <span className="dashboard__layout__heading__title__firstName">{props.firstName}</span></h1>
            <p className="dashboard__layout__heading__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default DashboardHeading;