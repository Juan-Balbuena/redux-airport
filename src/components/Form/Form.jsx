import { useState } from 'react';
import { useDispatch } from 'react-redux';



    function Form(){
        const [airlines, setAirlineName] = useState("");

        const dispatch = useDispatch();

        const handleSubmit = e => {
            e.preventDefault();
            const action = {
                type: 'ADD_AIRLINE', payload: {
                    airlines: airlines,
                }
            };
            dispatch(action);
        };
        return (
            <form onSubmit={handleSubmit}>
                <input value={airlines} onChange={e => setAirlineName(e.target.value)} />
                <button type="submit">Add Airline</button>
            </form>
        )
}


export default Form;
