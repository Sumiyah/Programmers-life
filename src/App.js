import 'bootstrap/dist/css/bootstrap.min.css'
import Status from './components/Status.jsx'
import View from './components/View.jsx'
import Actions from './components/Actions.jsx'
import React, { useState } from 'react'
import Programmer from './Programmer'

function App() {
  const [status, setStatus] = useState(new Programmer());
  const [medalColor, setMedalColor] = useState('#b08d57');
  
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <Status status={status} medalColor={medalColor} />
        </div>
        <div className="card-body mt-2">
          <View status={status} />
        </div>
        <div className="card-footer">
          <Actions status={status} setStatus={setStatus} setMedalColor={setMedalColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
