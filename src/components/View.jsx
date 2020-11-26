import React, {useState} from 'react'

function View({status}) {
    return (
        <div className="row justify-content-center">
            <img src={status.img} alt="img" />
        </div>
    );
}

export default View;