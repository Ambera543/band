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
      {/* <span className="px4">Sort </span> */}
      <select onChange={selectSort} value={sortValue}>
        <option value=""> Select scooter</option>
        <option value='kilometres_asc'>
          By total ride kilometres - 19
        </option>
        <option value='kilometres_desc'>
          By total ride kilometres- 91
        </option>
        <option value='time_asc'>By last use time - 19</option>
        <option value='time_desc'>By last use time - 91</option>
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
