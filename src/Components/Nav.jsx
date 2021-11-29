// import { useState } from "react";


function Nav({ filterBy, setFilterBy, reset, searchBy, setSearchBy, sortConditions, handleSort}) {

  // ----------------- FILTER -----------------
  // const [sortValue, setSortValue] = useState("");
  
      const selectFilter = e => {
          setFilterBy(e.target.value)
      }
  
  
  // ----------------- SORT -----------------
      // const selectSort = e => {
      //   sortConditions.current = e.target.value;
      //     handleSort(e.target.value);
      // }
      
  
  // ----------------- SEARCH -----------------
      const handleSearchValue = e => {
          if(!e.target.value) reset();
          setSearchBy(e.target.value)
      }
  
  // ----------------- RESET -----------------
      const resetHandler = () => {
          reset();
          setFilterBy('');
          setSearchBy('');
          sortConditions.current = '';
          handleSort('');
      }
  
      return (
          <div className="main-nav">
            
                  <fieldset>
                      <legend>Filter</legend>
                      <div className="filter">
                          <label>Is busy?</label><br></br>
                          <select onChange={selectFilter} value={filterBy} >
                              <option value="default" hidden>Select filter...</option>
                              <option value="">Select...</option>
                              <option value={1}>yes</option>
                              <option value={0}>no</option>
                          </select>
                          <button className="btn btn-primary mx-4" onClick={resetHandler}>Reset</button>
            
                      </div>
                  </fieldset>
  
                  {/* <fieldset>
                      <legend>Sorting</legend>
                      <div className="sort">
                      <div> Sort By </div>
      <select onChange={selectSort} value={sortValue}>
        <option value=""> Select scooter</option>
        <option value="kilometres_asc">Total ride kilometres - 1-9</option>
        <option value="kilometres_desc">Total ride kilometres- 9-1</option>
        <option value="time_asc"> Last use time - 1-9</option>
        <option value="time_desc">Last use time - 9-1</option>
      </select>
      <button className="btn btn-primary" onClick={resetHandler}>
          Reset
        </button>
     
    </div>
                  </fieldset> */}
             
              <fieldset>
                  <legend>Search</legend>
                  <div className="search">
                      <label>Type search text</label><br />
                      <input onChange={handleSearchValue} value={searchBy}></input>
                  </div>
              </fieldset>
          </div>
      )
  }
  
  export default Nav;

//       <div> Sort By </div>
//       <select onChange={selectSort} value={sortValue}>
//         <option value=""> Select scooter</option>
//         <option value="kilometres_asc">Total ride kilometres - 1-9</option>
//         <option value="kilometres_desc">Total ride kilometres- 9-1</option>
//         <option value="time_asc"> Last use time - 1-9</option>
//         <option value="time_desc">Last use time - 9-1</option>
//       </select>
    
//         <button className="btn btn-primary" onClick={resetHandler}>
//           Reset
//         </button>
     
//     </div>
//   );
// }

// export default Nav;
