import React, {useState} from 'react'

function View({status}) {
    return (
        <div className="col text-center">
            <img src={status.image} alt="img" />
            <h3 className="mt-3"> {status.message}</h3>
        </div>
    );
}

export default View;