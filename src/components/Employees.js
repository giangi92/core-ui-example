import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import LoadingPopup from './LoadingPopup';
import ChartModal from './ChartModal';
import CarsGrid from './CarsGrid';

const BodyContent = () => {
    const [employeeData, setEmployeeData] = useState(undefined);
    const [loadingPopup, setLoading] = useState(false);
    const [chartModalVisible, setChartModalVisible] = useState(false);

    function toggle() {
        setLoading(!loadingPopup);
    }

    function toggleChartModal(){
        setChartModalVisible(!chartModalVisible);
    }

    const retrieveEmployees = () => {
        setLoading(true);

        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                setEmployeeData(data);
                setLoading(false);
            })
            .catch(console.log)
    }

    return (
        <div>
            <h1>Raccolta informazioni dei dipendenti</h1>
            <button type="button" className="btn btn-info little-spacing" onClick={retrieveEmployees}>Show Employees</button>
            {employeeData && <button type="button" className="btn btn-info little-spacing" onClick={toggleChartModal} >Show Salaries</button>}
            {loadingPopup && <LoadingPopup show={loadingPopup} />}
            {employeeData && <EmployeeCard data={employeeData} />}
            {chartModalVisible && <ChartModal data={employeeData} show={chartModalVisible} toggle= {toggleChartModal}/>}
        </div>
    )
}

export default BodyContent;