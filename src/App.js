import 'bootstrap/dist/css/bootstrap.min.css'
import Status from './components/Status.jsx'
import View from './components/View.jsx'
import Actions from './components/Actions.jsx'
import React, { useState } from 'react'
import Programmer from './Programmer'

function App() {
  const [status, setStatus] = useState(new Programmer());
  
  return (
    <div className="container mt-2">
      <div className="card">
        <div className="card-header">
          <Status status={status} />
        </div>
        <div className="card-body mt-2">
          <View status={status} />
        </div>
        <div className="card-footer">
          <Actions status={status} setStatus={setStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;
