// import { useState } from "react";

function Item({ data, modal, remove }) {
  const showEdit = () => {
    modal(data);
  };

  function is_busy() {
    if (data.is_busy > 0) {
      return "yes";
    } else return "no";
  }

  // const [value, setValue] = useState([false, true, false, true])

  //   const change = i => {
  //       const valueCopy = value.slice();
  //       valueCopy[i] = !valueCopy[i]
  //       setValue(valueCopy);
  //   }
  


  return (
    <table className="table">
      <tbody>
      <tr>
        <th>Registration code</th>
        <th>Busy</th>
        <th>Last use time</th>
        <th>Total ride kilometres</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr>
        <td>{data.registration_code}</td>

        <td>{is_busy()} <input type="checkbox" /> </td>
        <td><div>{data.last_use_time.slice(0, 10)}</div>
        <input type="date" /></td>
        <td><div>{data.total_ride_kilometres}</div>
        <input type="text" /></td>
        <td>
          <button className="btn btn-primary" onClick={showEdit}>
            Redaguoti
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={() => remove(data.id)}>
            Trinti
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  );
}

export default Item;

//  <input onChange={() => change(0)} type="checkbox" checked={value[0]}/>
