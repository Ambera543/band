function Item({ data, modal, remove }) {
  const showEdit = () => {
    modal(data);
  };

  function is_busy() {
    if (data.is_busy > 0) {
      return "yes";
    } else return "no";
  }


  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Registration code</th>
          <th>Busy</th>
          <th>Last use time</th>
          {/* <th>Ride kilometres per day</th> */}
          <th>Total ride kilometres</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>{data.registration_code}</td>

          <td>
            {is_busy()} 
          </td>
          <td>
            <div>{data.last_use_time.slice(0, 10)}</div>
          </td>
          {/* <td>
            <div>{data.total_ride_kilometres}</div>
          </td> */}
          <td>
            <div>{data.total_ride_kilometres}</div>
          </td>
          <td>
            <button className="btn btn-primary" onClick={showEdit}>
              Edit
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => remove(data.id)}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Item;
