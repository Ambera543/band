function Stats({stats}) {


    return (
        <div className="scooter_stats">
            <div className="scooter_stats_stat">
                <div><i>Scooters Count:</i> <b>{stats.count}</b></div>
                <div><i>Scooters Kilometres:</i> <b>{stats.kilometres} km</b></div>
                
            </div>
    
        </div>
    )
}

export default Stats;