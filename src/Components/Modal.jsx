// import { useEffect, useState } from "react";

// function Modal({ showModal, hide, modalInputs, edit }) {
//   const [inputs, setInputs] = useState({
//     registration_code: "",
//     is_busy: "",
//     last_use_time: "",
//     total_ride_kilometres: "",
//   });

//   const control = (e, what) => {
//     const inputsCopy = { ...inputs };
//     inputsCopy[what] = e.target.value;
//     setInputs(inputsCopy);
//   };

//   useEffect(() => {
//     setInputs({
//         registration_code: modalInputs.registration_code,
//         is_busy: modalInputs.is_busy,
//         last_use_time: modalInputs.last_use_time,
//         total_ride_kilometres: modalInputs.total_ride_kilometres,
//     });
//   }, [modalInputs]);

//   const handleEdit = () => {
//     edit(
//       {
//         registration_code: inputs.registration_code,
//         is_busy: inputs.is_busy,
//         last_use_time: inputs.last_use_time,
//         total_ride_kilometres: inputs.total_ride_kilometres,
//       },
//       modalInputs.id
//     );
//   };

//   return (
//     <div
//       className="modal fade"
//       id="exampleModal"
//       tabindex="-1"
//       role="dialog"
//       aria-labelledby="exampleModalLabel"
//       aria-hidden="true"
//       style={{
//         display: showModal ? "block" : "none",
//         opacity: showModal ? "1" : "0",
//       }}
//     >
//       <div className="modal-dialog modal-dialog-centered" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">
//               Edit scooter
//             </h5>
//             <button
//               type="button"
//               className="close"
//               data-dismiss="modal"
//               aria-label="Close"
//               onClick={hide}
//             >
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             <form>
//               <div className="form-group">
//                 <label  className="col-form-label">
//                 Registration code
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   value={inputs.is_busy}
//                   onChange={(e) => control(e, "registration_code")}
                 
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="col-form-label">
//                   Busy
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
           
//                   value={inputs.is_busy}
//                   onChange={(e) => control(e, "is_busy")}
               
//                 />
//               </div>
//               <div className="form-group">
//                 <label  className="col-form-label">
//                 Last use time
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
             
//                   value={inputs.last_use_time}
//                   onChange={(e) => control(e, "last_use_time")}
              
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="col-form-label">
//                 Total ride kilometres
//                 </label>
//                 <input
//                   className="form-control"
//                   type="text"
              
//                   value={inputs.total_ride_kilometres}
//                   onChange={(e) => control(e, "total_ride_kilometres")}
            
//                 />
//               </div>

//               <div class="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-dismiss="modal"
//                   onClick={hide}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={handleEdit}
//                 >
//                   Save changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Modal;