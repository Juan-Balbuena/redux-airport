import React, { useState } from 'react';
import Form from '../Form/Form.jsx';

function App() {

  return (
    <div>
      <h1>Redux Airport</h1>
      {/* <input placeholder='Airline Name' />
      <button>Add Airline</button> */}
      <Form />
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
