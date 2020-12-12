import React from 'react'

function View({status}) {
    return (
        <div className="col text-center">
            <img style={{height: "300px", width: "250px"}} src={status.image} alt="img" />
            <h5 className="mt-3 border rounded" style={{backgroundColor: "#E5E5E5", 'white-space': 'pre-wrap'}}> {status.message}</h5>
        </div>
    );
}

export default View;