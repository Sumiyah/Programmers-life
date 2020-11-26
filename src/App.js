import 'bootstrap/dist/css/bootstrap.min.css'
import Status from './components/Status.jsx'
import View from './components/View.jsx'
import Actions from './components/Actions.jsx'
import React, { useState } from 'react'

function App() {
  const [status, setStatus] = useState({
    energy: '55',
    money: '10',
    fullness: '29',
    meals: '10',
    happiness: '20',
  });
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <Status status={status} />
        </div>
        <div className="card-body mt-5">
          <View status={status} />
        </div>
        <div className="card-footer">
          <Actions setStatus={setStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;
