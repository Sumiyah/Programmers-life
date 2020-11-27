import React from 'react'

function Status ({status}) {
  return (
    <>
      <div className="row justify-content-center border-bottom pt-0 pb-3">
        <div className="col-3">
          <label>Energy:</label>
          <div className="progress border">
            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{width: `${status.energy}%` }}>{status.energy}%</div>
          </div>
        </div>
        <div className="col-3">
          <label>Fullness:</label>
          <div className="progress border">
            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{width: `${status.fullness}%` }}>{status.fullness}%</div>
          </div>
        </div>
        <div className="col-3">
          <label>Happiness:</label>
          <div className="progress border">
            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: `${status.happiness}%` } } >{status.happiness}%</div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around pt-2">
          <div>Money: <i class="far fa-money-bill-alt"></i> x{status.money}</div>
          <div>Meals: <i class="fas fa-hamburger"></i> x{status.meals}</div>
          <div>Level: <i class="fab fa-react"></i> {status.level}</div>
          <div>Working Hours: <i class="far fa-clock"></i> {status.workHours}</div>
      </div>
    </>
  );
}

export default Status;