import React, { useState } from 'react'

function Status ({status}) {
  return (
    <>
      <div className="row justify-content-center border py-3">
        <div className="col-3">
          <label>Energy:</label>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated " role="progressbar" style={{width: `${status.energy}%` } } ></div>
          </div>
        </div>
        <div className="col-3">
          <label>Fullness:</label>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated " role="progressbar" style={{width: `${status.fullness}%` } } ></div>
          </div>
        </div>
        <div className="col-3">
          <label>Happiness:</label>
          <div className="progress">
            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated " role="progressbar" style={{width: `${status.happiness}%` } } ></div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center border py-2">
          <div className="col-2">Money: <i class="far fa-money-bill-alt"></i> x{status.money}</div>
          <div className="col-2">Meals: <i class="fas fa-hamburger"></i> x{status.meals}</div>
          <div className="col-2">Level: <i class="fab fa-react"></i> {status.level}</div>
          <div className="col-2">Working Hours: <i class="far fa-clock"></i> {status.workHours}</div>
      </div>
    </>
  );
}

export default Status;