function Item ({ scooters, modal }) {
    const showEdit = () => {
      modal(scooters)
    }
  
    return (
      <div className="zoo_list_scooters">
        <div className="zoo_list_scooters_name">{scooters.name}</div>
        <div className="zoo_list_scooters_type">{scooters.type}</div>
        <div className="zoo_list_scooters_stats">
          
          <span><i>Born date:</i> {scooters.born}</span>
          
          <span>
            <i>total_ride_kilometres:</i> {scooters.total_ride_kilometres} kg.
          </span>
        </div>
        <button onClick={showEdit}>Edit</button>
      </div>
    );
  }

  export default Item;
  