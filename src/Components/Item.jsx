// import { useState } from "react";

function Item({ data, modal, remove, inputs }) {
  const showEdit = () => {
    modal(data);
  };

  function is_busy() {
    if (data.is_busy > 0) {
      return "yes";
    } else return "no";
  }

  // let ride = data.total_ride_kilometres + inputs.total_ride_kilometres
  // const [value, setValue] = useState([false, true, false, true])

    // const change = i => {
    //     const valueCopy = value.slice();
    //     valueCopy[i] = !valueCopy[i]
    //     setValue(valueCopy);
    // }

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
            <div>{ride}</div>
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

//  <input onChange={() => change(0)} type="checkbox" checked={value[0]}/>
