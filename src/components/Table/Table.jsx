import { useSelector } from "react-redux";


function Table(){
    const airlines = useSelector(store => store.airlines);


return(
<div>
<table>
    <thead>
        <tr>
            <th>Airline</th>
        </tr>
    </thead>

        {airlines.map((airline,index) => 
          <tr key={index}>
            <td>{airline.name}</td>
          </tr> )}
</table>
</div>      
)
}




export default Table;