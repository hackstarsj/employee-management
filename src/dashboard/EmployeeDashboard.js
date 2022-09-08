import { React } from 'react';
import { Container,Row } from 'react-bootstrap';
import EmployeeList from './EmployeeList';
import Alert from 'react-bootstrap/Alert';


function EmployeeDashboard() {
  let employeeList=[];
  if(localStorage.getItem("employee")!=null){
    employeeList=JSON.parse(localStorage.getItem("employee"));
  }
  else{
    employeeList=[];
  }

  return (
    <Container>
      <Row className='mt-5 mb-5'>
        { employeeList.length === 0 ? <Alert key="danger" variant="danger" className="mt-5 text-center">No Employee Data!</Alert>:<EmployeeList/>}
      </Row>
    </Container>
  );

}

export default EmployeeDashboard;
