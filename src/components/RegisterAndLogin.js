import React from 'react'
import Register from "./Register"


export default function RegisterAndLogin() {
    return (
        <div className="row">
            <div className="col-md-5">
                <Register/>
            </div>
            <div className="col-md-2">
                <h1>OR</h1>
            </div>
            <div className="col-md-5">
                <h1>OR</h1>
            </div>
        </div>
    )
}
