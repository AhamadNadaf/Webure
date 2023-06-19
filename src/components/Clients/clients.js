import React from "react";
import './clients.css'
import client from '../assets/client.png'

const Client = () => {
    return (
        <div id="client-section">
            <div className="client-sec">
                <img src={client} className="img-fluid" alt="client-img" />
            </div>
        </div>
    )
}

export default Client