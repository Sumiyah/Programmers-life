import React from 'react';
import ReactTooltip from 'react-tooltip';

function Status ({status, medalColor}) {
  return (
    <>
      <div className="row justify-content-center border-bottom pt-0 pb-3">
        <div className="col-4">
          <label>Energy:</label>
          <div className="progress border">
            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{width: `${status.energy}%` }}>{status.energy}%</div>
          </div>
        </div>
        <div className="col-4">
          <label>Fullness:</label>
          <div className="progress border">
            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{width: `${status.fullness}%` }}>{status.fullness}%</div>
          </div>
        </div>
        <div className="col-4">
          <label>Happiness:</label>
          <div className="progress border">
            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: `${status.happiness}%` } } >{status.happiness}%</div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around pt-2">
          <div data-tip='Amount of Money'>
            <i className="far fa-money-bill-alt mx-1" style={{color:"green"}}></i> 
            x{status.money}
          </div>
          <ReactTooltip />

          <div data-tip='Number of Meals'>
            <i className="fas fa-hamburger mx-1" style={{color:"#EDAC2F"}}></i> 
            x{status.meals}
          </div>
          <ReactTooltip />
          
          <div data-tip='Proogramming Level'>
            <i className="fab fa-react mx-1" style={{color:"#29B6F6"}}></i>LvL:
            <span style={{color: medalColor}}><i className="fas fa-medal mx-1"></i></span>
          </div>
          <ReactTooltip />

          <div data-tip='Working Hours'>
            <i className="far fa-clock mx-1"></i> 
            {status.workHours} hr
          </div>
          <ReactTooltip />
      </div>
    </>
  );
}

export default Status;