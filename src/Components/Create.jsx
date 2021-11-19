import { useState } from "react";


function Create({create}) {

    

    const [input, setInput] = useState({
        registration_code: "",
        is_busy: "",
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
        <div className="zoo_form">
            <h2>Add new </h2>
            <div className="zoo_form_input">
                <span>Name</span><input type="text" value={input.registration_code} onChange={(e) => formControl(e, 'registration_code')} />
            </div>
            <div className="zoo_form_input">
            <span>Type</span><input type="text" value={input.is_busy} onChange={(e) => formControl(e, 'is_busy')} />
            </div>
            <div className="zoo_form_input">
            <span>total_ride_kilometres</span><input type="text" value={input.total_ride_kilometres} onChange={(e) => formControl(e, 'total_ride_kilometres')} />
            </div>
            <div className="zoo_form_input">
            <span>Born date</span><input type="date" value={input.last_use_time} onChange={(e) => formControl(e, 'last_use_time')} />
            </div>
            <div className="zoo_form_input_button">
            <button onClick={handleCreate}>Add</button>
            </div>
        </div>
    )
}

export default Create;