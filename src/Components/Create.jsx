import { useState } from "react";


function Create({create}) {

    

    const [input, setInput] = useState({
        registration_code: "",
        is_busy: "0",
        last_use_time: "",
        total_ride_kilometres: "",
    })

    const formControl = (e, what) => {
        const inputCopy = { ...input };
        inputCopy[what] = e.target.value;
        setInput(inputCopy);
    }

    const handleCreate = () => {
        const inputCopy = { ...input };
        if (inputCopy.total_ride_kilometres === '') {
            inputCopy.total_ride_kilometres = 0;
        }
        create(inputCopy);
    }

    return (
        <div className="form-group">
            <h2>Add new </h2>
            <div className="form-group">
                <div>Registration code</div><input type="text" value={input.registration_code} onChange={(e) => formControl(e, 'registration_code')} />
            </div>
            {/* <div className="form-group">
            <div>Busy</div><input type="text" value={input.is_busy} onChange={(e) => formControl(e, 'is_busy')} />
            </div> */}
            <div className="form-group">
            <div>Total ride kilometres</div><input type="text" value={input.total_ride_kilometres} onChange={(e) => formControl(e, 'total_ride_kilometres')} />
            </div>
            <div className="form-group">
            <div> Last used</div><input type="date" value={input.last_use_time.slice(0, 10)} onChange={(e) => formControl(e, 'last_use_time')} />
            </div>
            <div className="form-group">
            <button className="btn btn-primary" onClick={handleCreate}>Add</button>
            </div>
        </div>
    )
}

export default Create;