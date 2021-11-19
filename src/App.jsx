import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Create from "./Components/Create";

function App() {
  const [table, setTable] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    registration_code: "",
    is_busy: "",
    last_use_time: "",
    total_ride_kilometres: "",
  });

  // const reset = () => {
  //   setLastUpdate(Date.now());
  // };
  // const dateOnly = (data) => {
  //   return data.map((a) => {
  //     a.last_received = a.started_work.slice(0, 10);
  //     return a;
  //   });
  // };

  // const [filterBy, setFilterBy] = useState("");
  // const [searchBy, setSearchBy] = useState("");

  //Read React

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
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   if (filterBy) {
  //     if (filterBy === "all") {
  //       reset();
  //     }
  //     axios
  //       .get("http://localhost:3003/scooters-filter/" + filterBy)
  //       .then((res) => {
  //         setTable(dateOnly(res.data));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [filterBy]);

  // useEffect(() => {
  //   if (searchBy) {
  //     axios
  //       .get("http://localhost:3003/scooters-surname/?s=" + searchBy)
  //       .then((res) => {
  //         setTable(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [searchBy]);

  //Update React
  const edit = (item, id) => {
    setShowModal(false);
    axios
      .put("http://localhost:3003/scooters/" + id, item)
      .then((res) => {
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
        setLastUpdate(Date.now());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App bg-light">
      <div className="container">
      <Create className="justify-content-center" create={create}></Create>
        <div className="justify-content-center">
          
            <div className="card-header">List of scooters</div>

            <List table={table} modal={modal} remove={remove}/>

            <Modal
              showModal={showModal}
              modalInputs={modalInputs}
              hide={hide}
              edit={edit}
              
            />
          
          </div>
        </div>
        <div >
         
        </div>
     
    </div>
  );
}

export default App;
