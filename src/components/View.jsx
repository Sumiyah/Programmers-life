import React from 'react'

function View({status}) {
    return (
        <>
        <div className="col text-center">
            <img style={{height: "300px", width: "250px"}} src={status.image} alt="img" />
        </div>
        <div className="col text-center">
        <h5 className="mt-3 border rounded text-center p-2" style={{backgroundColor: "#E5E5E5", 'white-space': 'pre-wrap', display: 'inline-block'}}> {status.message}</h5>
        </div>
        
        </>
    );
}

export default View;