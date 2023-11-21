import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



    function Form(){
        const airlines = useSelector(store => store.airlines);
        const [airlineName, setAirlineName] = useState("");

        const dispatch = useDispatch();

        const handleSubmit = e => {
            e.preventDefault();
            const action = {
                type: 'ADD_AIRLINE', payload: {
                    name: airlineName,
                }
            };
            dispatch(action);
            setAirlineName("");
        };
        return (
            <form onSubmit={handleSubmit}>
                <input value={airlineName} onChange={(e) => setAirlineName(e.target.value)} />
                <button type="submit">Add Airline</button>
            </form>
        )
}


export default Form;
