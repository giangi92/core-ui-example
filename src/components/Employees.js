import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import LoadingPopup from './LoadingPopup';
import ChartModal from './ChartModal';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import TokenCheckerRedirect from './TokenChecker';

const BodyContent = () => {
    const [employeeData, setEmployeeData] = useState(undefined);
    const [loadingPopup, setLoading] = useState(false);
    const [chartModalVisible, setChartModalVisible] = useState(false);

    function toggle() {
        setLoading(!loadingPopup);
    }

    function toggleChartModal() {
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

    const CoolEmployeesList = () => {

        let gridApi = {};

        const [users, setUsers] = useState([]);
        let loggedUser = localStorage.getItem('user') || undefined;
        if(loggedUser){
            loggedUser = JSON.parse(loggedUser);
        }

        let auth = '';
        if (loggedUser){
            console.log("Ciao",loggedUser.name);
            
            console.log('l utente è loggato correttamente, accessToken è:',loggedUser.sessionToken);
            
            auth = 'JWT ' + loggedUser.sessionToken;
        }else{
            console.log('devi ancora loggarti');
            
        }

        const columnDefs = [{
            headerName: "Name", field: "name", sortable: true, filter: true, checkboxSelection: true, editable: true
        }, {
            headerName: "Email", field: "email", sortable: true, filter: true, editable: true
        }, {
            headerName: "Salary", field: "salary", sortable: true, filter: true, editable: true
        }, {
            headerName: "Da licenziare?", field: "firedable", sortable: true, filter: true, editable: true
        }];

        useEffect(() => {
            if (loggedUser) {
                fetch('/employees', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': auth
                    }
                })
                    .then(result => result.json()).then((employees) => {

                        if (employees && (employees.length > 0)) setUsers(employees)
                    })
            }

        }, [])

        return (
            <div className="ag-theme-material"
                style={{
                    height: '500px',
                    width: '100%'
                }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={{
                        flex: 1,
                        minWidth: 150,
                        resizable: true
                    }}
                    rowData={users}
                    rowSelection="multiple"
                    pagination={true}
                    paginationPageSize={10}
                    onGridReady={params => gridApi = params.api}
                    onCellValueChanged={((field) => {

                        console.log("campo modificato:", field.data);

                        fetch("/employees/update",
                            {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(field.data)
                            })
                            .then(function (res) { return res.json(); })
                            .then(function (data) { console.log(data) })
                    })}
                >
                </AgGridReact>
            </div>
        )
    }

    const Tabs = () => {
        const [activeTab, setActiveTab] = useState('1');

        console.log(activeTab);

        function toggle(tab) {

            setActiveTab(tab);
        }

        function tabPane() {
            return (
                <>
                    <TabPane tabId="1">
                        <div>
                            <button type="button" className="btn btn-info little-spacing" onClick={retrieveEmployees}>Show Employees</button>
                            {employeeData && <button type="button" className="btn btn-info little-spacing" onClick={toggleChartModal} >Show Salaries</button>}
                            {loadingPopup && <LoadingPopup show={loadingPopup} />}
                            {employeeData && <EmployeeCard data={employeeData} />}
                            {chartModalVisible && <ChartModal data={employeeData} show={chartModalVisible} toggle={toggleChartModal} />}
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <CoolEmployeesList></CoolEmployeesList>
                    </TabPane>
                    <TabPane tabId="3">
                        Ciccio Cappuccio
                    </TabPane>
                </>
            );
        }

        return (
            <div>
                <div className="animated fadeIn">
                    <Row>
                        <Col xs="12" md="100%" className="mb-4">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        active={activeTab === '1'}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Lista brutta
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        active={activeTab === '2'}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Lista più carina
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        active={activeTab === '3'}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        Sorpresa
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                {tabPane()}
                            </TabContent>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Raccolta informazioni dei dipendenti</h1>
            {/** Menu a tab per separare la vecchia lista con la nuova fatta con ag-grid */}
            <TokenCheckerRedirect uri="users"></TokenCheckerRedirect>
            <Tabs></Tabs>
        </div>
    )
}

export default BodyContent;