import { Fragment, React, useState } from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList() {
    
    const [employeeListData,setEmployeeListData]=useState(JSON.parse(localStorage.getItem("employee")));
    const employeeEm = employeeListData.map((employee) =>
    <EmployeeCard employee={employee} refreshcard={refreshCards} key={employee.id}/>
    );

    function refreshCards(){
        setEmployeeListData(JSON.parse(localStorage.getItem("employee")));
    }

    return (
        <Fragment>
            {employeeEm}
        </Fragment>
    );
}

export default EmployeeList;
