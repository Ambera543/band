import "./App.scss";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Create from "./Components/Create";
 import Stats from "./Components/Stats";
import Nav from "./Components/Nav";
import Sort from "./Components/sort";
import ActionMsg from "./Components/ActionMsg"

function App() {
  const [table, setTable] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  // const [sortBy, setSortBy] = useState("");
  // const sortBy = useRef('');
  // const [used, setUsed] = useState([]);

  // const dateOnly = (data) => {
  //   return data.map((a) => {
  //   a.last_use_time = a.last_use_time.slice(0, 10);
  //   console.log(data);
  //     return a;
      
  //   });
  // };

  const [modalInputs, setModalInputs] = useState({
    registration_code: "",
    is_busy: "",
    last_use_time: "",
    total_ride_kilometres: "",
  });

  const [stats, setStats] = useState({
    count: 0,
    kilometres: 0,
  });

  const reset = () => {
    setLastUpdate(Date.now());
  
  };

  const [showMsg, setShowMsg] = useState(false);
  const msg = useRef('');

  const addMsg = (text) => {
      msg.current = text;
      setShowMsg(true);
      setTimeout(() => {clearMsg()}, 2000);
  }

  const clearMsg = () => {
      setShowMsg(false)
  }
  //   const sort = (by) => {
  //     setTable(itemSort(item, by));
  //     sortBy.current = by;
  // }

  // useEffect(() => {
  //   axios.get("http://localhost:3003/scooters").then((res) => {
  //     // setAnimal(tableSort(dateOnly(res.data), sortBy));
  //     setTable(tableSort(res.data), sortBy.current);
  //     console.log(res.data);
  //   });
  // }, [lastUpdate]);

  // const sortConditions = useRef("");
  // const handleSort = () => {
  //   if (sortConditions.current) {
  //     setTable(sort(table, sortConditions.current));
  //   }
  // };

  // useEffect(() => {
  //   if (sortBy) {
  //     setTable(sortas(table, sortBy));
  //   }
  // }, [sortBy]);

  // const sort = by => {
  //   const tableCopy = table.slice();
  //   if ('last_use_time' === by) {
  //     tableCopy.sort((a, b) => {
  //       if (a.last_use_time > b.last_use_time) {
  //         return 1
  //       }
  //       else 
  //       // (a.last_use_time < b.last_use_time) {
  //        { return -1
  //       }
  //       // return 0
  //     })
  //     setTable(tableCopy)
  //   }
  //   if ('total_ride_kilometres' === by) {
  //    tableCopy.sort((a, b) => a.total_ride_kilometres - b.total_ride_kilometres)
  //     setTable(tableCopy)
  //   }
  // }

  //Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/scooters")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);

  const create = (item) => {
    axios
      .post("http://localhost:3003/scooters", item)
      .then(() => {
        addMsg('Record successfully saved.');
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:3003/stats").then((res) => {
      setStats(res.data[0]);
    });
  }, [lastUpdate]);

  const [filterBy, setFilterBy] = useState('');
    
  useEffect(() => {
      if (filterBy) {
          axios.get('http://localhost:3003/scooters-filter/'+filterBy)
          .then(res => {
              setTable(Sort(res.data), sortConditions.current);
              // setItems(fixdate(res.data));
              // console.log(res.data);
          })
          setSearchBy('');
      }
  }, [filterBy])



  // const reset = () => {
  //     setLastUpdate(Date.now());
  // }

  // ----------------- SORT -----------------
  const sortConditions = useRef('');
  const handleSort = () => {
      if (sortConditions.current) {
          setTable(Sort(table, sortConditions.current));
      }
  }


  // ----------------- SEARCH -----------------
  const [searchBy, setSearchBy] = useState('');

  useEffect(() => {
      if (searchBy) {
      axios.get('http://localhost:3003/scooters-search' +searchBy)
          .then(res => {
              setTable(Sort(res.data), sortConditions.current);
          })
          setFilterBy('');
      }
  }, [searchBy])

  // useEffect(() => {
  //   axios.get("http://localhost:3003/scooters-used").then((res) => {
  //     setTable(res.data);
  //     setUsed(res.data.filter(a=>a.last_use_time));
  //   });
  // }, [lastUpdate]);

  
  // const [filterBy, setFilterBy] = useState("");
  // const [searchBy, setSearchBy] = useState("");

  // useEffect(() => {
  //   if (filterBy) {
  //     if (filterBy==='all'){
  //       reset()
  //     }
      
  //     axios
  //       .get("http://localhost:3003/scooters-filter/" + filterBy)
  //       .then((res) => { 
        
  //         setUsed(dateOnly(res.data));
          
  //       }).catch(err=>console.log(err));
  //   }
  // }, [filterBy]);

  //Update React
  const edit = (item, id) => {
    setShowModal(false);
    axios
      .put("http://localhost:3003/scooters/" + id, item)
      .then((res) => {
        addMsg('Record was edited successfully.');
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  const modal = (item) => {
    setShowModal(true);
    setModalInputs(item);
  };

  const hide = () => {
    setShowModal(false);
  };
  const remove = (id) => {
    axios
      .delete("http://localhost:3003/scooters/" + id)
      .then((res) => {
        addMsg('Record was deleted successfully');
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App bg-light">
       <ActionMsg msg={msg.current} showMsg={showMsg}></ActionMsg>
      <div className="container">
        <Stats stats={stats}></Stats>
        <Nav searchBy={searchBy}  setSearchBy={setSearchBy} filterBy={filterBy} setFilterBy={setFilterBy} sortConditions={sortConditions} handleSort={handleSort}  reset={reset}></Nav>
        <Create className="justify-content-center" create={create} reset={reset}></Create>
        <div className="justify-content-center">
          <div className="card-header">List of scooters</div>

          <List table={table} modal={modal} remove={remove} />

          <Modal
            showModal={showModal}
            modalInputs={modalInputs}
            hide={hide}
            edit={edit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

  // sortConditions={sortConditions}
          // handleSort={handleSort}

          // sort={sort} reset={reset