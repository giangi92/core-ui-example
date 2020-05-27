import React, { useState } from 'react';
import LineChart from './LineChart';
import PopoverItem from './PopoverItem';
import AlertSuccess from './AlertSuccess';

const Homepage = () => {
    const [notificationNumb, setNotificationNumber] = useState(0);
    const [successMessage, setSuccessMessage] = useState(false);
    return (
        <div>
            <h3>Giangisoft Dashboard</h3>

            {/**callout */}
            <div className="row">
                <div className="col-sm-2">
                    <div className="callout callout-info">
                        <small className="text-muted">New Clients</small><br />
                        <strong className="h4">9,123</strong>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="callout callout-danger">
                        <small className="text-muted">Recuring Clients</small><br />
                        <strong className="h4">22,643</strong>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="callout callout-warning">
                        <small className="text-muted">Pageviews</small><br />
                        <strong className="h4">78,623</strong>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="callout callout-success">
                        <small className="text-muted">Organic</small><br />
                        <strong className="h4">49,123</strong>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="callout">
                        <small className="text-muted">CTR</small><br />
                        <strong className="h4">23%</strong>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="callout callout-primary">
                        <small className="text-muted">Bounce Rate</small><br />
                        <strong className="h4">5%</strong>
                    </div>
                </div>
            </div>

            <hr ></hr>

            <div className="row">
                <div className="col">
                    <LineChart></LineChart>
                </div>
                <div className="col">
                    
                    <button type="button" className="btn btn-primary" onClick={() => {
                        setNotificationNumber(notificationNumb + 1);
                    }}>
                        Aumenta le tue notifiche <span className="badge badge-light">{notificationNumb}</span>
                    </button>
                </div>

            </div>

            <div className="col">
                <hr />
            </div>
            <div className="col">
                {successMessage && <AlertSuccess></AlertSuccess>}
                <PopoverItem key={1} item={{
                    placement: 'bottom',
                    text: 'Mostra Successo!',
                }} successAlertFunc = {setSuccessMessage} showSuccessAlert={successMessage} id={1}></PopoverItem>
            </div>

        </div>
    )
}

export default Homepage;