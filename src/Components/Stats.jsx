function Stats({stats, sort}) {


    return (
        <div className="scooter_stats">
            <div className="scooter_stats_stat">
                <div><i>Scooters Count:</i> <b>{stats.count}</b></div>
                <div><i>Scooters Kilometres:</i> <b>{stats.kilometres} km</b></div>
                
            </div>
            <div className="card">
                        <div className="card-body" style={{ height: "150px", backgroundColor: 'lightblue'}}>
                            <h5 className="card-title" style={{ marginBottom: "25px" }}>Sort BY:</h5>
                            <button type="button" class="btn btn-primary mx-4" onClick={() => sort("total_ride_kilometres")}>
                               Total ride kilometres
                            </button>
                            <button type="button" class="btn btn-primary" onClick={() => sort("last_use_time")}>
                             Last use time
                            </button>
                        </div>
                    </div>
        </div>
    )
}

export default Stats;