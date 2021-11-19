import { useState } from "react";

function Nav({ reset,  sort }) {

const [sortValue, setSortValue] = useState('');

const selectSort = e => {
    setSortValue(e.target.value);
    sort(e.target.value)
}
const resetHandler = () => {
    reset();
    setSortValue('');
    sort('');
}
return (
    <div>
    <div className="scooter_nav">
         <span>Animal Sort</span>
                <select onChange={selectSort} value={sortValue}>
                    <option value="">Select scooter</option>
                    <option value="total_ride_kilometres_asc">By total_ride_kilometres - AZ</option>
                    <option value="total_ride_kilometres_desc">By total_ride_kilometres- ZA</option>
                    <option value="last_use_time_asc">By last_use_time - 19</option>
                    <option value="last_use_time_desc">By last_use_time - 91</option>
                </select>
            </div>
            <div className="scooter_nav_reset">
            <button onClick={resetHandler}>Reset</button>

    </div>
    </div>
)
}


export default Nav;