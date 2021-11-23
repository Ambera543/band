import { useState } from "react";

function Nav({ reset, sort }) {
  const [sortValue, setSortValue] = useState("");

  const selectSort = (e) => {
    setSortValue(e.target.value);
    sort(e.target.value);
  };
  const resetHandler = () => {
    reset();
    setSortValue("");
    sort("");
  };
  return (
    <div className="scooter_nav">
      <div className>Sort By </div>
      <select onChange={selectSort} value={sortValue}>
        <option value=""> Select scooter</option>
        <option value="kilometres_asc">Total ride kilometres - 1-9</option>
        <option value="kilometres_desc">Total ride kilometres- 9-1</option>
        <option value="time_asc"> Last use time - 1-9</option>
        <option value="time_desc">Last use time - 9-1</option>
      </select>
      <div>
        <button className="btn btn-primary" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Nav;
