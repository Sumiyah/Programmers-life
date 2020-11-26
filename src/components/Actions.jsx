import React, {useState} from 'react'

function Actions() {
    return (
        <div className="row justify-content-center ">
            <button type="button" className="btn btn-success px-4"><i className="fas fa-hamburger"></i></button>
            <button type="button" className="btn btn-primary px-4 ml-3"><i class="fas fa-bed"></i></button>
            <button type="button" className="btn btn-danger px-4 ml-3"><i class="fas fa-dice"></i></button>
            <button type="button" className="btn btn-warning px-4 ml-3"><i class="fas fa-shopping-basket text-white"></i></button>
            <button type="button" className="btn btn-info px-4 ml-3"><i class="fas fa-laptop-code"></i></button>
        </div>
    );
}

export default Actions;